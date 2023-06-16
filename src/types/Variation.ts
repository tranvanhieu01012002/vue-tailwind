import { SelectType } from "./SelectType";

interface Variation extends SelectType {
  value: string;
  selected?: boolean;
}

export { Variation };
