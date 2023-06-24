import {
  DescriptionInterface,
  IdInterface,
  NameInterface,
} from "./BaseInterface";

interface SelectType extends NameInterface, IdInterface, DescriptionInterface {}
export { SelectType };
