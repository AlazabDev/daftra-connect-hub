// Curated Daftra API map — extend as needed.
// perm: read | write | delete  -- write/delete require confirmation on server
export type DaftraTool = {
  name: string;
  title: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  version: "v1" | "v2";
  perm: "read" | "write" | "delete";
  category: string;
};

export const DAFTRA_TOOLS: DaftraTool[] = [
  // Connectivity
  { name: "ping", title: "اختبار الاتصال", description: "التحقق من إعدادات الاتصال بدفترة", method: "GET", path: "/clients.json?limit=1", version: "v1", perm: "read", category: "system" },

  // Clients
  { name: "clients.list", title: "قائمة العملاء", description: "استرجاع قائمة العملاء", method: "GET", path: "/clients.json", version: "v1", perm: "read", category: "clients" },
  { name: "clients.get", title: "عرض عميل", description: "بيانات عميل واحد (استخدم {id})", method: "GET", path: "/clients/{id}.json", version: "v1", perm: "read", category: "clients" },
  { name: "clients.create", title: "إنشاء عميل", description: "إضافة عميل جديد", method: "POST", path: "/clients.json", version: "v1", perm: "write", category: "clients" },
  { name: "clients.update", title: "تعديل عميل", description: "تحديث بيانات عميل", method: "PUT", path: "/clients/{id}.json", version: "v1", perm: "write", category: "clients" },
  { name: "clients.delete", title: "حذف عميل", description: "حذف عميل (خطر)", method: "DELETE", path: "/clients/{id}.json", version: "v1", perm: "delete", category: "clients" },

  // Invoices
  { name: "invoices.list", title: "قائمة الفواتير", description: "استرجاع الفواتير", method: "GET", path: "/invoices.json", version: "v1", perm: "read", category: "invoices" },
  { name: "invoices.get", title: "عرض فاتورة", description: "بيانات فاتورة واحدة", method: "GET", path: "/invoices/{id}.json", version: "v1", perm: "read", category: "invoices" },
  { name: "invoices.create", title: "إنشاء فاتورة", description: "إضافة فاتورة جديدة", method: "POST", path: "/invoices.json", version: "v1", perm: "write", category: "invoices" },

  // Products
  { name: "products.list", title: "قائمة المنتجات", description: "استرجاع المنتجات", method: "GET", path: "/products.json", version: "v1", perm: "read", category: "products" },
  { name: "products.get", title: "عرض منتج", description: "بيانات منتج واحد", method: "GET", path: "/products/{id}.json", version: "v1", perm: "read", category: "products" },
  { name: "products.create", title: "إنشاء منتج", description: "إضافة منتج جديد", method: "POST", path: "/products.json", version: "v1", perm: "write", category: "products" },

  // v2
  { name: "v2.entity.list", title: "V2: قائمة كيان", description: "GET /v2/api/entity/{entity} — مثال: clients", method: "GET", path: "/{entity}", version: "v2", perm: "read", category: "v2" },
];

export function findTool(name: string) {
  return DAFTRA_TOOLS.find((t) => t.name === name);
}
