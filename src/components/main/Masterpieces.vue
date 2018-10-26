<template>
    <section class="section masterpieces">
        <div class="section__header">
            <h1 class="section__title">Шедевры</h1>
            <div class="section__controls">
                <button class="btn btn-prev master-prev"></button>
                <button class="btn btn-next master-next"></button>
                <a href="#"
                   class="btn btn-all">Все шедевры</a>
            </div>
        </div>
        <swiper :options="swiperOptionTop"
                class="gallery-top"
                ref="swiperTop">
            <swiper-slide :style="`z-index: ${i}`"
                          v-for="(it, i) in masterpieces"
                          :key="i">
                <div class="masterpieces__wrapper">
                    <img class="masterpieces__background"
                         :class="{'safari-image-fix': isSafari}"
                         :src="it.preview">
                    <div class="masterpieces__image-wrapper">
                        <img class="masterpieces__preview"
                             :class="{'safari-image-fix': isSafari}"
                             :src="it.preview">
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <swiper :options="swiperOptionThumbs"
                class="gallery-thumbs"
                ref="swiperThumbs"
                v-show="$mq === 'lg'">
            <swiper-slide v-for="(it, i) in masterpieces"
                          :key="i">
                <div class="masterpieces__item"
                     tabindex="0">
                    <img :src="it.preview">
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>
<script>
export default {
    data() {
        return {
            activeImage: 0,
            masterpieces: [{
                preview: 'http://www.skvulpfestival.dk/wp-content/uploads/2018/04/concert-crowd-862211.jpg'
            }, {
                preview: 'https://files2.geometria.ru/pics/original/056/096/56096967.jpg'
            }, {
                preview: 'https://files2.geometria.ru/pics/original/062/454/62454605.jpg'
            }, {
                preview: 'https://files2.geometria.ru/pics/original/068/963/68963782.jpg'
            }, {
                preview: 'https://files2.geometria.ru/pics/original/056/454/56454080.jpg'
            }, {
                preview: 'https://files.geometria.ru/pics/original/065/571/65571501.jpg'
            }, {
                preview: 'https://files.geometria.ru/pics/original/056/454/56454044.jpg'
            }],
        };
    },
    computed: {
        isSafari() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        },
        swiperOptionTop() {
            return {
                effect: this.$mq !== 'lg' ? 'fade' : '',
                navigation: {
                    nextEl: '.master-next',
                    prevEl: '.master-prev',
                    disabledClass: 'btn--disabled'
                },
                loop: this.$mq === 'lg',
                loopedSlides: this.$mq === 'lg' ? this.masterpieces.length : false,
                speed: 700,
            }
        },
        swiperOptionThumbs() {
            return {
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true,
                loop: this.$mq === 'lg',
                loopedSlides: this.masterpieces.length,
                slidesPerView: 6,
                spaceBetween: 8,
                speed: 700,
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.swiper
            const swiperThumbs = this.$refs.swiperThumbs.swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    },
};
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.safari-image-fix {
    -webkit-transform: translate3d(0, 0, 0);
}

.gallery-top {
    @media (max-width: $desktop-width) {
        margin-left: -20px;
        width: calc(100% + 20px);
        height: 500px;
    }

    @media (max-width: $tablet-width-sm) {
        height: 224px;
    }
}

.gallery-thumbs {
    width: 1240px;
}

.masterpieces {
    margin-bottom: 40px;

    @media (max-width: $desktop-width) {
        overflow: initial;
    }

    &__wrapper {
        position: relative;
        z-index: 0;
        width: auto;
        max-width: 1240px;
        height: 674px;
        margin-bottom: 8px;
        text-align: center;
        overflow: hidden;

        &::before {
            content: "";
            display: inline-block;
            height: 50%;
            width: 1px;
            margin-right: -1px;
        }

        @media (max-width: $desktop-width) {
            width: 100%;
            height: 500px;
        }

        @media (max-width: $tablet-width-sm) {
            height: 224px;
        }
    }

    &__background {
        position: absolute;
        top: -32px;
        left: -32px;
        width: calc(100% + 64px);
        height: calc(100% + 64px);
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(16px);
    }

    &__image-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: inline-block;
        text-align: center;
        position: absolute;
        width: 100%;
        height: 100%;

        &::before {
            content: "";
            display: inline-block;
            height: 50%;
            width: 1px;
            margin-right: -1px;
        }
    }

    &__preview {
        position: relative;
        z-index: 1;
        display: inline-block;
        width: auto;
        height: auto;
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
        text-align: center;
    }

    &__list {
        display: flex;

        @media (max-width: $desktop-width) {
            display: none;
        }
    }

    &__item {
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            opacity: 0.4;
        }

        &:focus {
            opacity: 0.4;
        }

        & img {
            width: 180px;
            height: 120px;
        }
    }
}
</style>