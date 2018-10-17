<template>
    <section class="main-slider">
        <!-- <img src="../../assets/geo-bg.jpg"> -->
        <swiper class="slider"
                :options="swiperOption">
            <swiper-slide v-for="(it, i) in banners"
                          :key="i">
                <img src="../../assets/geo-bg.jpg">
            </swiper-slide>
        </swiper>
    </section>
</template>
<script>
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
                    prevEl: '.people-prev',
                    nextEl: '.people-next',
                },
                autoplay: {
                    delay: 10000,
                    disableOnInteraction: false
                },
                speed: 1000,
            }
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

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