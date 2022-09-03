<template>
  <TheHeader />
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default { components: { TheHeader } };
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1;
  font-style: normal;
  font-weight: 400;
  background-color: #363232;
}

#app {
  display: flex;
  flex-direction: column;
}

.wrapper {
  box-sizing: content-box;
  width: 1400px;
  margin: 0 auto;
  padding: 40px;
}

.router-link-active {
  cursor: default;
  &:hover {
    text-decoration: none !important;
  }
}

.router-link-exact-active {
}
</style>
