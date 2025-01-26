<template>
    <div :class="bg - peachpuff">
        <home />
        <about />
        <work-vue />
        <service-vue />
    </div>
</template>

<script>
import navBar from './navBar.vue';
import About from './about.vue'
import Home from './home.vue';
import footerVue from './footer.vue';
import workVue from './work.vue';
import serviceVue from './service.vue';

export default {
    name: "MainVue",
    components: {
        navBar,
        About,
        Home,
        workVue,
        serviceVue,
        footerVue
    },
    data() {
        return {
            showMenu: false
        };
    }
};
</script>

<style scoped>
.bg-peachpuff {
    background-color: #FFDAB9;
}
</style>