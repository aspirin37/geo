<template>
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
                <a href="#"
                   class="reports__image-link">
                    <img src="https://files.geometria.ru/pics/post_avatar/069/740/69740549.jpg"
                         height="191"
                         width="286">
                    <div class="reports__date">9 сентября</div>
                </a>
                <a href="#"
                   class="italic-sm">Клуб Central Station</a>
                <h4><a href="#">LOSHADKA PRTY 9 YEARS CELEBRATION</a></h4>
                <a href="#"
                   class="reports__author-link">
                    <div class="reports__author-avatar">
                        <img src="https://files.geometria.ru/pics/thumbnail/066/108/66108176.jpg"
                             width="40"
                             height="40">
                    </div>
                    <div class="d-flex flex-column">
                        <span class="reports__author-title">Автор</span>
                        <span class="reports__author-name">Tashe Che</span>
                    </div>
                </a>
            </li>
            <li class="reports__item">
                <a href="#"
                   class="reports__image-link">
                    <img src="https://files2.geometria.ru/pics/post_avatar/069/649/69649687.jpg"
                         height="191"
                         width="286">
                    <div class="reports__date">31 августа</div>
                </a>
                <a href="#"
                   class="italic-sm">Арт-пространство FREEDOM</a>
                <h4><a href="#">Grant's. Encore + Feduk</a></h4>
                <a href="#"
                   class="reports__author-link">
                    <div class="reports__author-avatar">
                        <img src="https://files.geometria.ru/pics/thumbnail/069/209/69209335.jpg"
                             width="40"
                             height="40">
                    </div>
                    <div class="d-flex flex-column">
                        <span class="reports__author-title">Автор</span>
                        <span class="reports__author-name">Dmitriy Mnogolet</span>
                    </div>
                </a>
            </li>
            <li class="reports__item">
                <a href="#"
                   class="reports__image-link">
                    <img src="https://files.geometria.ru/pics/post_avatar/069/687/69687457.jpg"
                         height="191"
                         width="286">
                    <div class="reports__date">31 августа</div>
                </a>
                <a href="#"
                   class="italic-sm">Atelier Club</a>
                <h4><a href="#">Loutka Forever With Love / Atelier club (Prague)</a></h4>
                <a href="#"
                   class="reports__author-link">
                    <div class="reports__author-avatar">
                        <img src="https://files.geometria.ru/pics/thumbnail/066/468/66468742.jpg"
                             width="40"
                             height="40">
                    </div>
                    <div class="d-flex flex-column">
                        <span class="reports__author-title">Автор</span>
                        <span class="reports__author-name">Ксения Сытина</span>
                    </div>
                </a>
            </li>
            <li class="reports__item">
                <a href="#"
                   class="reports__image-link">
                    <img src="https://files2.geometria.ru/pics/post_avatar/069/677/69677751.jpg"
                         height="191"
                         width="286">
                    <div class="reports__date">31 августа</div>
                </a>
                <a href="#"
                   class="italic-sm">Pravda Bar</a>
                <h4><a href="#">#СТУДДВИЖ!</a></h4>
                <a href="#"
                   class="reports__author-link">
                    <div class="reports__author-avatar">
                        <img src="https://files.geometria.ru/pics/thumbnail/064/273/64273667.jpg"
                             width="40"
                             height="40">
                    </div>
                    <div class="d-flex flex-column">
                        <span class="reports__author-title">Автор</span>
                        <span class="reports__author-name">Саша Гео</span>
                    </div>
                </a>
            </li>
        </ul>
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
.reports {
    margin-bottom: 48px;

    &__list {
        display: flex;
        align-items: start;
    }

    &__item {
        display: flex;
        flex-direction: column;
        margin-right: 32px;

        &:last-child {
            margin-right: 0;
        }

        h4 {
            padding-bottom: 8px;
            margin-bottom: 16px;
            border-bottom: 2px solid black;
        }
    }

    &__image-link {
        position: relative;
        width: 286px;
        height: 191px;
        margin-bottom: 12px;
    }

    &__date {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 10px 6px 8px 6px;
        background-color: black;
        color: white;
        font-size: 14px;
        line-height: 18px;
    }

    &__author-link {
        display: flex;
        flex-direction: row;
    }

    &__author-avatar {
        position: relative;
        width: 40px;
        height: 40px;
        margin-right: 8px;
    }

    &__author-title {
        opacity: 0.6;
        color: black;
        font-size: 10px;
        letter-spacing: 1px;
        line-height: 13px;
        text-transform: uppercase;
    }

    &__author-name {
        color: black;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
}
</style>