<template>
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
</template>
<script>
export default {

    data() {
        return {
            activeLang: 'rus',
        }
    },
    computed: {

    },
    methods: {
        hideLocaleModal() {
            this.$refs.localeModal.hide();
        },
    }
}
</script>
<style lang="scss"
       scoped>
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
        background-image: url('../../assets/icons/ru.png');
    }

    &.en {
        background-image: url('../../assets/icons/gb.png');
    }

    &.de {
        background-image: url('../../assets/icons/de.png');
    }

    &.ua {
        background-image: url('../../assets/icons/ua.png');
    }
}
</style>