<template>
    <div>
        <slider></slider>
        <div class="page-container page-border">
            <reports></reports>
            <eyes></eyes>
            <events></events>
        </div>
        <div class="page-container page-border">
            <news></news>
            <banner></banner>
            <people></people>
        </div>
        <div class="page-container">
            <masterpieces></masterpieces>
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
export default {
    components: {
        Slider,
        Reports,
        Eyes,
        Events,
        News,
        People,
        Banner,
        Masterpieces
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss"
       scoped>
</style>