<template>
    <transition :name="this.$mq == 'lg' ? 'menu' : ''">
        <div class="user-menu">
            <div class="user-menu__wrapper">
                <i class="close-btn"></i>
                <user-filters></user-filters>
            </div>
        </div>
    </transition>
</template>
<script>
import userFilters from './UserFilters'
export default {
    components: {
        userFilters
    },
    data() {
        return {

        }
    },
    computed: {
        isUserMenuShown() {
            return this.$store.state.isUserMenuShown
        },
    },
    mounted() {
        if (this.$mq == 'lg') this.addCloseMenuHandlers()
    },
    methods: {
        addCloseMenuHandlers() {
            document.addEventListener('click', this.closeMenu);
            document.addEventListener('keydown', this.closeMenu);
            // document.addEventListener('scroll', this.closeMenu);
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
        min-height: 398px;
        width: 780px;
        padding: 32px;
        background-color: #FFFFFF;
        box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);

        @media (max-width: $desktop-width) {
            width: auto;
            height: auto;
            box-shadow: none;
            padding: 0;
        }
    }
}
</style>