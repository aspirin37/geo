<template>
    <nav class="side-bar">
        <a href="#"
           class="side-bar__link side-bar__link--logo"></a>
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
.side-bar {
    position: fixed;
    left: 0;
    width: 64px;
    min-height: 100vh;
    background-color: black;

    &__link {
        display: block;
        height: 64px;
        width: 64px;
        background-position: 50% 50%;
        background-repeat: no-repeat;

        &--logo {
            background-image: url('../assets/logo.svg');
        }

        &--profile {
            background-size: contain;
            background-image: url('../assets/profile.png');
        }

        &--add {
            background-image: url('../assets/icons/add-outline.svg');
        }

        &--notif {
            background-image: url('../assets/icons/notifications-outline.svg');
        }

        &--search {
            background-image: url('../assets/icons/search.svg');
        }

        &--help {
            background-image: url('../assets/icons/help.svg');
        }
    }
}
</style>