<template>
    <div class="container">
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
        <header class="page-header"></header>
        <!-- <navbar />
        <main class="main-content flex-column flex-md-row d-flex align-items-start align-items-md-stretch flex-wrap flex-md-nowrap"
              :class="{'main-content--small' : smallSize, 'chrome-mobile': isMobileChrome}">
            <sidebar v-on:toggleSize="toggleSidebar" />
            <div class="w-100 overflow-hidden">
                <transition name="page"
                            mode="out-in">
                    <keep-alive include="Users">
                        <router-view />
                    </keep-alive>
                </transition>
            </div>
        </main> -->
    </div>
</template>
<script>
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'

export default {
    name: 'panel',
    components: {
        // Navbar,
        // Sidebar
    },
    data() {
        return {}
    },
    methods: {

    }
}
</script>
<style lang="scss">
body,
html {
    margin: 0;
    padding: 0;
    background-color: #333333;
}

.container {
    display: flex;
    align-items: stretch;
    max-width: 1420px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;

}

.side-bar {
    width: 64px;
    min-height: 100vh;
    background-color: black;

    &__link {
        display: block;
        height: 64px;
        width: 64px;
        box-sizing: border-box;

        &--icon {
            background-position: 50% 50%;
            background-repeat: no-repeat;
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

.page-header {
    flex-grow: 1;
    height: 600px;
    background-color: #363E48;
}
</style>