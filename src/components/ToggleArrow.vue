<template>
  <label>
    <input type="checkbox" />
    <div class="arrow">
      <svg
        class="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </label>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.arrow {
  transition: all 0.35s;
}
input {
  position: absolute;
  opacity: 0; /* -- 👈 Hide the checkbox */
  z-index: -1;
}
input:checked + .arrow {
  transform: rotate(180deg);
}
</style>
