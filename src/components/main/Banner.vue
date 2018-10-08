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
@import '@/styles/_variables.scss';

.banner {
    cursor: pointer;
    margin-bottom: 48px;

    @media (max-width: $desktop-width) {
        display: none;
    }

    & img {
        width: 100%;
        height: auto;
    }
}
</style>