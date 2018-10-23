<template>
    <div id="app">
        <sidebar />
        <div class="app-container"
             :class="{'menu-shown' :isMenuShown}">
            <page-header />
            <router-view></router-view>
            <page-footer></page-footer>
        </div>
    </div>
</template>
<script>
import Sidebar from '@/components/layout/Sidebar'
import PageHeader from '@/components/layout/PageHeader'
import PageFooter from '@/components/layout/PageFooter'
export default {
    name: 'App',
    components: {
        Sidebar,
        PageHeader,
        PageFooter
    },
    computed: {
        isMenuShown() {
            return this.$store.state.isMobileMenuShown
        }
    },
}
</script>
<style lang="scss">
@import './styles/app.scss';

.menu-shown {
    height: 0;
    overflow: hidden;
}
</style>