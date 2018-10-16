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
        <div class="masterpieces__wrapper">
            <div class="masterpieces__background"
                 :style="`background-image: url(${masterpieces[activeImage].preview})`"></div>
            <div class="masterpieces__image-wrapper">
                <img class="masterpieces__preview"
                     :src="masterpieces[activeImage].preview">
            </div>
        </div>
        <div class="masterpieces__list">
            <div class="masterpieces__item"
                 :class="{'active' : i === activeImage }"
                 @click="activeImage = i"
                 v-for="(it, i) in masterpieces"
                 :key="i">
                <img :src="it.preview">
            </div>
            <!-- <div class="masterpieces__item">
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
            </div> -->
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            activeImage: 0,
            masterpieces: [{
                preview: 'http://www.skvulpfestival.dk/wp-content/uploads/2018/04/concert-crowd-862211.jpg'
            }, {
                preview: 'https://files.geometria.ru/pics/original/070/255/70255842.jpg'
            }, {
                preview: 'https://files.geometria.ru/pics/original/070/086/70086208.jpg'
            }, {
                preview: 'https://files2.geometria.ru/pics/original/068/963/68963782.jpg'
            }, {
                preview: 'https://files.geometria.ru/pics/original/050/296/50296518.jpg'
            }, {
                preview: 'https://files.geometria.ru/pics/original/065/571/65571501.jpg'
            }, {
                preview: 'https://files.geometria.ru/pics/original/056/454/56454044.jpg'
            }]
        };
    }
};
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.masterpieces {
    margin-bottom: 40px;

    @media (max-width: $desktop-width) {
        overflow: initial;
    }

    &__wrapper {
        position: relative;
        z-index: 0;
        width: auto;
        max-width: 1240px;
        height: 674px;
        margin-bottom: 8px;
        text-align: center;
        overflow: hidden;

        &::before {
            content: "";
            display: inline-block;
            height: 50%;
            width: 1px;
            margin-right: -1px;
        }

        @media (max-width: $desktop-width) {
            margin-left: -20px;
            width: calc(100% + 20px);
            height: 224px;
        }
    }

    &__background {
        position: absolute;
        top: -16px;
        left: -16px;
        width: calc(100% + 32px);
        height: calc(100% + 32px);
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(16px);
        // background-image: url(https://files.geometria.ru/pics/original/070/255/70255842.jpg);
    }

    &__image-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: inline-block;
        text-align: center;
        position: absolute;
        width: 100%;
        height: 100%;

        &::before {
            content: "";
            display: inline-block;
            height: 50%;
            width: 1px;
            margin-right: -1px;
        }
    }

    &__preview {
        position: relative;
        z-index: 1;
        display: inline-block;
        width: auto;
        height: auto;
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
        text-align: center;

        // margin-bottom: 8px;
        // background-image: url(https://files.geometria.ru/pics/original/070/255/70255842.jpg);
        // background-size: contain;
        // background-repeat: no-repeat;
        // background-position: 50% 50%;

        // width: 100%;
        // height: 674px;
        // margin-bottom: 8px;
        // background-color: black;
        // background-position: 50% 50%;
        // background-size: cover;
        // background-repeat: no-repeat;

        @media (max-width: $desktop-width) {
            // width: 100%;
            // height: auto;
            // max-height: 224px;
            // margin-left: -20px;
        }

        // width: 100%;
        // height: auto;
        // max-height: 674px;

        // @media (max-width: $desktop-width) {
        //     width: calc(100% + 20px);
        // }
    }

    &__list {
        display: flex;

        @media (max-width: $desktop-width) {
            display: none;
        }
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

        & img {
            width: 180px;
            height: 120px;
        }
    }
}
</style>