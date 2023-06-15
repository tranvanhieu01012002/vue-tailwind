import {
  DescriptionInterface,
  IdInterface,
  NameInterface,
} from "./BaseInterface";

interface SelectType extends NameInterface, IdInterface, DescriptionInterface {
  value: string;
}
export { SelectType };
