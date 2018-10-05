<template>
    <section class="section masterpieces">
        <div class="section__header">
            <h1 class="section__title">Шедевры</h1>
            <div class="section__controls">
                <button class="control-btn control-btn--prev"></button>
                <button class="control-btn control-btn--next"></button>
                <a href="#"
                   class="control-btn control-btn--all">Все шедевры</a>
            </div>
        </div>
        <div class="masterpieces__preview">
            <img src="http://www.skvulpfestival.dk/wp-content/uploads/2018/04/concert-crowd-862211.jpg">
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
<style lang="scss"
       scoped>
.masterpieces {
    &__preview {
        width: 100%;
        max-height: 774px;
        background-color: black;

        img {
            width: 100%;
            height: auto;
        }
    }
}
</style>