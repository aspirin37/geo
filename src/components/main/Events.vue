<template>
    <section class="section section--static events">
        <div class="section__header">
            <h1 class="section__title">Анонсы событий</h1>
            <div class="section__controls">
                <button class="control-btn control-btn--prev"></button>
                <button class="control-btn control-btn--next"></button>
                <a href="#"
                   class="control-btn control-btn--all">Все анонсы</a>
            </div>
        </div>
        <div class="events__list"
             v-if="$mq == 'lg'">
            <div class="events__column">
                <event v-for="(it, i) in events"
                       :event="it"
                       v-if="i % 2 == 0"
                       :key="i" />
            </div>
            <div class="events__column">
                <event v-for="(it, i) in events"
                       :event="it"
                       v-if="Math.abs(i % 2) == 1"
                       :key="i" />
            </div>
            <div class="side-banner">
                <img src="https://sporteluxe.com/wp-content/uploads/2015/02/NTC-tour-registrations-banner-300x600.jpg"
                     width="286"
                     height="572">
            </div>
        </div>
        <div class="events__list"
             v-else>
            <event v-for="(it, i) in events"
                   :event="it"
                   :key="i" />
        </div>
    </section>
</template>
<script>
import Event from './events/Event'
export default {
    components: {
        Event
    },
    data() {
        return {
            events: [{
                preview: 'http://files.geometria.ru/pics/original/037/209/37209892.jpg',
                dates: '15 июня – 31 октября',
                place: 'Дом танца Каннон Данс',
                name: 'XX Международный фестиваль современного танца OPEN LOOK',
                reviews: 39,
                comments: 4,
                subscribers: 27,
                isSquare: false,
                icons: {
                    book: false,
                    drama: true,
                    forms: false,
                    note: true
                }
            }, {
                preview: 'https://files2.geometria.ru/pics/original/068/613/68613807.jpg',
                dates: '15 июня – 31 октября',
                place: 'Дом танца Каннон Данс',
                name: 'XX Международный фестиваль современного танца OPEN LOOK',
                reviews: 39,
                comments: 4,
                subscribers: 27,
                isSquare: true,
                icons: {
                    book: true,
                    drama: false,
                    forms: false,
                    note: false
                }
            }, {
                preview: 'https://files2.geometria.ru/pics/original/063/923/63923770.jpg',
                dates: '15 июня – 31 октября',
                place: 'Дом танца Каннон Данс',
                name: 'XX Международный фестиваль современного танца OPEN LOOK',
                reviews: 39,
                comments: 4,
                subscribers: 27,
                isSquare: false,
                icons: {
                    book: true,
                    drama: false,
                    forms: false,
                    note: false
                }
            }, {
                preview: 'https://files2.geometria.ru/pics/original/070/079/70079806.jpg',
                dates: '15 июня – 31 октября',
                place: 'Дом танца Каннон Данс',
                name: 'XX Международный фестиваль современного танца OPEN LOOK',
                reviews: 39,
                comments: 4,
                subscribers: 27,
                isSquare: false,
                icons: {
                    book: true,
                    drama: false,
                    forms: false,
                    note: false
                }
            }, {
                preview: 'https://files.geometria.ru/pics/original/067/647/67647183.jpg',
                dates: '15 июня – 31 октября',
                place: 'Дом танца Каннон Данс',
                name: 'XX Международный фестиваль современного танца OPEN LOOK',
                reviews: 39,
                comments: 4,
                subscribers: 27,
                isSquare: false,
                icons: {
                    book: true,
                    drama: false,
                    forms: false,
                    note: false
                }
            }]
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.events {
    @media (max-width: $desktop-width) {
        margin-bottom: 40px;
    }

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
}

.control-btn--prev,
.control-btn--next {
    display: none;

    @media (max-width: $desktop-width) {
        display: block;
    }
}
</style>