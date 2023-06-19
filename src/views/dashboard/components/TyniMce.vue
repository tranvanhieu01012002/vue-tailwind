<template>
  <div class="">
    <editor
      api-key="q57m28r5x08c1xhlwcq7euksgt2mn7iyr0achekomon44f4g"
      v-model="editorValue"
      :init="init"
    ></editor>
  </div>
</template>
<script setup lang="ts">
import Editor from "@tinymce/tinymce-vue";
import { ref, reactive, defineEmits, watch, defineProps, toRefs } from "vue";
const props = defineProps({
  content: {
    type: String,
    required: false,
    default: "hih",
  },
});
const { content } = toRefs(props);
const editorValue = ref(content.value);
const emit = defineEmits(["input"]);

watch(content, (newValue) => {
  editorValue.value = newValue;
});

watch(editorValue, (newValue) => {
  emit("input", newValue);
});

const init = reactive({
  height: 500,
  selector: "textarea",
  plugins:
    "anchor autolink charmap codesample emoticons link lists searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode tinycomments",
  toolbar:
    "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help link",
  tinycomments_mode: "embedded",
  tinycomments_author: "Author name",
  mergetags_list: [
    { value: "First.Name", title: "First Name" },
    { value: "Email", title: "Email" },
  ],
});
</script>
<style scoped lang="scss"></style>
