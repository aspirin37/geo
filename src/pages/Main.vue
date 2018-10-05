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
                <banner></banner>
                <people v-scroll-reveal.reset></people>
            </div>
        </div>
        <div class="page-container">
            <masterpieces v-scroll-reveal.reset></masterpieces>
            <places v-scroll-reveal.reset></places>
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