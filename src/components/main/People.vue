<template>
    <section class="section people">
        <div class="section__header">
            <h1 class="section__title">Люди</h1>
            <div class="filter">
                <button class="filter__button active">Популярные</button>
                <button class="filter__button">Новые</button>
                <button class="filter__button">Случайные</button>
            </div>
            <div class="section__controls">
                <button class="control-btn control-btn--prev"></button>
                <button class="control-btn control-btn--next"></button>
                <a href="#"
                   class="control-btn control-btn--all">Все люди</a>
            </div>
        </div>
        <div class="people__list">
            <a href="#"
               class="people__item">
                <img src="https://files2.geometria.ru/pics/original/037/270/37270907.jpg">
                <div class="people__nickname">Monohrom</div>
                <div class="people__name">Михаил Вильчук</div>
                <div class="people__description">Чем знаменит, например топ-менеджер Газпрома</div>
            </a>
            <a href="#"
               class="people__item">
                <img src="https://files.geometria.ru/pics/original/038/530/38530343.jpg">
                <div class="people__nickname">Mihashu </div>
                <div class="people__name">Михаил Михашу</div>
                <div class="people__description">Charmy Project Manager ☼ Globetrotter ✈️ Can't stop dancing</div>
            </a>
            <a href="#"
               class="people__item">
                <img src="https://files.geometria.ru/pics/original/16784163.jpg">
                <div class="people__nickname">Саша Гео </div>
                <div class="people__name">Михаил Михашу</div>
                <div class="people__description">Шеф Геометрия.ру</div>
            </a>
            <a href="#"
               class="people__item">
                <img src="https://files.geometria.ru/pics/original/25707164.jpg">
                <div class="people__nickname">Виктория Дука</div>
                <div class="people__name">Виктория Дука</div>
                <div class="people__description">Музыкант перкуссионист, продюсер</div>
            </a>
            <a href="#"
               class="people__item">
                <img src="https://files2.geometria.ru/pics/original/036/195/36195432.jpg">
                <div class="people__nickname">Zolnikov</div>
                <div class="people__name">Артем Зольников</div>
                <div class="people__description">Live saxophone Performance</div>
            </a>
            <a href="#"
               class="people__item">
                <img src="https://files2.geometria.ru/pics/original/054/886/54886501.jpg">
                <div class="people__nickname">garshone</div>
                <div class="people__name">Арсений Горшенин</div>
                <div class="people__description">Чем знаменит, например топ-менеджер Газпрома</div>
            </a>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.people {
    @media (max-width: $desktop-width) {
        margin-bottom: 48px;
    }

    &__list {
        display: flex;
    }

    &__item {
        width: 180px;
        margin-right: 32px;
    }

    & img {
        width: 180px;
        height: 180px;
        margin-bottom: 8px;
    }

    &__nickname {
        margin-bottom: 4px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }

    &__name {
        padding-bottom: 15px;
        margin-block-end: 9px;
        border-bottom: 2px solid black;
        font-size: 14px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.6);
    }

    &__description {
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.6);
    }
}

.section__title {
    margin-right: 65px;
}
</style>