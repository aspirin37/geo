<template>
    <section class="main-slider">
        <img src="../../assets/geo-bg.jpg">
    </section>
</template>
<script>
export default {
    data() {
        return {

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
    // background-image: url('../../assets/geo-bg.jpg');
    // background-position: 50% 50%;
    // background-repeat: no-repeat;

    & img {
        width: 100%;
        height: auto;
    }

    @media (max-width: $mobile-width) {
        min-width: auto;
        padding: 0;
    }
}
</style>