import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    login: '登录',
    arr: ['首页', '收藏', '历史记录', '设置']
}



export
default new Vuex.Store({
    state
})