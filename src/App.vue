<template>
    <div id="app">
        <sidebar />
        <div class="app-container">
            <page-header />
            <router-view></router-view>
            <page-footer></page-footer>
            <locale-modal></locale-modal>
            <location-modal></location-modal>
        </div>
    </div>
</template>
<script>
import Sidebar from '@/components/layout/Sidebar';
import PageHeader from '@/components/layout/PageHeader';
import PageFooter from '@/components/layout/PageFooter';
import LocaleModal from '@/components/layout/LocaleModal';
import LocationModal from '@/components/layout/LocationModal';

export default {
    name: 'App',
    components: {
        Sidebar,
        PageHeader,
        PageFooter,
        LocaleModal,
        LocationModal
    },
    data() {
        return {}
    },
    computed: {

    },
    methods: {}
};
</script>
<style lang="scss">
@import './styles/app.scss';
</style>