// import api from './api'
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
        document.body.classList.toggle('menu-open')
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
