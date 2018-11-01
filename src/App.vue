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

// import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
    name: 'App',
    components: {
        Sidebar,
        PageHeader,
        PageFooter,
        // vueCustomScrollbar,
        LocaleModal,
        LocationModal
    },
    data() {
        return {
            activeLang: 'rus',
            activeCountry: 'RU',
            activeCity: 'Санкт-Петербург',
            settings: {
                // maxScrollbarLength: 120,
            },
            searchCity: '',
            countries: [
                { name: 'Россия', code: 'RU' },
                { name: 'Afghanistan', code: 'AF' },
                { name: 'Åland Islands', code: 'AX' },
                { name: 'Albania', code: 'AL' },
                { name: 'Algeria', code: 'DZ' },
                { name: 'American Samoa', code: 'AS' },
                { name: 'AndorrA', code: 'AD' },
                { name: 'Angola', code: 'AO' },
                { name: 'Anguilla', code: 'AI' },
                { name: 'Antarctica', code: 'AQ' },
                { name: 'Antigua and Barbuda', code: 'AG' },
                { name: 'Argentina', code: 'AR' },
                { name: 'Armenia', code: 'AM' },
                { name: 'Aruba', code: 'AW' },
                { name: 'Australia', code: 'AU' },
                { name: 'Austria', code: 'AT' },
                { name: 'Azerbaijan', code: 'AZ' },
                { name: 'Bahamas', code: 'BS' },
                { name: 'Bahrain', code: 'BH' },
                { name: 'Bangladesh', code: 'BD' },
                { name: 'Barbados', code: 'BB' },
                { name: 'Belarus', code: 'BY' },
                { name: 'Belgium', code: 'BE' },
                { name: 'Belize', code: 'BZ' },
                { name: 'Benin', code: 'BJ' },
                { name: 'Bermuda', code: 'BM' },
                { name: 'Bhutan', code: 'BT' }
            ],
            cities: [
                'Санкт-Петербург',
                'Москва',
                'Абакан',
                'Азов',
                'Александров',
                'Алексин',
                'Альметьевск',
                'Анапа',
                'Ангарск',
                'Анжеро-Судженск',
                'Апатиты',
                'Арзамас',
                'Армавир',
                'Арсеньев',
                'Артем',
                'Архангельск',
                'Асбест',
                'Астрахань',
                'Ачинск',
                'Балаково',
                'Балахна',
                'Балашиха',
                'Балашов',
                'Барнаул',
                'Батайск',
                'Белгород',
                'Белебей',
                'Белово',
                'Белогорск (Амурская область)',
                'Белорецк',
                'Белореченск',
                'Бердск',
                'Березники',
                'Березовский (Свердловская область)',
                'Бийск',
                'Биробиджан',
            ]
        };
    },
    computed: {
        isMenuShown() {
            return this.$store.state.isMobileMenuShown;
        },
        filteredCities() {
            return this.cities.filter((it) => it.toLowerCase().includes(this.searchCity.toLowerCase()))
        }
    },
    methods: {
        hideLocaleModal() {
            this.$refs.localeModal.hide();
        },
        hideLocationModal() {
            this.$refs.locationModal.hide();
        }
    }
};
</script>
<style lang="scss">
@import './styles/app.scss';

.menu-open .app-container {
    height: 0;
    overflow: hidden;
}

.custom-modal-header {
    position: relative;
    display: flex;
    align-items: start;
    width: 100%;
    padding: 15px 5px;
    padding-bottom: 5px;

    .close-btn {
        right: 5px;
        top: 5px;
        opacity: 0.85;
    }
}

.modal-body {
    padding: 0;
}

.select--lang {
    padding-bottom: 30px;

    .select-item {
        padding-left: 60px;
    }
}

.select-item {
    cursor: pointer;
    padding: 6px;
    padding-left: 24px;
    font-size: 16px;
    line-height: 24px;
    transition: 0.2s;
    background-position: 30px 50%;
    background-repeat: no-repeat;
    background-size: 16px 11px;

    &.active {
        background-color: #c7382a;
        color: white;
    }

    &:not(.active):hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    &.rus {
        background-image: url('./assets/icons/ru.png');
    }

    &.en {
        background-image: url('./assets/icons/gb.png');
    }

    &.de {
        background-image: url('./assets/icons/de.png');
    }

    &.ua {
        background-image: url('./assets/icons/ua.png');
    }
}

.search-input {
    width: 200px;
    padding-left: 44px;
    margin-bottom: 0;
}

.search-input-wrapper {
    position: relative;
    margin-right: 60px;
    margin-left: auto;

    &::after {
        content: '';
        position: absolute;
        display: block;
        width: 18px;
        height: 18px;
        top: 50%;
        transform: translateY(-9px);
        left: 14px;
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: 50% 50%;
        background-image: url('./assets/icons/search.svg');
    }
}

.cities {
    margin-top: 4px;
    font-size: 14px;
    opacity: 0.6;
}

@media (min-width: 576px) {
    .modal-dialog:not(.modal-sm) {
        max-width: 520px;
    }
}

.scroll-area {
    position: relative;
    margin: auto;
    width: 50%;
    height: 500px;
    flex-shrink: 0;

    &.left {
        width: 220px;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
    }

    &.right {
        flex-grow: 1;
    }
}
</style>