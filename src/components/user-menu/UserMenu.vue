<template>
    <transition :name="this.$mq == 'lg' ? 'menu' : ''">
        <div class="user-menu">
            <div class="user-menu__wrapper">
                <i class="close-btn"
                   v-if="this.$mq === 'lg'"></i>
                <auth v-if="this.$mq === 'lg'"></auth>
                <user-filters></user-filters>
            </div>
        </div>
    </transition>
</template>
<script>
import { mapState } from 'vuex'

import userFilters from './UserFilters'
import auth from './auth/Auth'
export default {
    components: {
        userFilters,
        auth
    },
    data() {
        return {
            menuHandlers: false
        }
    },
    computed: {
        ...mapState([
            'isUserMenuShown',
        ])
    },
    mounted() {
        if (this.$mq == 'lg') this.addCloseMenuHandlers()
        window.addEventListener('resize', this.onResizeHandler);
    },
    methods: {
        addCloseMenuHandlers() {
            document.addEventListener('click', this.closeMenu);
            document.addEventListener('keydown', this.closeMenu);
            this.menuHandlers = true
        },
        removeCloseMenuHandlers() {
            document.removeEventListener('click', this.closeMenu);
            document.removeEventListener('keydown', this.closeMenu);
            this.menuHandlers = false
        },
        onResizeHandler() {
            if (this.$mq !== 'lg') this.removeCloseMenuHandlers()
            if (this.$mq === 'lg' && !this.menuHandlers) this.addCloseMenuHandlers()
        },
        closeMenu(e) {
            let userMenu = document.querySelector('.user-menu');
            let control = document.querySelector('.side-bar__link--profile');
            let closeBtn = userMenu.querySelector('.close-btn');
            if (this.isUserMenuShown && (
                    !userMenu.contains(e.target) && !control.contains(e.target) ||
                    closeBtn.contains(e.target) ||
                    e.key === 'Escape'
                )) {
                this.$store.commit('CLOSE_USER_MENU')
            }
        },
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';


.user-menu {
    position: fixed;
    top: 64px;
    left: 64px;
    z-index: 100;
    // фиксим багу с мерцанием при скролле
    transform: translate3d(0, 0, 0);


    @media (max-width: $desktop-width) {
        position: static;
    }

    &__wrapper {
        display: flex;
        min-height: 398px;
        max-width: 780px;
        padding: 32px;
        background-color: #FFFFFF;
        box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);

        @media (max-width: $desktop-width) {
            flex-direction: column;
            width: auto;
            height: auto;
            box-shadow: none;
            padding: 0;
        }
    }
}
</style>