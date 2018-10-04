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
}
</style>