import { createFileRoute, redirect } from "@tanstack/react-router";

// Unified login: /auth redirects to /login (single source of truth).
export const Route = createFileRoute("/auth")({
  beforeLoad: () => {
    throw redirect({ to: "/login" });
  },
  component: () => null,
});
