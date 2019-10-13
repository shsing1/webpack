<template lang="pug">
  .app
    .test {{ val }}
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        val: 'aaa'
      };
    },
    created() {
    console.log(2);
    },
  }
</script>

<style lang="scss" scoped>
.app {
  .test {
    font-size: 2em;
  }
}
</style>