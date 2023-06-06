import { HeaderTable } from "@/types";

const header: HeaderTable = {
  theme: "bg-gray-400",
  grid: 6,
  thead: [
    {
      name: "products",
      sortIcon: true,
      span: 2,
    },
    {
      name: "sale",
      sortIcon: true,
      span: 1,
    },
    {
      name: "among",
      sortIcon: true,
      span: 1,
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
  ],
};

export { header };
