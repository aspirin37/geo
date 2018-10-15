<template>
    <header class="page-footer">
        <div class="page-footer__top">
            <nav class="footer-nav">
                <a href="#">События</a>
                <a href="#">Новости</a>
                <a href="#">Люди</a>
                <a href="#">Заведения</a>
                <a href="#">Шедевры</a>
            </nav>
            <nav class="footer-nav">
                <a href="#">Сообщества</a>
                <a href="#">Федеральная администрация</a>
                <a href="#">Вакансии</a>
                <a href="#">Рекламодателям</a>
                <a href="#">Помощь</a>
            </nav>
            <nav class="footer-nav">
                <a href="#">Геометрия города</a>
                <a href="#">Медиа-услуги</a>
                <a href="#">Медиа-школа</a>
                <a href="#">Профи</a>
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
        </div>
        <div class="copyright">© 2000–2018 Geometria</div>
        <div class="page-footer__bottom">
            <a href="#">Юридическая информация</a>
            <a href="#">Положение об обработке и защите персональных данных</a>
            <a href="#">Пользовательское соглашение</a>
            <span class="icon-18"></span>
        </div>
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

.page-footer {
    display: flex;
    flex-direction: column;
    padding: 40px 68px;
    background-color: rgba(0, 0, 0, 0.8);
    background-image: url('../../assets/footer-logo.svg');
    background-position: 80% 50%;
    background-repeat: no-repeat;

    @media (max-width: $desktop-width) {
        background-position: 50% 50%;
    }

    &__top {
        display: flex;
        flex-direction: row;
        align-items: start;
        margin-bottom: 50px;

        @media (max-width: $desktop-width) {
            margin-bottom: 32px;
        }
    }

    &__bottom {
        display: flex;
        flex-direction: row;
        align-items: center;

        @media (max-width: $desktop-width) {
            flex-direction: column;
        }

        & a {
            margin-right: 24px;
            color: rgba(255, 255, 255, 0.5);
            font-size: 12px;
            line-height: 16px;
            transition: 0.3s;

            &:hover {
                color: rgba(255, 255, 255, 0.8);
                text-decoration: underline;
            }

            @media (max-width: $desktop-width) {
                margin-right: 0;
                margin-bottom: 8px;
                text-align: center;
            }
        }

        .icon-18 {
            display: block;
            margin-left: auto;
            width: 24px;
            height: 24px;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url('../../assets/icons/18.png');

            @media (max-width: $desktop-width) {
                margin-right: auto;
                margin-top: 24px;
            }
        }
    }
}

.footer-nav {
    margin-right: 48px;

    @media (max-width: $desktop-width) {
        display: none;
    }

    & a {
        display: block;
        margin-bottom: 2px;
        color: white;
        font-size: 16px;
        line-height: 24px;
        transition: 0.3s;

        &:hover:not(.active) {
            opacity: 0.6;
            text-decoration: underline;
        }

        .active {
            opacity: 0.6;
        }
    }
}

.copyright {
    margin-bottom: 15px;
    color: white;
    font-size: 16px;
    line-height: 20px;

    @media (max-width: $desktop-width) {
        order: -1;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 24px;
        text-align: center;
    }
}

.social-nav {
    margin-left: auto;

    @media (max-width: $desktop-width) {
        margin-right: auto;
    }

    &__link {
        &--vk {
            background-image: url('../../assets/icons/vk-white.svg');
        }

        &--fb {
            background-image: url('../../assets/icons/fb-white.svg');
        }

        &--inst {
            background-image: url('../../assets/icons/insta-white.svg');
            background-size: 18px 18px;
        }

        &--ytb {
            background-image: url('../../assets/icons/youtube-white.svg');
        }
    }
}
</style>