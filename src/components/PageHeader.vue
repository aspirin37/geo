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
.page-header {
    position: absolute;
    display: flex;
    justify-content: space-between;
    min-width: 1376px;
    // left: calc(50% + 32px);
    // transform: translateX(-704px);
    padding: 24px;
}

.main-nav {
    display: flex;

    &__link {
        margin-right: 32px;
        font-size: 18px;
        line-height: 24px;
        color: white;
        text-decoration: none;
    }

    &__btn {
        -webkit-appearance: none;
        display: block;
        padding: 5px 8px;
        border: none;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.1);
        color: white;

        &:first-of-type {
            margin-right: 1px;
        }

        &:last-of-type {
            margin-right: 32px;
        }
    }

}

.social-nav {
    display: flex;
    align-items: center;

    &__link {
        width: 20px;
        height: 20px;
        margin-right: 16px;
        background-position: 50% 50%;
        background-repeat: no-repeat;

        &:last-child {
            margin-right: 0;
        }

        &--vk {
            background-image: url('../assets/icons/vk.svg');
        }

        &--fb {
            background-image: url('../assets/icons/fb.svg');
        }

        &--inst {
            background-image: url('../assets/icons/insta.svg');
        }

        &--ytb {
            background-image: url('../assets/icons/youtube.svg');
        }
    }
}
</style>