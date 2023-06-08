import { HeaderTable } from "@/types";
const header: HeaderTable = {
  theme: "bg-gray-400",
  grid: 8,
  thead: [
    {
      name: "order ID",
      sortIcon: false,
      span: 1,
    },
    {
      name: "products",
      sortIcon: true,
      span: 1,
    },
    {
      name: "total",
      sortIcon: true,
      span: 1,
    },
    {
      name: "status",
      sortIcon: false,
      span: 1,
    },
    {
      name: "date",
      sortIcon: true,
      span: 1,
    },
  ],
};
export { header };
