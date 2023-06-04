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
  faFolder,
  faLock,
  faShop,
  faUser,
  faChartSimple,
  faAngleRight,
  faMagnifyingGlass,
  faCalendarDays,
  faTrash,
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
  faGear,
  faFolder,
  faLock,
  faShop,
  faUser,
  faCartShopping,
  faChartSimple,
  faAngleRight,
  faMagnifyingGlass,
  faCalendarDays,
  faTrash
);

export default FontAwesomeIcon;
