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
</style>