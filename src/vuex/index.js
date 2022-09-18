/**
 * @file VUEX状态存储
 * @auther Summon
 * @date 2018.3.5
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
    userInfo: null,
}
const mutations = {
    UPDATE_USERINFO(state, value) {
        state.device = value
    }
}
const actions = {
    update_userinfo({ commit, dispatch }, value) {
        commit('UPDATE_USERINFO', value)
    },
}

const modules = {}
const getters = {}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules,
    plugins: [createPersistedState()],
    strict: true
})