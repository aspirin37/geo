<template>
    <transition name="menu">
        <div class="user-menu"
             v-show="isUserMenuShown || this.$mq != 'lg'">
        </div>
    </transition>
</template>
<script>
export default {
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
        if (this.$mq == 'lg') this.addOutsideClickHandlers()
    },
    methods: {
        addOutsideClickHandlers() {
            document.addEventListener('click', this.onOutsideClickHandler);
            document.addEventListener('keydown', this.onOutsideClickHandler);
            document.addEventListener('scroll', this.onOutsideClickHandler);
        },
        onOutsideClickHandler(e) {
            let userMenu = document.querySelector('.user-menu');
            let control = document.querySelector('.side-bar__link--profile');
            if (!userMenu.contains(e.target) && !control.contains(e.target) || e.key === 'Escape' || e.type === scroll) {
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
    background-color: #FFFFFF;
    box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);

    @media (max-width: $desktop-width) {
        position: static;
        width: auto;
    }
}
</style>