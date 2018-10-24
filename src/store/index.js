import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isMobileMenuShown: false,
    isUserMenuShown: false,
}

const actions = {}

const mutations = {
    TOGGLE_MOBILE_MENU(state) {
        state.isMobileMenuShown = !state.isMobileMenuShown
        // после появления меню, урезаем высоту основного контента, чтобы скроллилась только менюшка
        setTimeout(() => {
            document.body.classList.toggle('menu-open')
        }, state.isMobileMenuShown ? 300 : 0)
    },
    CLOSE_MOBILE_MENU(state) {
        state.isMobileMenuShown = false
        document.body.classList.remove('menu-open')
    },
    TOGGLE_USER_MENU(state) {
        state.isUserMenuShown = !state.isUserMenuShown
    },
    CLOSE_USER_MENU(state) {
        state.isUserMenuShown = false
    },
}

const getters = {}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
