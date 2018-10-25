<template>
    <button class="side-bar__link side-bar__link--profile"
            @click="toggleUserMenu">
        <img width="64"
             height="64"
             src="../assets/profile.png">
    </button>
</template>
<script>
export default {
    props: ['userMenuToggler'],
    data() {
        return {

        }
    },
    methods: {
        toggleUserMenu() {
            if (this.userMenuToggler) this.$store.commit('TOGGLE_USER_MENU')
        },
    }
}
</script>