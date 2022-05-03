<template>

    <SiteHeader></SiteHeader>
    <MainMenu></MainMenu>
    <router-view></router-view>
    <SiteFooter></SiteFooter>

</template>

<script>
    import SiteHeader from './SiteHeader.vue'
    import MainMenu from './MainMenu.vue'
    import SiteFooter from './SiteFooter.vue'

    export default {
        name: 'layout-default',
        components: {

            SiteHeader,
            MainMenu,
            SiteFooter

        }
    }
</script>