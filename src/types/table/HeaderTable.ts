import { CustomCss } from "../";
import { GridTable } from "./GridTable";
import { THeadTable } from "./THeadTable";

interface HeaderTable extends GridTable, CustomCss {
  theme: string;
  thead: THeadTable[];
}

export { HeaderTable };
