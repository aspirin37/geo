<template>
    <section class="section eyes">
        <div class="eyes__header">
            <h4>Глаза геометрии</h4>
            <button class="eyes__control-btn eyes__control-btn--prev eyes-prev"></button>
            <button class="eyes__control-btn eyes__control-btn--next eyes-next"></button>
        </div>
        <swiper class="slider"
                :options="swiperOption">
            <swiper-slide v-for="(it, i) in eyes"
                          :key="i">
                <li class="eyes__item">
                    <a href="#"
                       class="eyes__link">
                        <div class="eyes__img-wrapper">
                            <img :src="it.preview"
                                 width="140"
                                 height="140">
                        </div>
                        <div class="eyes__name">{{ it.name }}</div>
                        <div class="eyes__stats">29 фотоотчетов</div>
                        <div class="eyes__stats">42 репортажа</div>
                        <div class="eyes__stats">Рейтинг 2548</div>
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
            eyes: [{
                preview: 'https://files2.geometria.ru/pics/original/037/270/37270907.jpg',
                name: 'Андрей Ховрычев',
            }, {
                preview: 'https://files.geometria.ru/pics/original/18523020.jpg',
                name: 'Алена Яшина',
            }, {
                preview: 'https://files.geometria.ru/pics/original/16784163.jpg',
                name: 'Dmitriy Mnogolet',
            }, {
                preview: 'https://files.geometria.ru/pics/original/038/530/38530343.jpg',
                name: 'Michael Kuznetsov',
            }, {
                preview: 'https://files.geometria.ru/pics/original/25707164.jpg',
                name: 'Anastasia Versa',
            }, {
                preview: 'https://files2.geometria.ru/pics/original/054/886/54886501.jpg',
                name: 'Tashe Che',
            }],
            swiperOption: {
                slidesPerView: 6,
                loop: true,
                navigation: {
                    nextEl: '.eyes-next',
                    prevEl: '.eyes-prev',
                    disabledClass: 'eyes__control-btn--disabled'
                },
                spaceBetween: 72
            },
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.slider {
    width: 1200px;
}

// .swiper-slide {
//     width: 140px !important;
// }

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
        transition: 0.2s;

        &:hover {
            opacity: 1;
        }

        &--disabled {
            opacity: 0.4;
            cursor: default;
        }

        &--prev {
            margin-right: 16px;
            background-image: url('../../assets/icons/chevron-left-white.svg');
        }

        &--next {
            background-image: url('../../assets/icons/chevron-right-white.svg');
        }
    }

    &__item {
        width: 140px;
        // margin-right: 72px;
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

    &__img-wrapper {
        position: relative;
        font-size: 0;
        z-index: 0;
        margin-bottom: 8px;
    }

    &__name {
        width: 170px;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        &:hover {
            text-decoration: underline;
        }
    }

    &__stats {
        margin-bottom: 4px;
        font-size: 14px;
        line-height: 18px;
        opacity: 0.6;
    }
}
</style>