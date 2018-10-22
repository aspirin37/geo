<template>
    <div class="side-bar">
        <div class="top">
            <button class="side-bar__link side-bar__link--burger hamburger-menu__outer"
                    v-on:click.prevent="toggleMenu">
                <span :class="['d-inline-block hamburger-menu', {'animate': isMenuShown}]"></span>
            </button>
            <a href="#"
               class="side-bar__link side-bar__link--logo"></a>
        </div>
        <nav class="">
            <a href="#"
               class="side-bar__link side-bar__link--profile"></a>
            <a href="#"
               class="side-bar__link side-bar__link--icon side-bar__link--add "></a>
            <a href="#"
               class="side-bar__link side-bar__link--icon side-bar__link--notif"></a>
            <a href="#"
               class="side-bar__link side-bar__link--icon side-bar__link--search"></a>
            <a href="#"
               class="side-bar__link side-bar__link--icon side-bar__link--help"></a>
        </nav>
    </div>
</template>
<script>
export default {
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
        toggleMenu() {
            this.$store.commit('TOGGLE_MENU')
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.side-bar {
    position: fixed;
    left: 0;
    width: 64px;
    min-height: 100vh;
    background-color: black;

    @media (max-width: $desktop-width) {
        position: relative;
        z-index: 1000;
        display: flex;
        width: 100%;
        min-height: auto;
    }

    .top {
        @media (max-width: $desktop-width) {
            display: flex;
        }
    }

    nav {
        @media (max-width: $desktop-width) {
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
            // background-image: url('../../assets/logo.svg');

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
    }
}

$bar-width: 30px;
$bar-height: 4px;
$bar-spacing: 8px;

.hamburger-menu,
.hamburger-menu:after,
.hamburger-menu:before {
    width: $bar-width;
    height: $bar-height;
    border-radius: $bar-height;
}

.hamburger-menu {
    position: relative;
    background: white;

    &.animate {
        background: transparent;
    }
}

.hamburger-menu:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: $bar-spacing;
    background: white;
    transition: bottom 0.2s 0.2s, transform 0.2s;
}

.hamburger-menu:after {
    content: '';
    position: absolute;
    left: 0;
    top: $bar-spacing;
    background: white;
    transition: top 0.2s 0.2s, transform 0.2s;
}

.hamburger-menu.animate .hamburger-menu__outer {
    background-color: transparent;
}

.hamburger-menu.animate:after {
    top: 0;
    transform: rotate(45deg);
    transition: top 0.2s, transform 0.2s 0.2s;
    ;
}

.hamburger-menu.animate:before {
    bottom: 0;
    transform: rotate(-45deg);
    transition: bottom 0.2s, transform 0.2s 0.2s;
    ;
}
</style>