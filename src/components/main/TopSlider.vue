<template>
    <section class="main-slider">
        <swiper class="slider"
                :options="swiperOption">
            <swiper-slide v-for="(it, i) in banners"
                          :key="i">
                <img src="../../assets/geo-bg.jpg">
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-white"
                 slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white"
                 slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white"
                 slot="button-next"></div>
        </swiper>
    </section>
</template>
<script>
var ProgressBar = require('progressbar.js');
export default {
    data() {
        return {
            banners: [{
                image: '../../assets/geo-bg.jpg'
            }, {
                image: '../../assets/geo-bg.jpg'
            }, {
                image: '../../assets/geo-bg.jpg'
            }, {
                image: '../../assets/geo-bg.jpg'
            }],
            swiperOption: {
                loop: true,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                },
                pagination: {
                    el: '.swiper-pagination',
                    bulletClass: 'top-slider-bullet',
                    bulletActiveClass: 'top-slider-bullet-active',
                    clickable: true
                },
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false
                },
                speed: 1000,
                on: {
                    slideChange: () => {
                        this.drawCircle(false)
                    },
                },
            },
            circleTimer: null,
        }
    },
    mounted() {
        this.drawCircle(true)
    },
    methods: {
        drawCircle(init) {
            clearTimeout(this.circleTimer)
            let bullets = document.querySelectorAll('.top-slider-bullet')
            bullets.forEach(it => {
                if (it.firstChild) it.removeChild(it.firstChild)
            })
            if (document.querySelector('.top-slider-bullet-active')) {
                const bar = new ProgressBar.Circle('.top-slider-bullet-active', {
                    strokeWidth: 7,
                    easing: 'linear',
                    duration: init ? 8000 : 9000,
                    color: 'white',
                    trailColor: 'transparent',
                    trailWidth: 0,
                    svgStyle: null,
                });

                bar.animate(1.0);
                this.circleTimer = setTimeout(() => {
                    bullets.forEach(it => {
                        if (it.firstChild) it.removeChild(it.firstChild)
                    })
                }, init ? 8000 : 9000)

            }
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.swiper-button-next,
.swiper-button-prev {
    height: 32px;
    opacity: 0.5;
    transition: 0.3s;
    background-size: contain;

    &:hover {
        opacity: 1;
    }

    @media (max-width: $desktop-width) {
        height: 22px;
    }
}

.main-slider {
    width: 100%;
    min-width: 1046px;
    max-width: 1360px;
    max-height: 600px;
    padding: 20px;
    padding-bottom: 0;

    & img {
        width: 100%;
        height: auto;
    }

    @media (max-width: $desktop-width) {
        min-width: auto;
        padding: 0;
    }
}
</style>
<style lang="scss">
@import '@/styles/_variables.scss';

.top-slider-bullet {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    outline: none;

    @media (max-width: $desktop-width) {
        width: 16px;
        height: 16px;
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        transform: translate(-50%, -50%);
        display: block;
        border-radius: 100%;
        background: #000;
        opacity: 0.2;

        @media (max-width: $desktop-width) {
            width: 6px;
            height: 6px;
        }
    }

    &-active::after {
        opacity: 1;
        background-color: white;
    }
}
</style>