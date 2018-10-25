<template>
    <section class="section section--static people">
        <div class="section__header">
            <h1 class="section__title">Люди</h1>
            <div class="tabs">
                <button class="tab active">Популярные</button>
                <button class="tab">Новые</button>
                <button class="tab">Случайные</button>
            </div>
            <div class="section__controls">
                <button class="control-btn control-btn--prev people-prev"></button>
                <button class="control-btn control-btn--next people-next"></button>
                <a href="#"
                   class="control-btn control-btn--all">Все люди</a>
            </div>
        </div>
        <swiper class="slider"
                :options="swiperOption">
            <swiper-slide v-for="(it, i) in people"
                          :key="i">
                <a href="#"
                   class="people__item">
                    <img :src="it.avatar">
                    <h3 class="people__nickname">{{ it.nickname }}</h3>
                    <p class="people__name">{{ it.name }}</p>
                    <p class="people__description">{{ it.description }}</p>
                </a>
            </swiper-slide>
        </swiper>
    </section>
</template>
<script>
export default {
    data() {
        return {
            people: [{
                avatar: 'https://files2.geometria.ru/pics/original/037/270/37270907.jpg',
                nickname: 'Monohrom',
                name: 'Михаил Вильчук',
                description: 'Чем знаменит, например топ-менеджер Газпрома'
            }, {
                avatar: 'https://files.geometria.ru/pics/original/038/530/38530343.jpg',
                nickname: 'Mihashu',
                name: 'Михаил Михашу',
                description: `Charmy Project Manager ☼ Globetrotter ✈️ Can't stop dancing`
            }, {
                avatar: 'https://files.geometria.ru/pics/original/16784163.jpg',
                nickname: 'Саша Гео',
                name: 'Саша Гео',
                description: 'Шеф Геометрия.ру'
            }, {
                avatar: 'https://files.geometria.ru/pics/original/25707164.jpg',
                nickname: 'Виктория Дука',
                name: 'Виктория Дука',
                description: 'Музыкант перкуссионист, продюсер'
            }, {
                avatar: 'https://files2.geometria.ru/pics/original/036/195/36195432.jpg',
                nickname: 'Zolnikov',
                name: 'Артем Зольников',
                description: 'Live saxophone Performance'
            }, {
                avatar: 'https://files2.geometria.ru/pics/original/054/886/54886501.jpg',
                nickname: 'garshone',
                name: 'Арсений Горшенин',
                description: 'Чем знаменит, например топ-менеджер Газпрома'
            }],
            swiperOption: {
                slidesPerView: 6,
                loop: true,
                navigation: {
                    prevEl: '.people-prev',
                    nextEl: '.people-next',
                    disabledClass: 'control-btn--disabled'
                },
                spaceBetween: 32,
            }
        };
    }
};
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.slider {
    width: 1200px;
}

.people {
    @media (max-width: $desktop-width) {
        margin-bottom: 48px;
    }

    &__list {
        display: flex;
    }

    &__item {
        display: block;
        width: 180px;
        margin-right: 32px;

        @media (max-width: $desktop-width) {
            margin-right: 0;
        }

    }

    & img {
        width: 180px;
        height: 180px;
        margin-bottom: 8px;
        transition: 0.3s;

        &:hover {
            opacity: 0.8;
        }
    }

    &__nickname {
        padding: 0;
        margin: 0;
        margin-bottom: 4px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }

    &__name {
        padding: 0;
        margin: 0;
        padding-bottom: 15px;
        margin-bottom: 9px;
        border-bottom: 2px solid black;
        font-size: 14px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.6);
    }

    &__description {
        padding: 0;
        margin: 0;
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.6);
    }
}

.section__title {
    margin-right: 65px;
}
</style>