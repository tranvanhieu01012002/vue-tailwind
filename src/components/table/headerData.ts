import { HeaderTable } from "@/types";

const headerData: HeaderTable = {
  theme: "bg-gray-400",
  customCss: "grid-cols-9",
  thead: [
    {
      name: "product",
      sortIcon: true,
    },
    {
      name: "sku",
      customCss: "uppercase",
    },
    {
      name: "category",
      sortIcon: false,
    },
    {
      name: "stock",
      sortIcon: true,
    },
    {
      name: "price",
      sortIcon: true,
    },
    {
      name: "status",
      sortIcon: true,
    },
    {
      name: "added",
      sortIcon: true,
    },
    {
      name: "action",
      sortIcon: false,
    },
  ],
};

export { headerData };
