/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faMoneyBill,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
/* add icons to the library */
library.add(faUserSecret, faMoneyBill, faCartShopping);

export default FontAwesomeIcon;
