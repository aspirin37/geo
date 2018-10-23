<template>
    <main>
        <slider></slider>
        <div class="page-border">
            <div class="page-container">
                <reports></reports>
                <eyes></eyes>
                <events></events>
            </div>
        </div>
        <div class="page-border">
            <div class="page-container">
                <news></news>
                <banner :src="'https://s.go31.ru/section/newsInText/upload/images/news/intext/000/040/533/to-1_5b72aa1f88e4f.jpg'"></banner>
                <people></people>
            </div>
        </div>
        <div class="page-container">
            <masterpieces></masterpieces>
            <places></places>
            <banner :src="'https://www.trashedgraphics.com/wp-content/uploads/2014/02/banner_02.jpg'"></banner>
            <div class="btn-up-container"
                 v-if="$mq !== 'lg'">
                <button class="btn btn--up"
                        @click="scrollToTop"><i class="up-icon"></i>Наверх</button>
            </div>
        </div>
    </main>
</template>
<script>
import Slider from '@/components/main/TopSlider'
import Reports from '@/components/main/Reports'
import Eyes from '@/components/main/Eyes'
import Events from '@/components/main/Events'
import News from '@/components/main/News'
import People from '@/components/main/People'
import Banner from '@/components/main/Banner'
import Masterpieces from '@/components/main/Masterpieces'
import Places from '@/components/main/Places'
export default {
    components: {
        Slider,
        Reports,
        Eyes,
        Events,
        News,
        People,
        Banner,
        Masterpieces,
        Places
    },
    data() {
        return {}
    },
    methods: {
        scrollToTop() {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>
<style lang="scss"
       scoped>
</style>