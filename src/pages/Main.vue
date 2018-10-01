<template>
    <div>
        <section class="main-slider">
        </section>
        <div class="page-container">
            <section class="section reports">
                <div class="section__header">
                    <h1 class="section__title">Фотоотчеты</h1>
                    <div class="section__controls">
                        <button class="control-btn control-btn--prev"></button>
                        <button class="control-btn control-btn--next"></button>
                        <a href="#"
                           class="control-btn control-btn--all">Все фотоотчеты</a>
                    </div>
                </div>
                <ul class="reports__list">
                    <li class="reports__item">
                        <img src=""
                             height="191"
                             width="286">
                    </li>
                    <li class="reports__item">
                        <img src=""
                             height="191"
                             width="286">
                    </li>
                    <li class="reports__item">
                        <img src=""
                             height="191"
                             width="286">
                    </li>
                    <li class="reports__item">
                        <img src=""
                             height="191"
                             width="286">
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>
<style lang="scss"
       scoped>
ul,
li {
    margin: 0;
    padding: 0;
    list-style: none;
}

.main-slider {
    height: 600px;
    background-color: #363E48;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url('../assets/geo-bg.jpg');
    background-repeat: no-repeat;
}

.section {

    &__header {
        display: flex;
        align-items: baseline;
        margin-bottom: 32px;
    }

    &__title {
        margin-right: auto;
    }
}

.section__controls {
    display: flex;
}

.control-btn {
    display: block;
    height: 40px;
    min-width: 48px;
    padding: 9px 16px;
    -webkit-appearance: none;
    border: 2px solid black;
    opacity: 0.75;
    border-radius: 2px;
    color: black;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    background-position: 50% 50%;
    background-repeat: no-repeat;

    &--prev {
        margin-right: -2px;
        background-image: url('../assets/icons/chevron-left.svg')
    }

    &--next {
        margin-right: 16px;
        background-image: url('../assets/icons/chevron-right.svg')
    }

    &--all {
        padding-right: 56px;
        background-image: url('../assets/icons/arrow-right.svg');
        background-position: right 20px center;
    }
}

.reports {
    &__list {
        display: flex;
        align-items: top;
    }

    &__item {
        margin-right: 32px;

        &:last-child {
            margin-right: 0;
        }

        & img {
            background-color: #f2f2f2;
        }
    }
}
</style>