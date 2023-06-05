import { HeaderTable } from "@/types";

const header: HeaderTable = {
  theme: "bg-gray-400",
  grid: 12,
  thead: [
    {
      name: "products",
      sortIcon: true,
      span: 4,
    },
    {
      name: "sale",
      sortIcon: true,
      span: 2,
    },
    {
      name: "among",
      sortIcon: true,
      span: 2,
    },
    {
      name: "price",
      sortIcon: true,
      span: 2,
    },
    {
      name: "status",
      sortIcon: true,
      span: 2,
    },
  ],
};

export { header };
