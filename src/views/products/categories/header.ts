import { HeaderTable } from "@/types";
const header: HeaderTable = {
  theme: "bg-gray-400",
  grid: 6,
  thead: [
    {
      name: "category",
      sortIcon: false,
      span: 2,
    },
    {
      name: "sale",
      sortIcon: true,
      span: 1,
    },
    {
      name: "stock",
      sortIcon: true,
      span: 1,
    },
    {
      name: "added",
      sortIcon: false,
      span: 1,
    },
    {
      name: "action",
      sortIcon: true,
      span: 1,
    },
  ],
};
export { header };
