<template>
    <div>
        <input type="email"
               placeholder="Эл. почта">
        <input type="password"
               placeholder="Пароль">
        <button class="btn">Войти</button>
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

button {
    width: 100%;
}
</style>