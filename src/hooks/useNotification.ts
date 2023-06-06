import { useToast } from "vue-toast-notification";

const useNotification = () => {
  const POSITION = "top-right";
  const TYPE = "success";

  const open = (message: string) => {
    useToast().open({
      message,
      type: TYPE,
      position: POSITION,
    });
  };
};
