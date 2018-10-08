<template>
    <header class="page-header">
        <nav class="main-nav">
            <button class="main-nav__btn">Санкт-Петербург</button>
            <button class="main-nav__btn">РУС</button>
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
    </header>
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

.page-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    padding-bottom: 18px;
    border-bottom: 2px solid black;

    @media (max-width: $mobile-width) {
        display: none;
    }
}

.main-nav {
    display: flex;

    &__link {
        position: relative;
        z-index: 0;
        margin-right: 32px;
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
        text-decoration: none;

        &::after {
            content: '';
            position: absolute;
            z-index: -1;
            bottom: 0;
            left: 6px;
            display: block;
            width: 0%;
            opacity: 0.2;
            height: 8px;
            background-color: #00e6de;
            transition: all 0.3s;
        }

        &.active,
        &:hover {
            opacity: 1;
        }

        &.active::after,
        &:hover::after {
            width: 100%;
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

        &:first-of-type {
            margin-right: 1px;
        }

        &:last-of-type {
            margin-right: 32px;
        }
    }

}
</style>