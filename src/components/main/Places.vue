<template>
    <section class="section section--static places">
        <div class="section__header">
            <h1 class="section__title">Заведения</h1>
            <div class="filter">
                <button class="filter__button active">Популярные</button>
                <button class="filter__button">Новые</button>
            </div>
            <div class="section__controls">
                <button class="control-btn control-btn--prev places-prev"></button>
                <button class="control-btn control-btn--next places-next"></button>
                <a href="#"
                   class="control-btn control-btn--all">Все заведения</a>
            </div>
        </div>
        <swiper class="slider"
                :options="swiperOption">
            <swiper-slide v-for="(it, i) in places"
                          :key="i">
                <a href="#"
                   class="places__item">
                    <div class="places__image">
                        <img :src="it.preview">
                    </div>
                    <div class="places__logo">
                        <img :src="it.logo">
                    </div>
                    <h4>{{ it.name }}</h4>
                    <div class="places__description">{{ it.description }}</div>
                    <div class="actions">
                        <a href="#"
                           class="actions__link actions__link--reviews">39</a>
                        <a href="#"
                           class="actions__link actions__link--comments">4</a>
                    </div>
                </a>
            </swiper-slide>
        </swiper>
    </section>
</template>
<script>
export default {
    data() {
        return {
            places: [{
                preview: 'https://files.geometria.ru/pics/post_avatar/066/791/66791163.jpg',
                logo: 'https://files2.geometria.ru/pics/dynamic350/041/369/41369158.jpg',
                name: 'Космонавт',
                description: 'Современный двухуровневый рок-клуб с танцполом на 1500 человек, VIP-зоной и рестораном на втором этаже'
            }, {
                preview: 'https://files2.geometria.ru/pics/post_avatar/050/046/50046303.jpg',
                logo: 'https://files.geometria.ru/pics/dynamic350/041/367/41367977.jpg',
                name: 'ГлавCLUB',
                description: 'Одна из лучших в России, современная и превосходно оснащенная концертная площадка, заслуженно любимая публикой за невероятные концерты'
            }, {
                preview: 'https://files2.geometria.ru/pics/post_avatar/068/780/68780047.jpg',
                logo: 'https://files2.geometria.ru/pics/dynamic350/041/369/41369693.jpg',
                name: 'Lomonosov',
                description: 'Уже успевший стать легендарным, бар клубного формата в самом центре Петербурга! Один из флагманов ночной жизни города'
            }, {
                preview: 'https://files2.geometria.ru/pics/post_avatar/066/335/66335465.jpg',
                logo: 'https://files2.geometria.ru/pics/dynamic250/060/548/60548090.jpg',
                name: 'Дворец «Олимпия»',
                description: 'Мечтаете окунуться в атмосферу аристократического шика, сдержанной романтичности и пышных балов «золотого века»?'
            }],
            swiperOption: {
                slidesPerView: 4,
                loop: true,
                navigation: {
                    prevEl: '.places-prev',
                    nextEl: '.places-next',
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
    width: 1240px;
}

.places {
    margin-bottom: 48px;

    &__list {
        display: flex;
    }

    &__item {
        width: 286px;
        margin-right: 32px;

        &:hover .places__image img {
            transform: scale(1);
        }

        @media (max-width: $desktop-width) {
            margin-right: 0;
        }
    }


    &__image {
        width: 286px;
        height: 191px;
        margin-bottom: 18px;
        overflow: hidden;

        & img {
            width: 286px;
            height: 191px;
            transform: scale(1.1);
            transition: 1s;

            @media (max-width: $desktop-width) {
                transform: scale(1);
            }
        }
    }

    &__logo {
        min-height: 148px;
        padding-bottom: 24px;
        border-bottom: 2px solid black;
        margin-bottom: 12px;

        img {
            position: relative;
            left: 50%;
            transform: translate(-50%);
            height: 118px;
            width: auto;
            background-color: transparent;
        }
    }

    h4 {
        margin-bottom: 8px;
    }

    &__description {
        margin-bottom: 16px;
        opacity: 0.6;
        font-size: 14px;
        line-height: 20px;
    }
}

.section__title {
    margin-right: 65px;
}

.actions__link {
    margin-right: 20px;
}
</style>