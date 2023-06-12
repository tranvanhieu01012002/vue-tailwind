import { UserInfo } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("userStore", () => {
  const user = ref<UserInfo>({
    id: "",
    email: "",
    name: "",
  });

  const updateUser = (userInput: UserInfo) => {
    user.value = userInput;
  };
});
