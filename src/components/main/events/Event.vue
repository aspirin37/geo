<template>
    <div class="event">
        <a href="#"
           class="event__image-link"
           :class="{'event__image-link--square': event.isSquare &&  $mq == 'lg'}">
            <img :src="event.preview"
                 width="445"
                 :height="event.isSquare">
        </a>
        <div class="event__info">
            <div>
                <div class="event__date">{{event.dates}}</div>
                <a href="#"
                   class="italic-sm">{{ event.place }}</a>
            </div>
            <div class="event__icons">
                <i class="events-icon events-icon--book"
                   v-if="event.icons.book"></i>
                <i class="events-icon events-icon--note"
                   v-if="event.icons.note"></i>
                <i class="events-icon events-icon--drama"
                   v-if="event.icons.drama"></i>
                <i class="events-icon events-icon--forms"
                   v-if="event.icons.forms"></i>
            </div>
        </div>
        <div class="event__bottom">
            <h4><a href="#">{{ event.name }}</a></h4>
            <div class="actions">
                <a href="#"
                   class="actions__link actions__link--reviews">{{ event.reviews }}</a>
                <a href="#"
                   class="actions__link actions__link--comments">{{ event.comments }}</a>
                <a href="#"
                   class="actions__link actions__link--subscribers">{{ event.subscribers }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['event'],
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.event {
    vertical-align: top;
    display: inline-block;
    width: 445px;
    margin-bottom: 32px;

    @media (max-width: $desktop-width) {
        width: 300px;
        margin-bottom: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }

    &:hover img {
        transform: scale(1);
    }

    &__icons {
        display: flex;
        margin-left: auto;
        margin-top: 8px;

        @media (max-width: $desktop-width) {
            display: none;
        }
    }

    &__image-link {
        display: block;
        width: 445px;
        height: 250px;
        overflow: hidden;
        font-size: 0;

        @media (max-width: $desktop-width) {
            width: 300px;
        }

        img {
            width: 445px;
            height: 250px;
            transition: 1s;
            transform: scale(1.1);

            @media (max-width: $desktop-width) {
                width: 300px;
                transform: scale(1);
            }
        }

        &--square {
            height: 445px;

            img {
                height: 445px;
            }
        }
    }

    &__info {
        position: relative;
        z-index: 1;
        display: flex;
        width: 413px;
        margin-left: 8px;
        margin-top: -24px;
        margin-bottom: 8px;
        padding: 16px;
        padding-top: 8px;
        border: 2px solid #000000;
        border-radius: 2px;
        background-color: #FFFFFF;

        @media (max-width: $desktop-width) {
            width: 286px;
        }
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
</style>