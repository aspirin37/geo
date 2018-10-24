<template>
    <transition :name="this.$mq == 'lg' ? 'menu' : ''">
        <div class="user-menu">
            <user-filters></user-filters>
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
            document.addEventListener('scroll', this.closeMenu);
        },
        closeMenu(e) {
            let userMenu = document.querySelector('.user-menu');
            let control = document.querySelector('.side-bar__link--profile');
            if (this.isUserMenuShown && (
                    e.type === 'click' && !userMenu.contains(e.target) && !control.contains(e.target) ||
                    e.key === 'Escape' ||
                    e.type === 'scroll' ||
                    e.type === 'resize' && this.isUserMenuShown)) {
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
    height: 398px;
    width: 780px;
    padding: 32px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);

    @media (max-width: $desktop-width) {
        position: static;
        width: auto;
        height: auto;
        box-shadow: none;
        padding: 0;
    }
}
</style>