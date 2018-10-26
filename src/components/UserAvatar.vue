<template>
    <button class="side-bar__link side-bar__link--profile"
            @click="toggleUserMenu">
        <img width="64"
             height="64"
             :src="userProfile && userProfile.avatar ? userProfile.avatar : require('@/assets/profile.png')">
    </button>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: ['userMenuToggler'],
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
        toggleUserMenu() {
            if (this.userMenuToggler) this.$store.commit('TOGGLE_USER_MENU')
        },
    }
}
</script>