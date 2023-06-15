import { UserInfo } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const user = ref<UserInfo>({
    id: "",
    email: "",
    name: "",
  });

  const isAuth = ref(false);

  const updateUser = (userInput: UserInfo) => {
    user.value = userInput;
  };

  const loginSuccess = () => {
    isAuth.value = true;
  };

  return { user, isAuth, updateUser, loginSuccess };
});
