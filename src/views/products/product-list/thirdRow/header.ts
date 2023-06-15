import { HeaderTable } from "@/types";

const headerData: HeaderTable = {
  theme: "bg-gray-400",
  grid: 9,
  thead: [
    {
      name: "product",
      sortIcon: true,
      span: 2,
    },
    {
      name: "sku",
      customCss: "uppercase",
      span: 1,
    },
    {
      name: "category",
      sortIcon: false,
      span: 1,
    },
    {
      name: "stock",
      span: 1,
      sortIcon: true,
    },
    {
      name: "price",
      sortIcon: true,
      span: 1,
    },
    {
      name: "status",
      sortIcon: true,
      span: 1,
    },
    {
      name: "added",
      sortIcon: true,
      span: 1,
    },
    {
      name: "action",
      sortIcon: false,
      span: 1,
    },
  ],
};

export { headerData };
