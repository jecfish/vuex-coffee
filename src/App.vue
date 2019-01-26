<template>
  <div id="app">
    <AppHeader/>
    <RouterView/>
  </div>
</template>

<script>
import AppHeader from "./components/parts/Header.vue";

export default {
  name: "app",
  components: {
    AppHeader
  }
};
</script>

<style>
body {
  font-size: 18px;
  background: rgba(224, 255, 255, 0.15);
}
</style>
