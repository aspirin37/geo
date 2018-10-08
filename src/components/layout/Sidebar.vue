<template>
    <div class="side-bar">
        <div class="top">
            <button class="side-bar__link side-bar__link--burger"></button>
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
            background-image: url('../../assets/icons/help.svg');

            @media (max-width: $desktop-width) {
                display: none;
            }
        }
    }

    @media (max-width: $desktop-width) {
        position: relative;
        display: flex;
        width: 100%;
        min-height: auto;
    }
}
</style>