import {
  createFileRoute,
  Outlet,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { LogOut } from "lucide-react";

import { isAuthenticated, clearSession, getUser, hydrateSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const Route = createFileRoute("/console")({
  beforeLoad: async () => {
    await hydrateSession();
    if (!isAuthenticated()) {
      throw redirect({ to: "/login" });
    }
  },
  component: AppLayout,
});

function AppLayout() {
  const navigate = useNavigate();
  const user = getUser();

  async function handleLogout() {
    await clearSession();
    navigate({ to: "/login" });
  }

  return (
    <SidebarProvider>
      <div dir="rtl" className="min-h-screen flex w-full bg-background text-foreground">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-3 border-b bg-background/80 px-4 backdrop-blur">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <span className="text-sm font-bold">Alazab AI</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden text-xs text-muted-foreground sm:flex items-center gap-2">
                <span className="status-dot status-dot--ok" />
                <span>الباك اند متصل</span>
              </div>
              <span className="hidden truncate text-xs text-muted-foreground md:inline">
                {user?.email ?? "مستخدم"}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-xs"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                تسجيل الخروج
              </Button>
            </div>
          </header>
          <main className="flex-1 px-4 py-6 md:px-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
