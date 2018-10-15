<template>
    <section class="section news">
        <div class="section__header">
            <h1 class="section__title">Новости</h1>
            <div class="section__controls">
                <button class="control-btn control-btn--prev news-prev"></button>
                <button class="control-btn control-btn--next news-next"></button>
                <a href="#"
                   class="control-btn control-btn--all">Все новости</a>
            </div>
        </div>
        <div class="d-flex"
             v-if="$mq == 'lg'">
            <div class="side-banner">
                <img src="https://forum.bits.media/uploads/downloaded/banner300_600_eaf51d4eff6665633f59b838ae70e7de.png"
                     width="286"
                     height="572">
            </div>
            <div class="news__list">
                <a href="#"
                   class="news__link"
                   v-for="(it, i) in news"
                   :key="i">
                    <div class="news__img-wrapper">
                        <img :src="it.preview">
                    </div>
                    <div class="d-flex flex-column flex-grow-1">
                        <h3>{{ it.name }}</h3>
                        <p>{{ it.description }}</p>
                        <div class="news__info">
                            <div class="label label--black">{{ it.type }}</div>
                            <div class="actions ml-auto">
                                <a href="#"
                                   class="actions__link actions__link--reviews">39</a>
                                <a href="#"
                                   class="actions__link actions__link--comments">4</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <swiper class="slider"
                :options="swiperOption"
                v-else>
            <swiper-slide v-for="(it, i) in news"
                          :key="i">
                <a href="#"
                   class="news__link">
                    <div class="news__img-wrapper">
                        <img :src="it.preview">
                    </div>
                    <div class="d-flex flex-column flex-grow-1">
                        <h3>{{ it.name }}</h3>
                        <p>{{ it.description }}</p>
                        <div class="news__info">
                            <div class="label label--black">{{ it.type }}</div>
                            <div class="actions ml-auto">
                                <a href="#"
                                   class="actions__link actions__link--reviews">39</a>
                                <a href="#"
                                   class="actions__link actions__link--comments">4</a>
                            </div>
                        </div>
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
            news: [{
                preview: 'https://files2.geometria.ru/pics/original/069/864/69864351.jpg',
                name: 'Евгений Фёдоров',
                description: 'Лидер коллективов Zorge, TequilaJazzz и Optimystica Orchestra, достойно прошедший через советскую, постсоветскую и российскую музыкальные школы',
                type: 'Интервью',
            }, {
                preview: 'https://files2.geometria.ru/pics/original/067/424/67424580.jpg',
                name: 'Gastreet International Restaurant Show 2018',
                description: 'Главное событие ресторанной отрасли, для всех тех, кто связан с ресторанной сферой',
                type: 'Интервью',
            }, {
                preview: 'https://files.geometria.ru/pics/original/068/132/68132918.jpg',
                name: 'Morcheeba',
                description: 'Британские пионеры трип-хопа вернулись с новым альбомом Blaze Away: релиз намечен на 1 июня',
                type: 'Статьи',
            }, {
                preview: 'https://files.geometria.ru/pics/original/067/344/67344710.jpg',
                name: 'Профессия: Мастер индийского массажа',
                description: '«Все профессии нужны, все профессии важны!». Говорим с мастером индийского массажа из салона Royal Thai',
                type: 'Интервью',
            }, {
                preview: 'https://files2.geometria.ru/pics/original/069/317/69317698.jpg',
                name: 'Bobina',
                description: 'Август примечателен не только масштабным развертыванием «предвыборной» гонки рейтинга Dj Mag, но и самыми разными ивентами',
                type: 'Интервью',
            }],
            swiperOption: {
                slidesPerView: 4,
                loop: true,
                navigation: {
                    prevEl: '.news-prev',
                    nextEl: '.news-next',
                    disabledClass: 'control-btn--disabled'
                },
                spaceBetween: 24,
            },
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.slider {
    width: 1120px;
}

.swiper-slide {
    display: flex;
    height: auto;
}

.news {
    margin-bottom: 48px;

    &__list {
        margin-left: 16px;

        @media (max-width: $desktop-width) {
            display: flex;
            margin-left: 0;
            margin-top: 100px;
        }
    }

    &__img-wrapper {
        position: absolute;
        top: -16px;
        left: -16px;
        width: 392px;
        height: 221px;
        overflow: hidden;

        @media (max-width: $desktop-width) {
            position: relative;
            left: 0;
            top: 0;
            margin-bottom: 16px;
            margin-top: -100px;
            width: 234px;
            height: 132px;
        }
    }

    &__link {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 221px;
        padding: 20px;
        padding-left: 441px;
        padding-right: 24px;
        margin-bottom: 94px;
        border: 2px solid #000000;
        border-radius: 2px;

        @media (max-width: $desktop-width) {
            width: 268px;
            margin-right: 24px;
            margin-bottom: 0;
            margin-top: 82px;
            min-height: 221px;
            padding: 16px;
        }

        &:first-child {
            margin-top: 16px;

            @media (max-width: $desktop-width) {
                margin-top: 82px;
            }
        }

        &:last-child {
            margin-bottom: 0px;
        }

        &:hover img {
            transform: scale(1);

        }

        & img {
            width: 392px;
            height: 222px;
            transition: 1s;
            transform: scale(1.1);

            @media (max-width: $desktop-width) {
                transform: scale(1);
                width: 234px;
                height: 132px;
            }
        }

        h3 {
            margin-bottom: 12px;

            @media (max-width: $desktop-width) {
                font-size: 18px;
                line-height: 24px;
            }
        }

        p {
            margin: 0;
            margin-bottom: 16px;
            font-size: 16px;
            line-height: 24px;

            @media (max-width: $desktop-width) {
                font-size: 14px;
                line-height: 22px;
            }
        }
    }

    &__info {
        display: flex;
        align-items: baseline;

        @media (max-width: $desktop-width) {
            margin-top: auto;
        }
    }
}

.side-banner {
    margin-right: 45px;
}

.control-btn--prev,
.control-btn--next {
    display: none;

    @media (max-width: $desktop-width) {
        display: block;
    }
}
</style>