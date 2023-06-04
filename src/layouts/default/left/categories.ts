import { Category } from "@/types";

const listCategory: Category[] = [
  {
    name: "dashboard",
    icon: ["fas", "folder"],
    isActive: false,
    link: "/",
  },
  {
    name: "product",
    icon: ["fas", "lock"],
    isActive: false,
    link: "/products",
  },
  {
    name: "orders",
    icon: ["fas", "cart-shopping"],
    isActive: false,
    link: "/orders",
  },
  {
    name: "customers",
    icon: ["fas", "user"],
    isActive: false,
    link: "/customers",
  },
  {
    name: "sales",
    icon: ["fas", "shop"],
    isActive: false,
    link: "/sales",
  },
  {
    name: "analytics",
    icon: ["fas", "chart-simple"],
    isActive: false,
    link: "/analytics",
  },
];

export { listCategory };
