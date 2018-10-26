<template>
    <div>
        <input type="email"
               placeholder="Эл. почта">
        <input type="password"
               placeholder="Пароль">
        <button class="btn"
                @click="signIn">Войти</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            testProfile: {
                name: 'Cаша Гео',
                balance: 1290,
                avatar: 'https://files2.geometria.ru/pics/original/037/270/37270907.jpg'
            }
        }
    },
    methods: {
        signIn() {
            this.$store.commit('SIGN_IN', this.testProfile)
            if (this.$mq !== 'lg') this.$store.commit('CLOSE_MOBILE_AUTH', this.testProfile)
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

button {
    width: 100%;
}
</style>