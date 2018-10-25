<template>
    <transition name="menu">
        <header class="page-header"
                v-if="isMobileMenuShown || this.$mq === 'lg'">
            <transition name="menu">
                <div class="page-header__wrapper"
                     v-if="!isMobileAuthShown">
                    <nav class="main-nav">
                        <div class="d-flex">
                            <button class="main-nav__btn">Санкт-Петербург</button>
                            <button class="main-nav__btn">РУС</button>
                        </div>
                        <div class="profile-row"
                             v-if="this.$mq !== 'lg'">
                            <button class="side-bar__link side-bar__link--profile"></button>
                            <button class="btn btn-enter"
                                    @click="showMobileAuth">Войти</button>
                        </div>
                        <a href="#"
                           class="main-nav__link">События</a>
                        <a href="#"
                           class="main-nav__link">Новости</a>
                        <a href="#"
                           class="main-nav__link">Люди</a>
                        <a href="#"
                           class="main-nav__link">Заведения</a>
                        <a href="#"
                           class="main-nav__link">Шедевры</a>
                        <a href="#"
                           class="main-nav__link">Еще</a>
                    </nav>
                    <user-menu v-show="isUserMenuShown || this.$mq != 'lg'"></user-menu>
                    <nav class="social-nav">
                        <a href="#"
                           class="social-nav__link social-nav__link--vk"></a>
                        <a href="#"
                           class="social-nav__link social-nav__link--fb"></a>
                        <a href="#"
                           class="social-nav__link social-nav__link--inst"></a>
                        <a href="#"
                           class="social-nav__link social-nav__link--ytb"></a>
                    </nav>
                    <div class="help">
                        <i class="icon icon-help"></i>
                        <span>Помощь</span>
                    </div>
                </div>
            </transition>
            <transition name="slide-right">
                <div class="page-header__wrapper d-flex flex-column  justify-content-start"
                     v-if="isMobileAuthShown">
                    <a class="back-btn"
                       @click="closeMobileAuth">Назад</a>
                    <auth></auth>
                </div>
            </transition>
        </header>
    </transition>
</template>
<script>
import userMenu from '@/components/user-menu/UserMenu'
import auth from '@/components/user-menu/auth/Auth'
export default {
    components: {
        userMenu,
        auth
    },
    data() {
        return {

        }
    },
    mounted() {
        window.addEventListener('resize', this.onResizeHandler);
    },
    computed: {
        isMobileMenuShown() {
            return this.$store.state.isMobileMenuShown
        },
        isUserMenuShown() {
            return this.$store.state.isUserMenuShown
        },
        isMobileAuthShown() {
            return this.$store.state.isMobileAuthShown
        }
    },
    methods: {
        onResizeHandler() {
            if (this.$mq === 'lg' && this.isMobileMenuShown) this.closeMobileMenu()
        },
        closeMobileMenu() {
            this.$store.commit('CLOSE_MOBILE_MENU')
        },
        showMobileAuth() {
            this.$store.commit('SHOW_MOBILE_AUTH')
        },
        closeMobileAuth() {
            this.$store.commit('CLOSE_MOBILE_AUTH')
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.profile-row {
    display: flex;
    margin-bottom: 24px;
}

.side-bar__link {
    display: block;
    flex-shrink: 0;
    margin-right: 8px;
}

.btn-enter {
    width: 100%;
    height: 64px;
}

.social-nav {
    @media (max-width: $desktop-width) {
        margin-top: 40px;
        margin-bottom: 40px;
    }
}

.help {
    display: none;
    font-size: 18px;
    line-height: 24px;
    opacity: 0.5;
    text-align: center;

    @media (max-width: $desktop-width) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    span {
        margin-top: 8px;
    }
}

.page-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    padding-bottom: 18px;
    border-bottom: 2px solid black;

    @media (max-width: $desktop-width) {
        position: absolute;
        top: 64px;
        left: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        min-height: calc(100% - 64px);
        background-color: white;
        border: none;
    }

    &__wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;

        @media (max-width: $desktop-width) {
            flex-direction: column;
            position: absolute;
            width: calc(100% - 40px);
        }
    }
}

.main-nav {
    display: flex;

    @media (max-width: $desktop-width) {
        flex-direction: column;
        margin-bottom: auto;
    }

    &__link {
        position: relative;
        z-index: 0;
        margin-right: 32px;
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
        text-decoration: none;

        @media (max-width: $desktop-width) {
            width: calc(100% + 20px);
            height: 48px;
            padding-top: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1)
        }

        &::after {
            content: '';
            position: absolute;
            z-index: -1;
            bottom: 1px;
            left: 6px;
            display: block;
            width: 0%;
            opacity: 0.2;
            height: 8px;
            background-color: #00e6de;
            transition: all 0.3s;
        }

        &::before {
            @media (max-width: $desktop-width) {
                content: '';
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                display: block;
                width: 16px;
                height: 16px;
                background-image: url('../../assets/icons/chevron-right.svg');
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background-size: contain;
                opacity: 0.2;

            }
        }

        &.active,
        &:hover {
            opacity: 1;
        }

        &.active::after,
        &:hover::after {
            width: 100%;

            @media (max-width: $desktop-width) {
                width: 0;
            }
        }
    }

    &__btn {
        -webkit-appearance: none;
        display: block;
        padding: 5px 8px;
        border: none;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;

        @media (max-width: $desktop-width) {
            margin-bottom: 24px;
            padding: 9px 10px;
            border-radius: 2px;
        }

        &:first-of-type {
            margin-right: 1px;
        }

        &:last-of-type {
            margin-right: 32px;
        }
    }
}
</style>