import { EventBus, EVENT_BUS_LIST } from "@/bus/eventBus";
import { ref } from "vue";

export const useEventBusValidate = () => {
  const error = ref(false);

  const startEventBus = () => {
    EventBus.on(EVENT_BUS_LIST.VALIDATE, () => {
      error.value = false;
    });
    EventBus.on(EVENT_BUS_LIST.REMOVE_VALIDATE, () => {
      error.value = true;
    });
  };

  const stopEventBus = () => {
    EventBus.off(EVENT_BUS_LIST.VALIDATE);
    EventBus.off(EVENT_BUS_LIST.REMOVE_VALIDATE);
  };

  return { error, startEventBus, stopEventBus };
};
