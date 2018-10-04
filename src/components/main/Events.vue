<template>
    <section class="section events">
        <div class="section__header">
            <h1 class="section__title">Анонсы событий</h1>
            <div class="section__controls">
                <a href="#"
                   class="control-btn control-btn--all">Все анонсы</a>
            </div>
        </div>
        <div class="events__list">
            <div class="events__column">
                <div class="events__item">
                    <a href="#"
                       class="events__image-link">
                        <img src="https://files2.geometria.ru/pics/original/069/771/69771754.jpg"
                             width="445"
                             height="250">
                    </a>
                    <div class="events__info">
                        <div class="events__date">15 июня – 31 октября</div>
                        <a href="#"
                           class="events__place italic-sm">Дом танца Каннон Данс</a>
                    </div>
                    <div class="events__bottom">
                        <h4>XX Международный фестиваль современного танца OPEN LOOK</h4>
                        <div class="actions">
                            <a href="#"
                               class="actions__link actions__link--reviews">39</a>
                            <a href="#"
                               class="actions__link actions__link--comments">4</a>
                            <a href="#"
                               class="actions__link actions__link--subscribers">27</a>
                        </div>
                    </div>
                </div>
                <div class="events__item">
                    <a href="#"
                       class="events__image-link">
                        <img src="https://files.geometria.ru/pics/original/069/223/69223855.jpg"
                             width="445"
                             height="250">
                    </a>
                    <div class="events__info">
                        <div class="events__date">15 июня – 31 октября</div>
                        <a href="#"
                           class="events__place italic-sm">Дом танца Каннон Данс</a>
                    </div>
                    <div class="events__bottom">
                        <h4>XX Международный фестиваль современного танца OPEN LOOK</h4>
                        <div class="actions">
                            <a href="#"
                               class="actions__link actions__link--reviews">39</a>
                            <a href="#"
                               class="actions__link actions__link--comments">4</a>
                            <a href="#"
                               class="actions__link actions__link--subscribers">27</a>
                        </div>
                    </div>
                </div>
                <div class="events__item">
                    <a href="#"
                       class="events__image-link">
                        <img src="https://files.geometria.ru/pics/original/067/647/67647183.jpg"
                             width="445"
                             height="250">
                    </a>
                    <div class="events__info">
                        <div class="events__date">15 июня – 31 октября</div>
                        <a href="#"
                           class="events__place italic-sm">Дом танца Каннон Данс</a>
                    </div>
                    <div class="events__bottom">
                        <h4>XX Международный фестиваль современного танца OPEN LOOK</h4>
                        <div class="actions">
                            <a href="#"
                               class="actions__link actions__link--reviews">39</a>
                            <a href="#"
                               class="actions__link actions__link--comments">4</a>
                            <a href="#"
                               class="actions__link actions__link--subscribers">27</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="events__column">
                <div class="events__item events__item--square">
                    <a href="#"
                       class="events__image-link">
                        <img src="https://files2.geometria.ru/pics/original/068/613/68613807.jpg"
                             width="445"
                             height="445">
                    </a>
                    <div class="events__info">
                        <div class="events__date">15 июня – 31 октября</div>
                        <a href="#"
                           class="events__place italic-sm">Дом танца Каннон Данс</a>
                    </div>
                    <div class="events__bottom">
                        <div class="labels-row">
                            <div class="label label--red">Геометрия рекомендует</div>
                            <a class="label label--blue"
                               href="#">Купить билеты</a>
                        </div>
                        <h4>XX Международный фестиваль современного танца OPEN LOOK</h4>
                        <div class="actions">
                            <a href="#"
                               class="actions__link actions__link--reviews">39</a>
                            <a href="#"
                               class="actions__link actions__link--comments">4</a>
                            <a href="#"
                               class="actions__link actions__link--subscribers">27</a>
                        </div>
                    </div>
                </div>
                <div class="events__item">
                    <a href="#"
                       class="events__image-link">
                        <img src="https://files2.geometria.ru/pics/original/070/079/70079806.jpg"
                             width="445"
                             height="250">
                    </a>
                    <div class="events__info">
                        <div class="events__date">15 июня – 31 октября</div>
                        <a href="#"
                           class="events__place italic-sm">Дом танца Каннон Данс</a>
                    </div>
                    <div class="events__bottom">
                        <h4>XX Международный фестиваль современного танца OPEN LOOK</h4>
                        <div class="actions">
                            <a href="#"
                               class="actions__link actions__link--reviews">39</a>
                            <a href="#"
                               class="actions__link actions__link--comments">4</a>
                            <a href="#"
                               class="actions__link actions__link--subscribers">27</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="side-banner">
                <img src="https://files.geometria.ru/banners/5a0c29cfaf7d2.jpg"
                     width="286"
                     height="572">
            </div>
        </div>
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
.actions {
    display: flex;

    &__link {
        position: relative;
        margin-right: 40px;
        padding-left: 24px;
        font-size: 14px;
        line-height: 18px;
        opacity: 0.5;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 16px;
            height: 16px;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: contain;
        }

        &--reviews::after {
            background-image: url('../../assets/icons/eye.svg');
        }

        &--comments::after {
            background-image: url('../../assets/icons/comment.svg');
        }

        &--subscribers::after {
            background-image: url('../../assets/icons/go.svg');
        }
    }
}

.events {
    &__list {
        display: flex;
        flex-direction: row;
        width: 922px;
    }

    &__column {
        display: flex;
        flex-direction: column;
        margin-right: 32px;
    }

    &__item {
        vertical-align: top;
        display: inline-block;
        width: 445px;
        margin-bottom: 32px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__info {
        position: relative;
        z-index: 1;
        width: 413px;
        margin-left: 8px;
        margin-top: -24px;
        margin-bottom: 8px;
        padding: 16px;
        padding-top: 8px;
        border: 2px solid #000000;
        border-radius: 2px;
        background-color: #FFFFFF;
    }

    &__date {
        font-size: 14px;
        line-height: 24px;
    }

    &__bottom {
        padding-left: 8px;
    }

    h4 {
        margin-bottom: 12px;
    }
}

.labels-row {
    display: flex;
    margin-top: 12px;
    margin-bottom: 8px;
}

.label {
    display: block;
    padding: 8px;
    padding-top: 7px;
    padding-bottom: 5px;
    margin-right: 8px;
    color: white;
    font-size: 12px;
    line-height: 15px;
    border-radius: 2px;

    &--red {
        background-color: #C7382A;
    }

    &--blue {
        background-color: #0095BF;
    }
}

.side-banner {
    display: none;

    @media (min-width: 1440px) {
        display: block;
    }
}
</style>