import { useToast } from "vue-toast-notification";
import { ToastStatus } from "@/enums";
const useNotification = () => {
  const POSITION = "top-right";

  const notify = (message: string, type = ToastStatus.SUCCESS) => {
    useToast().open({
      message,
      type,
      position: POSITION,
    });
  };
  return { notify };
};

export { useNotification };
