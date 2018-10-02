<template>
    <section class="main-slider">
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