<template>
    <div class="app-container"
         id="app">
        <sidebar />
        <main class="app-shadow">
            <page-header />
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import PageHeader from '@/components/PageHeader'
export default {
    name: 'App',
    components: {
        Sidebar,
        PageHeader
    }
}
</script>
<style lang="scss">
@import './styles/app.scss';
</style>