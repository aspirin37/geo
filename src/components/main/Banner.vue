<template>
    <section class="section banner">
        <img :src="src">
    </section>
</template>
<script>
export default {
    props: ['src'],
    data() {
        return {

        }
    }
}
</script>
<style lang="scss"
       scoped>
.banner {
    cursor: pointer;
    margin-bottom: 48px;

    & img {
        width: 100%;
        height: auto;
    }
}
</style>