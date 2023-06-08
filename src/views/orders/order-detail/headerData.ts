import { HeaderTable } from "@/types";
const header: HeaderTable = {
  theme: "bg-gray-400",
  grid: 5,
  thead: [
    {
      name: "product",
      sortIcon: false,
      span: 1,
    },
    {
      name: "SKU",
      sortIcon: true,
      span: 1,
    },
    {
      name: "QTY",
      sortIcon: true,
      span: 1,
    },
    {
      name: "price",
      sortIcon: false,
      span: 1,
    },
    {
      name: "total",
      sortIcon: true,
      span: 1,
    },
  ],
};
export { header };
