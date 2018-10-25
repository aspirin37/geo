<template>
    <div class="auth">
        <div class="tabs">
            <button class="tab"
                    :class="{'active': isActiveTab === 1}"
                    @click="isActiveTab = 1">Вход</button>
            <button class="tab"
                    :class="{'active': isActiveTab === 2}"
                    @click="isActiveTab = 2">Регистрация</button>
        </div>
        <sign-in v-if="isActiveTab === 1"></sign-in>
        <sign-up v-if="isActiveTab === 2"></sign-up>
        <span>Войти с помощью</span>
        <div class="buttons-row">
            <button class="btn btn-social btn-vk"></button>
            <button class="btn btn-social btn-fb"></button>
            <button class="btn btn-social btn-google"></button>
        </div>
    </div>
</template>
<script>
import signIn from '@/components/auth/SignIn'
import signUp from '@/components/auth/SignUp'
export default {
    components: {
        signIn,
        signUp
    },
    data() {
        return {
            isActiveTab: 1,
        }
    },

}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.auth {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 240px;
    margin-right: 48px;
}

.tabs {
    margin-bottom: 24px;
}

.tab {
    margin-right: 24px;
}

.btn {
    flex-grow: 1;
    margin-right: 8px;
    text-align: center;

    &:last-child {
        margin-right: 0;
    }
}

span {
    font-size: 16px;
    line-height: 24px;
    opacity: 0.5;
    margin: 12px 0;
}
</style>