<template>
    <div>
        <input type="text"
               placeholder="Имя и фамилия">
        <input type="email"
               placeholder="Эл. почта">
        <div class="pass-wrapper">
            <input type="password"
                   placeholder="Пароль">
            <i class="icon icon-eye"></i>
        </div>
        <button class="btn">Зарегистрироваться</button>
        <span>Регистрируясь, вы принимаете условия </span><a href="#">пользовательского соглашения</a>
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
    margin-bottom: 12px;
}

span {
    font-size: 14px;
    line-height: 22px;
    opacity: 0.5
}

a {
    font-size: 14px;
    line-height: 22px;
    opacity: 1;

    &:hover {
        text-decoration: underline;
    }
}
</style>