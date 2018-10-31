<template>
    <div id="app">
        <sidebar />
        <div class="app-container">
            <page-header />
            <router-view></router-view>
            <page-footer></page-footer>
            <b-modal id="localeModal"
                     centered
                     hide-footer
                     size="sm"
                     ref="localeModal">
                <div slot="modal-header"
                     class="custom-modal-header">
                    <h3>Язык сайта</h3>
                    <i class="close-btn"
                       @click="hideLocaleModal"></i>
                </div>
                <ul class="select select--lang">
                    <li class="select-item rus"
                        :class="{'active': activeLang === 'rus'}"
                        @click="activeLang = 'rus'">Русский</li>
                    <li class="select-item en"
                        :class="{'active': activeLang === 'en'}"
                        @click="activeLang = 'en'">English</li>
                    <li class="select-item de"
                        :class="{'active': activeLang === 'de'}"
                        @click="activeLang = 'de'">Deutsch</li>
                    <li class="select-item ua"
                        :class="{'active': activeLang === 'ua'}"
                        @click="activeLang = 'ua'">Украiньска</li>
                </ul>
            </b-modal>
            <b-modal id="locationModal"
                     centered
                     hide-footer
                     ref="locationModal">
                <div slot="modal-header"
                     class="custom-modal-header">
                    <div>
                        <h3>Ваш город</h3>
                        <span class="cities">21 страна, 228 городов</span>
                    </div>
                    <div class="search-input-wrapper">
                        <input class="search-input"
                               placeholder="Поиск города"
                               v-model="searchCity">
                    </div>
                    <i class="close-btn"
                       @click="hideLocationModal"></i>
                </div>
                <div class="d-flex flex-row">
                    <vue-custom-scrollbar :settings="settings"
                                          class="scroll-area left">
                        <ul class="select">
                            <li class="select-item"
                                :class="{'active': activeCountry === it.code}"
                                v-for="(it, i) in countries"
                                :key="i"
                                @click="activeCountry= it.code">{{ it.name }}</li>
                        </ul>
                    </vue-custom-scrollbar>
                    <vue-custom-scrollbar :settings="settings"
                                          class="scroll-area right">
                        <ul class="select">
                            <li class="select-item"
                                :class="{'font-weight-bold': it === 'Санкт-Петербург' || it === 'Москва'}"
                                v-for="(it, i) in searchCity ? filteredCities : cities"
                                :key="i"
                                @click="activeCity = it">{{ it }}</li>
                        </ul>
                    </vue-custom-scrollbar>
                </div>
            </b-modal>
        </div>
    </div>
</template>
<script>
import Sidebar from '@/components/layout/Sidebar';
import PageHeader from '@/components/layout/PageHeader';
import PageFooter from '@/components/layout/PageFooter';

import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
    name: 'App',
    components: {
        Sidebar,
        PageHeader,
        PageFooter,
        vueCustomScrollbar
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
}

.search-input-wrapper {
    position: relative;
    margin-right: 60px;
    margin-left: auto;
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