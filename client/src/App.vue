<template>
  <div>
    <nav-bar />
    <router-view></router-view>
    <footer-vue />
  </div>
</template>
<script>
import navBar from './navBar.vue';
import footerVue from './footer.vue';


export default {
  name: "about",
  components: {
    navBar,
    footerVue
  }
};
</script>
