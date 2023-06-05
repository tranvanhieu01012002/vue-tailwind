import { GridTable } from "./";
import { NameInterface } from "../NameInterface";

interface THeadTable extends GridTable, NameInterface {
  sortIcon?: boolean;
  span: number;
}

export { THeadTable };
