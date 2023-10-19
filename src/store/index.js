import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import defaultState from "./default";
Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  state: defaultState,
  getters: {

  },
  mutations: {
    addSong(state, adds) {
      state.audioInfo.push({
        name: adds.name,
        artist: adds.artist,
        url: adds.url,
        cover: adds.cover,
        lrc: adds.lrc,
      })
    },
    
    addCreatePlayList(state, data) {
      state.lefMenu.filter(x => x.key == 'create-playlist')[0].menus.push({
        name: data.name,
        key: data.key,
        url: data.url,
        icon: data.icon,
        alias: data.name.substring(0, 4) + '...'
      })
    },
    addFavoritesPlayList(state, data) {
      state.lefMenu.filter(x => x.key == 'favorites-playlist')[0].menus.push({
        name: data.name,
        key: data.key,
        url: data.url,
        icon: data.icon,
        alias: data.name.substring(0, 4) + '...'
      })
    },
  },
  actions: {

  },
  modules: {}
})