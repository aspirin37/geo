// import api from './api'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isMobileMenuShown: false,
}

const actions = {}

const mutations = {
    TOGGLE_MENU(state) {
        state.isMobileMenuShown = !state.isMobileMenuShown
        document.body.classList.toggle('menu-open')
    },
}

const getters = {}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
