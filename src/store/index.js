import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isMobileMenuShown: false,
    isUserMenuShown: false,
    isMobileAuthShown: false,
    userProfile: null,
}

const actions = {}

const mutations = {
    TOGGLE_MOBILE_MENU(state) {
        state.isMobileMenuShown = !state.isMobileMenuShown
        state.isMobileAuthShown = false
        // после появления меню, урезаем высоту основного контента, чтобы скроллилась только менюшка
        setTimeout(() => {
            document.body.classList.toggle('menu-open')
        }, state.isMobileMenuShown ? 300 : 0)
    },
    CLOSE_MOBILE_MENU(state) {
        state.isMobileMenuShown = false
        state.isMobileAuthShown = false
        document.body.classList.remove('menu-open')
    },
    TOGGLE_USER_MENU(state) {
        state.isUserMenuShown = !state.isUserMenuShown
    },
    CLOSE_USER_MENU(state) {
        state.isUserMenuShown = false
    },
    SHOW_MOBILE_AUTH(state) {
        state.isMobileAuthShown = true
    },
    CLOSE_MOBILE_AUTH(state) {
        state.isMobileAuthShown = false
    },
    SIGN_IN(state, profile) {
        state.userProfile = profile
    },
    SIGN_OUT(state) {
        state.userProfile = null
    }
}

const getters = {}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
