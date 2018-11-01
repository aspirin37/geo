<template>
    <section class="section reports">
        <div class="section__header">
            <h1 class="section__title">Фотоотчеты</h1>
            <div class="section__controls">
                <button class="btn btn-prev reports-next"></button>
                <button class="btn btn-next reports-prev"></button>
                <router-link to="/pics-upload"
                             class="btn btn-all">Все фотоотчеты</router-link>
            </div>
        </div>
        <swiper class="slider"
                :options="swiperOption">
            <swiper-slide v-for="(it, i) in reports"
                          :key="i">
                <li class="reports__item">
                    <a href="#"
                       class="reports__image-link">
                        <div class="reports__image-wrapper">
                            <img :src="it.event.image">
                        </div>
                        <div class="reports__date">{{ it.event.date }}</div>
                    </a>
                    <a href="#"
                       class="italic-sm">{{ it.event.place }}</a>
                    <h4><a href="#">{{ it.event.name }}</a></h4>
                    <a href="#"
                       class="reports__author-link">
                        <div class="reports__author-avatar">
                            <img :src="it.author.avatar"
                                 width="40"
                                 height="40">
                        </div>
                        <div class="d-flex flex-column">
                            <span class="reports__author-title">Автор</span>
                            <span class="reports__author-name">{{ it.author.name }}</span>
                        </div>
                    </a>
                </li>
            </swiper-slide>
        </swiper>
    </section>
</template>
<script>
export default {
    data() {
        return {
            reports: [{
                event: {
                    image: `https://files.geometria.ru/pics/post_avatar/069/740/69740549.jpg`,
                    date: `9 сентября`,
                    place: `Клуб Central Station`,
                    name: `LOSHADKA PRTY 9 YEARS CELEBRATION`
                },
                author: {
                    avatar: `https://files.geometria.ru/pics/thumbnail/066/108/66108176.jpg`,
                    name: `Tashe Che`,
                }

            }, {
                event: {
                    image: `https://files2.geometria.ru/pics/post_avatar/069/649/69649687.jpg`,
                    date: `31 августа`,
                    place: `Арт-пространство FREEDOM`,
                    name: `Grant's. Encore + Feduk`
                },
                author: {
                    avatar: `https://files.geometria.ru/pics/thumbnail/069/209/69209335.jpg`,
                    name: `Dmitriy Mnogolet`,
                }

            }, {
                event: {
                    image: `https://files.geometria.ru/pics/post_avatar/069/687/69687457.jpg`,
                    date: `31 августа`,
                    place: `Atelier Club`,
                    name: `Loutka Forever With Love / Atelier club (Prague)`
                },
                author: {
                    avatar: `https://files.geometria.ru/pics/thumbnail/066/468/66468742.jpg`,
                    name: `Ксения Сытина`,
                }

            }, {
                event: {
                    image: `https://files2.geometria.ru/pics/post_avatar/069/677/69677751.jpg`,
                    date: `31 августа`,
                    place: `Pravda Bar`,
                    name: `#СТУДДВИЖ!`
                },
                author: {
                    avatar: `https://files.geometria.ru/pics/thumbnail/069/209/69209335.jpg`,
                    name: `Саша Гео`,
                }

            }, {
                event: {
                    image: `http://files.geometria.ru/pics/original/037/209/37209892.jpg`,
                    date: `9 сентября`,
                    place: `Клуб Central Station`,
                    name: `LOSHADKA PRTY 9 YEARS CELEBRATION`
                },
                author: {
                    avatar: `https://files.geometria.ru/pics/thumbnail/066/108/66108176.jpg`,
                    name: `Tashe Che`,
                }
            }, {
                event: {
                    image: `https://files2.geometria.ru/pics/original/069/317/69317698.jpg`,
                    date: `9 сентября`,
                    place: `Клуб Central Station`,
                    name: `LOSHADKA PRTY 9 YEARS CELEBRATION`
                },
                author: {
                    avatar: `https://files.geometria.ru/pics/thumbnail/066/108/66108176.jpg`,
                    name: `Tashe Che`,
                }
            }],
            swiperOption: {
                slidesPerView: 4,
                loop: true,
                navigation: {
                    nextEl: '.reports-prev',
                    prevEl: '.reports-next',
                    disabledClass: 'control-btn--disabled'
                },
                spaceBetween: 32,
            },
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.slider {
    width: 1240px;
}

.reports {
    margin-bottom: 48px;

    @media (max-width: $desktop-width) {
        margin-top: 24px;
    }

    &__list {
        display: flex;
        align-items: start;
    }

    &__item {
        width: 286px;
        display: flex;
        flex-direction: column;

        &:last-child {
            margin-right: 0;
        }

        h4 {
            padding-bottom: 8px;
            margin-bottom: 16px;
            border-bottom: 2px solid black;
        }

        &:hover img {
            transform: scale(1);
        }
    }

    &__image-wrapper {
        font-size: 0;
    }

    &__image-link {
        position: relative;
        width: 286px;
        height: 191px;
        margin-bottom: 12px;
        overflow: hidden;


        & img {
            transition: 1s;
            transform: scale(1.1);
            width: 286px;
            height: 191px;

            @media (max-width: $desktop-width) {
                transform: scale(1);
            }
        }
    }

    &__date {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 10px 6px 8px 6px;
        background-color: black;
        color: white;
        font-size: 14px;
        line-height: 18px;
    }

    &__author-link {
        display: flex;
        flex-direction: row;
    }

    &__author-avatar {
        position: relative;
        width: 40px;
        height: 40px;
        margin-right: 8px;
    }

    &__author-title {
        opacity: 0.6;
        color: black;
        font-size: 10px;
        letter-spacing: 1px;
        line-height: 13px;
        text-transform: uppercase;
    }

    &__author-name {
        color: black;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
}
</style>