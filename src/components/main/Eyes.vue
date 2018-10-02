<template>
    <section class="section eyes">
        <div class="eyes__header">
            <h4>Глаза геометрии</h4>
        </div>
        <ul class="eyes__list">
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="../../assets/mock-up/eyes1.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Michael Kuznetsov</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats">42 репортажа</div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="../../assets/mock-up/eyes2.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Андрей Ховрычев</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats">42 репортажа</div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="../../assets/mock-up/eyes3.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Алена Яшина</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats">42 репортажа</div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="../../assets/mock-up/eyes4.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Dmitriy Mnogolet</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats">42 репортажа</div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="../../assets/mock-up/eyes5.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Anastasia Versa</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats">42 репортажа</div>
                    <div class="eyes__stats">Рейтинг 2548</div>
                </a>
            </li>
            <li class="eyes__item">
                <a href="#"
                   class="eyes__link">
                    <img src="../../assets/mock-up/eyes6.jpg"
                         width="140"
                         height="140">
                    <div class="eyes__name">Tashe Che</div>
                    <div class="eyes__stats">29 фотоотчетов</div>
                    <div class="eyes__stats"></div>
                    <div class="eyes__stats">Рейтинг 2548</div>
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
.eyes {
    padding: 24px;
    padding-bottom: 40px;
    margin-bottom: 40px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;

    &__header {
        display: flex;
        align-items: start;
        margin-bottom: 32px;
    }

    h4 {
        margin-right: auto;
        font-size: 24px;
        line-height: 30px;
        color: white;
    }

    &__list {
        display: flex;
    }

    &__item {
        width: 140px;
        margin-right: 72px;
        flex-shrink: 0;

        &:last-child {
            margin-right: 0;
        }
    }

    &__link {
        display: flex;
        flex-direction: column;
        color: white;
    }

    & img {
        margin-bottom: 8px;
    }

    &__name {
        width: 170px;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }

    &__stats {
        margin-bottom: 4px;
        font-size: 14px;
        line-height: 18px;
        opacity: 0.6;
    }
}
</style>