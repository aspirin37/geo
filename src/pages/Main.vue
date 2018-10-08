<template>
    <div>
        <slider></slider>
        <div class="page-border">
            <div class="page-container">
                <reports></reports>
                <eyes v-scroll-reveal.reset></eyes>
                <events></events>
            </div>
        </div>
        <div class="page-border">
            <div class="page-container">
                <news></news>
                <banner :src="'https://s.go31.ru/section/newsInText/upload/images/news/intext/000/040/533/to-1_5b72aa1f88e4f.jpg'"></banner>
                <people v-scroll-reveal.reset></people>
            </div>
        </div>
        <div class="page-container">
            <masterpieces v-scroll-reveal.reset></masterpieces>
            <places v-scroll-reveal.reset></places>
            <banner :src="'https://www.trashedgraphics.com/wp-content/uploads/2014/02/banner_02.jpg'"></banner>
        </div>
    </div>
</template>
<script>
import Slider from '@/components/main/Slider'
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
    }
}
</script>
<style lang="scss"
       scoped>
</style>