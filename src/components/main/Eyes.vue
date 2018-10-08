<template>
    <section class="section eyes">
        <div class="eyes__header">
            <h4>Глаза геометрии</h4>
            <button class="eyes__control-btn eyes__control-btn--prev"></button>
            <button class="eyes__control-btn eyes__control-btn--next"></button>
        </div>
        <ul class="eyes__list">
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="https://files.geometria.ru/pics/original/038/530/38530343.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Michael Kuznetsov</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats">42 репортажа</div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="https://files2.geometria.ru/pics/original/037/270/37270907.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Андрей Ховрычев</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats">42 репортажа</div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="https://files.geometria.ru/pics/original/18523020.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Алена Яшина</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats">42 репортажа</div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="https://files.geometria.ru/pics/original/16784163.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Dmitriy Mnogolet</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats">42 репортажа</div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="https://files.geometria.ru/pics/original/25707164.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Anastasia Versa</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats">42 репортажа</div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="https://files2.geometria.ru/pics/original/054/886/54886501.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Tashe Che</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats"></div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
        </ul>
    </section>
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

.eyes {
    padding: 24px;
    padding-right: 8px;
    padding-bottom: 40px;
    margin-bottom: 40px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;

    @media (max-width: $desktop-width) {
        margin-left: -20px;
        border-radius: 0;
    }

    &__header {
        display: flex;
        align-items: start;
        margin-bottom: 32px;
    }

    h4 {
        margin-right: auto;
        font-size: 24px;
        line-height: 30px;
        color: white;
    }

    &__control-btn {
        -webkit-appearance: none;
        width: 24px;
        height: 24px;
        border: none;
        background-color: transparent;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        opacity: 0.6;

        &--prev {
            margin-right: 16px;
            background-image: url('../../assets/icons/chevron-left-white.svg');
        }

        &--next {
            background-image: url('../../assets/icons/chevron-right-white.svg');
        }
    }

    &__list {
        display: flex;
    }

    &__item {
        width: 140px;
        margin-right: 72px;
        flex-shrink: 0;

        &:last-child {
            margin-right: 0;
        }
    }

    &__link {
        display: flex;
        flex-direction: column;
        color: white;
    }

    & img {
        margin-bottom: 8px;
    }

    &__name {
        width: 170px;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }

    &__stats {
        margin-bottom: 4px;
        font-size: 14px;
        line-height: 18px;
        opacity: 0.6;
    }
}
</style>