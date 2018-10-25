<template>
    <div>
        <input type="text"
               placeholder="Имя и фамилия">
        <input type="email"
               placeholder="Эл. почта">
        <div class="pass-wrapper">
            <input :type="isPassMaskShown ? 'password' : 'text'"
                   placeholder="Пароль">
            <i class="icon"
               :class="isPassMaskShown ? 'icon-eye' : 'icon-eye-off'"
               @click="isPassMaskShown = !isPassMaskShown"></i>
        </div>
        <button class="btn">Зарегистрироваться</button>
        <span>Регистрируясь, вы принимаете условия </span><a href="#">пользовательского соглашения</a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isPassMaskShown: true,
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