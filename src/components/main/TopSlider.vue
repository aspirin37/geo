<template>
    <section class="main-slider">
        <!-- <div id="container"></div> -->
        <!-- <img src="../../assets/geo-bg.jpg"> -->
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
                    bulletActiveClass: 'top-slider-bullet-active'
                },
                autoplay: {
                    delay: 10000,
                    disableOnInteraction: false
                },
                speed: 1000,
                on: {
                    slideChange: () => {
                        this.drawCircle(false)
                    },
                },
            }
        }
    },
    mounted() {
        this.drawCircle(true)
    },
    methods: {
        drawCircle(init) {
            let bullets = document.querySelectorAll('.top-slider-bullet')
            bullets.forEach(it => {
                if (it.firstChild) it.removeChild(it.firstChild)
            })
            if (document.querySelector('.top-slider-bullet-active')) {
                const bar = new ProgressBar.Circle('.top-slider-bullet-active', {
                    strokeWidth: 7,
                    easing: 'linear',
                    duration: init ? 10000 : 11000,
                    color: 'white',
                    trailColor: 'transparent',
                    trailWidth: 0,
                    svgStyle: null,
                });

                bar.animate(1.0);
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
.top-slider-bullet {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;

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
    }

    &-active::after {
        opacity: 1;
        background-color: white;
    }

    // width: 8px;
    // height: 8px;
    // margin: 0 8px;
    // display: inline-block;
    // border-radius: 100%;
    // background: #000;
    // opacity: 0.2;

    // &-active {
    //     opacity: 1;
    //     background-color: white;
    // }
}
</style>