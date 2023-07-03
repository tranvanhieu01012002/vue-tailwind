import mitt from "mitt";

const EventBus = mitt();
const EVENT_BUS_LIST = {
  VALIDATE: "VALIDATE_ERROR",
  REMOVE_VALIDATE: "REMOVE_VALIDATE",
};

export { EventBus, EVENT_BUS_LIST };
