import { HeaderTable } from "@/types";
const header: HeaderTable = {
  theme: "bg-gray-400",
  grid: 9,
  thead: [
    {
      name: "order ID",
      sortIcon: false,
      span: 1,
    },
    {
      name: "products",
      sortIcon: true,
      span: 2,
    },
    {
      name: "date",
      sortIcon: true,
      span: 1,
    },
    {
      name: "customers",
      sortIcon: false,
      span: 1,
    },
    {
      name: "total",
      sortIcon: true,
      span: 1,
    },
    {
      name: "payment",
      sortIcon: false,
      span: 1,
    },
    {
      name: "status",
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
