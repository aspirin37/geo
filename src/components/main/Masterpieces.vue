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
        <div class="masterpieces__preview"
             style="background-image: url('http://www.skvulpfestival.dk/wp-content/uploads/2018/04/concert-crowd-862211.jpg')">
        </div>
        <div class="masterpieces__list">
            <div class="masterpieces__item active">
                <img src="http://www.skvulpfestival.dk/wp-content/uploads/2018/04/concert-crowd-862211.jpg">
            </div>
            <div class="masterpieces__item">
                <img src="https://files2.geometria.ru/pics/post_avatar/069/979/69979984.jpg">
            </div>
            <div class="masterpieces__item">
                <img src="https://files.geometria.ru/pics/post_avatar/070/086/70086454.jpg">
            </div>
            <div class="masterpieces__item">
                <img src="https://files2.geometria.ru/pics/post_avatar/070/073/70073486.jpg">
            </div>
            <div class="masterpieces__item">
                <img src="https://files.geometria.ru/pics/post_avatar/069/883/69883989.jpg">
            </div>
            <div class="masterpieces__item">
                <img src="https://files.geometria.ru/pics/post_avatar/069/884/69884030.jpg">
            </div>
            <div class="masterpieces__item">
                <img src="https://files.geometria.ru/pics/post_avatar/069/684/69684948.jpg">
            </div>
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
    margin-bottom: 40px;

    &__preview {
        width: 100%;
        height: 674px;
        margin-bottom: 8px;
        background-color: black;
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    &__list {
        display: flex;
    }

    &__item {
        cursor: pointer;
        margin-right: 8px;
        transition: 0.3s;

        &.active {
            opacity: 0.25;
        }

        &:hover {
            opacity: 0.25;
        }
    }

    & img {
        width: 180px;
        height: 120px;
    }
}
</style>