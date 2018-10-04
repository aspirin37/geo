<template>
    <div>
        <slider></slider>
        <div class="page-border">
            <div class="page-container">
                <reports></reports>
                <eyes></eyes>
                <events></events>
            </div>
        </div>
        <div class="page-container">
            <news></news>
            <img class="main-page-banner"
                 src="https://s.go31.ru/section/newsInText/upload/images/news/intext/000/040/533/to-1_5b72aa1f88e4f.jpg">
        </div>
    </div>
</template>
<script>
import Slider from '@/components/main/Slider'
import Reports from '@/components/main/Reports'
import Eyes from '@/components/main/Eyes'
import Events from '@/components/main/Events'
import News from '@/components/main/News'
export default {
    components: {
        Slider,
        Reports,
        Eyes,
        Events,
        News
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss"
       scoped>
.main-page-banner {
    width: 100%;
    height: auto;
}
</style>