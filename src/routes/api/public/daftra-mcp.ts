import { createFileRoute } from "@tanstack/react-router";
import { callDaftraTool, listDaftraTools } from "@/lib/daftra/daftra.functions";
import { DAFTRA_TOOLS } from "@/lib/daftra/api-map";

export const Route = createFileRoute("/api/public/daftra-mcp")({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({
          name: "daftra-mcp",
          version: "1.0.0",
          tools: DAFTRA_TOOLS.map((t) => ({ name: t.name, title: t.title, description: t.description, perm: t.perm })),
        });
      },
      POST: async ({ request }) => {
        const alazabKey = request.headers.get("x-alazab-key") ?? "";
        const body = (await request.json().catch(() => ({}))) as {
          id?: string | number;
          method?: string;
          params?: { name?: string; arguments?: Record<string, unknown> };
        };
        const jsonrpc = (result: unknown, error?: { code: number; message: string }) =>
          Response.json({ jsonrpc: "2.0", id: body.id ?? null, ...(error ? { error } : { result }) });

        if (body.method === "tools/list") {
          const r = await listDaftraTools({});
          return jsonrpc({ tools: r.tools });
        }
        if (body.method === "tools/call") {
          const args = body.params?.arguments ?? {};
          const name = body.params?.name ?? "";
          const res = await callDaftraTool({
            data: {
              tool: name,
              alazabKey,
              params: (args.params ?? {}) as Record<string, string | number>,
              query: (args.query ?? {}) as Record<string, string | number | boolean>,
              body: args.body,
              confirm: typeof args.confirm === "string" ? args.confirm : undefined,
            },
          });
          return jsonrpc({
            content: [{ type: "text", text: JSON.stringify(res) }],
            isError: !(res as { ok?: boolean }).ok,
          });
        }
        return jsonrpc(null, { code: -32601, message: `Unknown method: ${body.method}` });
      },
    },
  },
});
