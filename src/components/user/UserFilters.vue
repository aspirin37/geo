<template>
    <div class="user-filters">
        <div class="d-flex flex-row align-items-baseline">
            <h4>Настройка контента </h4>
            <i class="icon icon-help"></i>
        </div>
        <label>Значимость</label>
        <div class="buttons-row">
            <button class="btn"><i class="icon icon-star"></i>Главное</button>
            <button class="btn"><i class="icon icon-bars"></i>Топ</button>
            <button class="btn"><i class="icon icon-onair"></i>Эфир</button>
            <!-- <input type="radio"
                   class="btn"><i class="icon icon-star"></i>Главное</input>
            <input type="radio"
                   class="btn"><i class="icon icon-bars"></i>Топ</input>
            <input type="radio"
                   class="btn"><i class="icon icon-onair"></i>Эфир</input> -->
        </div>
        <label>Культурные профили</label>
        <div class="buttons-row flex-wrap">
            <button class="btn checkbox"><i class="icon icon-glasses"></i></button>
            <button class="btn checkbox"><i class="icon icon-drama"></i></button>
            <button class="btn checkbox"><i class="icon icon-note"></i></button>
            <button class="btn checkbox"><i class="icon icon-forms"></i></button>
            <button class="btn checkbox"><i class="icon icon-book"></i></button>
            <button class="btn checkbox"><i class="icon icon-car"></i></button>
            <button class="btn checkbox"><i class="icon icon-tv"></i></button>
            <button class="btn checkbox"><i class="icon icon-pic"></i></button>
            <button class="btn checkbox"><i class="icon icon-sun"></i></button>
            <button class="btn checkbox"><i class="icon icon-weights"></i></button>
            <button class="btn checkbox"><i class="icon icon-cocktail"></i></button>
            <button class="btn checkbox"><i class="icon icon-bag"></i></button>
            <button class="btn checkbox"><i class="icon icon-soup"></i></button>
        </div>
        <button class="btn btn-show">Показать</button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.user-filters {
    display: flex;
    flex-direction: column;

    @media (max-width: $desktop-width) {
        margin-top: 32px;
    }

    h4 {
        margin-right: 8px;
        margin-bottom: 12px;
        font-size: 18px;
        line-height: 24px;
    }

    label {
        margin-bottom: 12px;
        opacity: 0.5;
        font-size: 16px;
        line-height: 24px;
    }
}

.buttons-row {
    display: flex;
    margin-bottom: 12px;
}

.btn {
    display: flex;
    align-items: center;
    height: 48px;
    opacity: 1;
    margin-right: 2px;
    margin-bottom: 2px;
    font-weight: normal;
    line-height: 24px;
    border: 2px solid #E6E6E6;

    &-show {
        display: block;
        border-color: black;
        margin-top: 16px;
        text-align: center;
    }

    &.checkbox {
        display: block;
        width: 56px;
        height: 56px;
        padding: 12px;

        .icon {
            width: 28px;
            height: 28px;
        }
    }
}

.icon {
    margin-right: 8px;
}

.icon-help {
    cursor: pointer;
    position: relative;
    top: 2px;
    width: 16px;
    height: 16px;
    opacity: 0.5;
}
</style>