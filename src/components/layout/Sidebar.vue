<template>
    <div class="side-bar__wrapper">
        <div class="side-bar">
            <div class="top">
                <button class="side-bar__link side-bar__link--burger hamburger-menu__outer"
                        v-on:click.prevent="toggleMobileMenu">
                    <span :class="['d-inline-block hamburger-menu', {'animate': isMenuShown}]"></span>
                </button>
                <a href="#"
                   class="side-bar__link side-bar__link--logo"></a>
            </div>
            <nav>
                <button class="side-bar__link side-bar__link--profile"
                        @click="toggleUserMenu"></button>
                <a href="#"
                   class="side-bar__link side-bar__link--icon side-bar__link--add"></a>
                <a href="#"
                   class="side-bar__link side-bar__link--icon side-bar__link--notif"></a>
                <a href="#"
                   class="side-bar__link side-bar__link--icon side-bar__link--search"></a>
                <a href="#"
                   class="side-bar__link side-bar__link--icon side-bar__link--help"></a>
                <transition name="fade"
                            mode="in-out">
                    <button class="side-bar__link side-bar__link--icon side-bar__link--up"
                            @click="scrollToTop"></button>
                </transition>
            </nav>
        </div>
    </div>
</template>
<script>
import userMenu from '@/components/user-menu/UserMenu'
export default {
    components: {
        userMenu
    },
    data() {
        return {

        }
    },
    computed: {
        isMenuShown() {
            return this.$store.state.isMobileMenuShown
        }
    },
    methods: {
        toggleMobileMenu() {
            this.$store.commit('TOGGLE_MOBILE_MENU')
        },
        toggleUserMenu() {
            this.$store.commit('TOGGLE_USER_MENU')
        },
        scrollToTop() {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        },
    }
}
</script>
<style lang="scss">
@import '@/styles/_variables.scss';

.side-bar {
    display: flex;
    flex-direction: column;
    left: 0;
    width: 64px;
    min-height: 100vh;
    background-color: black;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);

    @media (max-width: $desktop-width) {
        flex-direction: row;
        z-index: 1000;
        display: flex;
        width: 100%;
        min-height: auto;
    }

    &__wrapper {
        position: fixed;
        z-index: 200;

        @media (max-width: $desktop-width) {
            position: relative;
            width: 100%;
        }
    }

    .top {
        @media (max-width: $desktop-width) {
            display: flex;
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        @media (max-width: $desktop-width) {
            flex-direction: row;
            flex-grow: 0;
            display: flex;
            margin-left: auto;
        }
    }

    &__link {
        display: block;
        height: 64px;
        width: 64px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        transition: background-color 0.5s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);

            @media (max-width: $desktop-width) {
                background-color: black;
            }
        }

        &--burger {
            display: none;

            @media (max-width: $desktop-width) {
                display: block;
            }
        }

        &--logo {
            background-image: url('../../assets/logo.svg');
        }

        &--profile {
            background-size: contain;
            background-image: url('../../assets/profile.png');

            @media (max-width: $desktop-width) {
                display: none;
            }
        }

        &--add {
            background-image: url('../../assets/icons/add-outline.svg');
        }

        &--notif {
            background-image: url('../../assets/icons/notifications-outline.svg');
        }

        &--search {
            background-image: url('../../assets/icons/search.svg');
        }

        &--help {
            background-image: url('../../assets/icons/help-white.svg');

            @media (max-width: $desktop-width) {
                display: none;
            }
        }

        &--up {
            margin-top: auto;
            background-image: url('../../assets/icons/arrow-top-circle-white.svg');
            background-color: rgba(255, 255, 255, 0.1);

            @media (max-width: $desktop-width) {
                display: none;
            }
        }
    }
}
</style>