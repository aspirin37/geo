<template>
    <div class="profile-options">
        <a class="profile-options__link">{{ userProfile.name }}</a>
        <a class="profile-options__link">Счет <span class="opacity-50 ml-2">{{ userProfile.balance.toLocaleString() }} &#8381;</span></a>
        <a class="profile-options__link">Настройки</a>
        <a class="profile-options__link"
           @click.prevent="signOut">
            <span class="opacity-50">Выйти</span>
        </a>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            'userProfile',
        ])
    },
    methods: {
        signOut() {
            this.$store.commit('SIGN_OUT')
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.profile-options {
    display: flex;
    flex-direction: column;
    margin-top: -10px;

    @media (max-width: $desktop-width) {
        width: 100%;
        margin-right: -20px;
        margin-left: 16px;
    }

    &__link {
        position: relative;
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
        text-decoration: none;
        height: 48px;
        padding-top: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        &::before {
            content: '';
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            display: block;
            width: 16px;
            height: 16px;
            background-image: url('../../../assets/icons/chevron-right.svg');
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: contain;
            opacity: 0.2;
            transition: 0.3s;
        }

        &:hover::before {


            @media (min-width: $desktop-width) {
                right: 10px;
            }
        }
    }
}
</style>