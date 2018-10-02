<template>
    <div>
        <slider></slider>
        <div class="page-container">
            <reports></reports>
            <eyes></eyes>
        </div>
    </div>
</template>
<script>
import Slider from '@/components/main/Slider'
import Reports from '@/components/main/Reports'
import Eyes from '@/components/main/Eyes'
export default {
    components: {
        Slider,
        Reports,
        Eyes
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss"
       scoped>
.main-slider {
    height: 600px;
    background-color: #363E48;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url('../assets/geo-bg.jpg');
    background-repeat: no-repeat;
}
</style>