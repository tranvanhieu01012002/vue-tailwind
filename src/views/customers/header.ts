import { HeaderTable } from "@/types";
const header: HeaderTable = {
  theme: "bg-gray-400",
  grid: 8,
  thead: [
    {
      name: "customer name",
      sortIcon: false,
      span: 2,
    },
    {
      name: "phone",
      sortIcon: true,
      span: 1,
    },
    {
      name: "orders",
      sortIcon: true,
      span: 1,
    },
    {
      name: "balance",
      sortIcon: false,
      span: 1,
    },
    {
      name: "status",
      sortIcon: true,
      span: 1,
    },
    {
      name: "created",
      sortIcon: true,
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
