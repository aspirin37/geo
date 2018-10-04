<template>
    <div>
        <slider></slider>
        <div class="page-container">
            <reports></reports>
            <eyes></eyes>
            <events></events>
        </div>
    </div>
</template>
<script>
import Slider from '@/components/main/Slider'
import Reports from '@/components/main/Reports'
import Eyes from '@/components/main/Eyes'
import Events from '@/components/main/Events'
export default {
    components: {
        Slider,
        Reports,
        Eyes,
        Events
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss"
       scoped>
</style>