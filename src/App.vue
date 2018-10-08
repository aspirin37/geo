<template>
    <div id="app">
        <sidebar />
        <main class="app-container">
            <page-header />
            <router-view></router-view>
            <page-footer></page-footer>
        </main>
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
    }
}
</script>
<style lang="scss">
@import './styles/app.scss';
</style>