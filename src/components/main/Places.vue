<template>
    <section class="section places">
        <div class="section__header">
            <h1 class="section__title">Заведения</h1>
            <div class="filter">
                <button class="filter__button active">Популярные</button>
                <button class="filter__button">Новые</button>
            </div>
            <div class="section__controls">
                <button class="control-btn control-btn--prev"></button>
                <button class="control-btn control-btn--next"></button>
                <a href="#"
                   class="control-btn control-btn--all">Все заведения</a>
            </div>
        </div>
        <div class="places__list">
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
.places {
    &__list {
        display: flex;
    }

    &__item {
        width: 180px;
        margin-right: 32px;
    }

    & img {
        width: 180px;
        height: 180px;
        margin-bottom: 8px;
    }
}

.section__title {
    margin-right: 65px;
}

.filter {
    display: flex;
    align-self: center;
    margin-right: auto;

    &__button {
        position: relative;
        z-index: 0;
        margin-right: 32px;
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
        opacity: 0.6;
        transition: all 0.1s;
        outline: none;

        &::after {
            content: '';
            position: absolute;
            z-index: -1;
            bottom: 0;
            left: 6px;
            display: block;
            width: 0%;
            opacity: 0.2;
            height: 8px;
            background-color: #00e6de;
            transition: all 0.3s;
        }

        &.active,
        &:hover {
            opacity: 1;
        }

        &.active::after,
        &:hover::after {
            width: 100%;
        }
    }
}
</style>