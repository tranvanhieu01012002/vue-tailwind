import { GeneralInformation } from "@/enums";
import { defineStore } from "pinia";
import { ref } from "vue";

const useGeneralInformationStore = defineStore(
  "generalInformationStore",
  () => {
    const name = ref("");
    const description = ref("");
    const type = ref<GeneralInformation>();

    const getInfo = () => ({
      name: name.value,
      description: description.value,
    });

    const setType = (typeInput: GeneralInformation) => {
      type.value = typeInput;
    };

    return { name, description, type, getInfo, setType };
  }
);
export { useGeneralInformationStore };
