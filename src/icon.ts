/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faMoneyBill,
  faCartShopping,
  faBarcode,
  faWallet,
  faEllipsisVertical,
  faArrowUp,
  faArrowDown,
  faFilter,
  faEye,
  faPencil,
  faHeadphones,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
// import { faBarcode } from "@fortawesome/free-brands-svg-icons";
/* add icons to the library */
library.add(
  faUserSecret,
  faMoneyBill,
  faCartShopping,
  faBarcode,
  faWallet,
  faEllipsisVertical,
  faArrowUp,
  faArrowDown,
  faFilter,
  faEye,
  faPencil,
  faHeadphones,
  faGear
);

export default FontAwesomeIcon;
