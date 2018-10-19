<template>
    <div id="app"
         :class="{'menu-shown': isMenuShown}">
        <sidebar />
        <div class="app-container">
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
    height: 50vh;
    overflow: hidden;
}
</style>