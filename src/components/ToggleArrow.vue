<template>
  <div class="arrow-container" @click="toggleArrow">
    <div class="arrow" :style="{ transform: `rotate(${angle}deg)` }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      angle: 0,
    };
  },
  methods: {
    toggleArrow() {
      this.angle = this.angle === 0 ? 180 : 0;
    },
  },
};
</script>

<style scoped>
.arrow-container {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid black;
  transition: all 0.3s ease-in-out;
}
</style>
