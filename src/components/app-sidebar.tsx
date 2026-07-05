import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Boxes,
  Cloud,
  MessagesSquare,
  GraduationCap,
  Cpu,
  PlugZap,
  FolderSearch,
  HardDrive,
  Library,
  Sparkles,
  Activity,
  BarChart3,
  Settings,
  Network,
  Wrench,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type Item = { title: string; url: string; icon: typeof LayoutDashboard; exact?: boolean };

const mainItems: Item[] = [
  { title: "لوحة التحكم", url: "/", icon: LayoutDashboard, exact: true },
  { title: "Foundry", url: "/foundry", icon: Boxes },
  { title: "Azure", url: "/azure", icon: Cloud },
];

const consoleItems: Item[] = [
  { title: "كونسول", url: "/console", icon: LayoutDashboard, exact: true },
  { title: "المحادثة الذكية", url: "/console/chat", icon: MessagesSquare },
  { title: "بيئة التدريب", url: "/console/training", icon: GraduationCap },
  { title: "AI Gateway", url: "/console/ai-gateway", icon: Cpu },
  { title: "  ↳ الوكلاء", url: "/console/ai-gateway/agents", icon: Boxes },
  { title: "  ↳ النهايات", url: "/console/ai-gateway/endpoints", icon: PlugZap },
  { title: "  ↳ السياسات", url: "/console/ai-gateway/policies", icon: Wrench },
  { title: "  ↳ السجلات", url: "/console/ai-gateway/logs", icon: Activity },
  { title: "المخازن السحابية", url: "/console/storage", icon: Cloud },
  { title: "الربط والمعرفات", url: "/console/integrations", icon: PlugZap },
  { title: "فحص البيانات", url: "/console/data", icon: FolderSearch },
  { title: "Google Drive", url: "/console/gdrive", icon: HardDrive },
  { title: "قاعدة المعرفة", url: "/console/knowledge", icon: Library },
  { title: "استوديو البرومبت", url: "/console/prompts", icon: Sparkles },
  { title: "الأدوات", url: "/console/tools", icon: Wrench },
  { title: "الوظائف", url: "/console/jobs", icon: Activity },
  { title: "التحليلات", url: "/console/analytics", icon: BarChart3 },
  { title: "MCP-A2A", url: "/foundry", icon: Network },
  { title: "الإعدادات", url: "/console/settings", icon: Settings },
];

function Group({ label, items, currentPath }: { label: string; items: Item[]; currentPath: string }) {
  const isActive = (it: Item) => (it.exact ? currentPath === it.url : currentPath === it.url || currentPath.startsWith(it.url + "/"));
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton asChild isActive={isActive(item)} tooltip={item.title}>
                <Link to={item.url} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function AppSidebar() {
  const currentPath = useRouterState({ select: (r) => r.location.pathname });
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <Group label="الرئيسية" items={mainItems} currentPath={currentPath} />
        <Group label="الكونسول" items={consoleItems} currentPath={currentPath} />
      </SidebarContent>
    </Sidebar>
  );
}
