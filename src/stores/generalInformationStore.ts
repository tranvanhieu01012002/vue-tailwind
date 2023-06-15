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

    const setDescription = (descriptionInput: string) => {
      description.value = descriptionInput;
    };

    const setType = (typeInput: GeneralInformation) => {
      type.value = typeInput;
    };

    const resetField = () => {
      name.value = "";
      description.value = "";
    };

    return {
      name,
      description,
      type,
      getInfo,
      setType,
      setDescription,
      resetField,
    };
  }
);
export { useGeneralInformationStore };
