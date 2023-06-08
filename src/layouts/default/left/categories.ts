import { Category } from "@/types";

const listCategory: Category[] = [
  {
    name: "dashboard",
    icon: ["fas", "folder"],
    link: "/",
  },
  {
    name: "product",
    icon: ["fas", "lock"],
    children: [
      {
        name: "product lists",
        icon: [],
        link: "/products/product-list",
      },
      {
        name: "categories",
        icon: [],
        link: "/products/categories",
      },
    ],
  },
  {
    name: "orders",
    icon: ["fas", "cart-shopping"],
    link: "/orders",
  },
  {
    name: "customers",
    icon: ["fas", "user"],
    link: "/customers",
  },
  // {
  //   name: "sales",
  //   icon: ["fas", "shop"],
  //   link: "/sales",
  // },
  // {
  //   name: "analytics",
  //   icon: ["fas", "chart-simple"],
  //   link: "/analytics",
  // },
];

export { listCategory };
