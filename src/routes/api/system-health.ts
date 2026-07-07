import { createFileRoute } from "@tanstack/react-router";
import { buildRuntimeHealth, summarizeRuntimeHealth } from "@/lib/runtime-health.server";
import { jsonOk } from "@/lib/azure.server";

export const Route = createFileRoute("/api/system-health")({
  server: {
    handlers: {
      GET: async () => {
        const items = await buildRuntimeHealth();
        return jsonOk({ summary: summarizeRuntimeHealth(items), items });
      },
    },
  },
});
