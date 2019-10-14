<template lang="pug">
  .app
    .test {{ val }}
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      val: 'ddd',
    };
  },
  created() {
    // console.log(2);
  },
};
</script>

<style lang="scss" scoped>
@keyframes MyAnimation {
  0% { left: 0; }
  50% { left: 200px; }
  100% { left: 20px; }
}
.app {
  .test {
    font-size: 2em;
    animation: MyAnimation 2s;
  }
}
</style>
