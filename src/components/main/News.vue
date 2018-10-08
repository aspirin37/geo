<template>
    <section class="section news">
        <div class="section__header">
            <h1 class="section__title">Новости</h1>
            <div class="section__controls">
                <a href="#"
                   class="control-btn control-btn--all">Все новости</a>
            </div>
        </div>
        <div class="d-flex">
            <div class="side-banner">
                <img src="https://forum.bits.media/uploads/downloaded/banner300_600_eaf51d4eff6665633f59b838ae70e7de.png"
                     width="286"
                     height="572">
            </div>
            <div class="news__list">
                <a href="#"
                   class="news__link"
                   v-scroll-reveal.reset>
                    <div class="news__img-wrapper">
                        <img src="https://files2.geometria.ru/pics/original/069/864/69864351.jpg">
                    </div>
                    <div>
                        <h3>Евгений Фёдоров</h3>
                        <p>Лидер коллективов Zorge, TequilaJazzz и Optimystica Orchestra, достойно прошедший через
                            советскую, постсоветскую и российскую музыкальные школы</p>
                        <div class="d-flex align-items-baseline">
                            <div class="label label--black">Интервью</div>
                            <div class="actions ml-auto">
                                <a href="#"
                                   class="actions__link actions__link--reviews">39</a>
                                <a href="#"
                                   class="actions__link actions__link--comments">4</a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#"
                   class="news__link"
                   v-scroll-reveal.reset>
                    <div class="news__img-wrapper">
                        <img src="https://files2.geometria.ru/pics/original/067/424/67424580.jpg">
                    </div>
                    <div>
                        <h3>Gastreet International Restaurant Show 2018</h3>
                        <p>Главное событие ресторанной отрасли, для всех тех, кто связан с ресторанной сферой</p>
                        <div class="d-flex align-items-baseline">
                            <div class="label label--black">Статьи</div>
                            <div class="actions ml-auto">
                                <a href="#"
                                   class="actions__link actions__link--reviews">39</a>
                                <a href="#"
                                   class="actions__link actions__link--comments">4</a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#"
                   class="news__link"
                   v-scroll-reveal.reset>
                    <div class="news__img-wrapper">
                        <img src="https://files.geometria.ru/pics/original/068/132/68132918.jpg">
                    </div>
                    <div>
                        <h3>Morcheeba</h3>
                        <p>Британские пионеры трип-хопа вернулись с новым альбомом Blaze Away: релиз намечен на 1
                            июня</p>
                        <div class="d-flex align-items-baseline">
                            <div class="label label--black">Интервью</div>
                            <div class="actions ml-auto">
                                <a href="#"
                                   class="actions__link actions__link--reviews">39</a>
                                <a href="#"
                                   class="actions__link actions__link--comments">4</a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#"
                   class="news__link"
                   v-scroll-reveal.reset>
                    <div class="news__img-wrapper">
                        <img src="https://files.geometria.ru/pics/original/067/344/67344710.jpg">
                    </div>
                    <div>
                        <h3>Профессия: Мастер индийского массажа</h3>
                        <p>«Все профессии нужны, все профессии важны!». Говорим с мастером индийского массажа из
                            салона Royal Thai</p>
                        <div class="d-flex align-items-baseline">
                            <div class="label label--black">Интервью</div>
                            <div class="actions ml-auto">
                                <a href="#"
                                   class="actions__link actions__link--reviews">39</a>
                                <a href="#"
                                   class="actions__link actions__link--comments">4</a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#"
                   class="news__link"
                   v-scroll-reveal.reset>
                    <div class="news__img-wrapper">
                        <img src="https://files2.geometria.ru/pics/original/069/317/69317698.jpg">
                    </div>
                    <div>
                        <h3>Bobina</h3>
                        <p>Август примечателен не только масштабным развертыванием «предвыборной» гонки рейтинга Dj
                            Mag, но и самыми разными ивентами</p>
                        <div class="d-flex align-items-baseline">
                            <div class="label label--black">Интервью</div>
                            <div class="actions ml-auto">
                                <a href="#"
                                   class="actions__link actions__link--reviews">39</a>
                                <a href="#"
                                   class="actions__link actions__link--comments">4</a>
                            </div>
                        </div>
                    </div>
                </a>
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
.news {
    margin-bottom: 48px;

    &__list {
        margin-left: 16px;
    }

    &__img-wrapper {
        position: absolute;
        top: -16px;
        left: -16px;
        width: 392px;
        height: 221px;
        overflow: hidden;
    }

    &__link {
        position: relative;
        display: block;
        width: 100%;
        min-height: 221px;
        padding: 20px;
        padding-left: 441px;
        padding-right: 24px;
        margin-bottom: 94px;
        border: 2px solid #000000;
        border-radius: 2px;

        &:first-child {
            margin-top: 16px;
        }

        &:last-child {
            margin-bottom: 0px;
        }

        &:hover img {
            transform: scale(1);

        }

        & img {
            width: 392px;
            height: 222px;
            transition: 1s;
            transform: scale(1.1);
        }

        h3 {
            margin-bottom: 12px;
        }

        p {
            margin: 0;
            margin-bottom: 16px;
            font-size: 16px;
            line-height: 24px;
        }
    }
}

.side-banner {
    margin-right: 45px;
}
</style>