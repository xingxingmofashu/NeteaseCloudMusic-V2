import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    path: '/',
    name: 'index',
    component: () => import( /* webpackChunkName: "about" */ '../views/Index.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue'),
  }, {
    path: '/search-song',
    name: 'search-song',
    component: () => import( /* webpackChunkName: "about" */ '../views/SearchSong.vue'),
  }, {
    path: '/playlist-details',
    name: 'playlist-details',
    component: () => import( /* webpackChunkName: "about" */ '../views/PlayListDetails.vue'),
  }, {
    path: '/new-mv',
    name: 'new-mv',
    component: () => import( /* webpackChunkName: "about" */ '../views/NewMV.vue'),
  }, {
    path: '/play-mv',
    name: 'play-mv',
    component: () => import( /* webpackChunkName: "about" */ '../views/PlayMV.vue'),
  }, {
    path: '/hot-dj',
    name: 'hot-dj',
    component: () => import( /* webpackChunkName: "about" */ '../views/HotDJ.vue'),
  }, {
    path: '/album-newest',
    name: 'album-newest',
    component: () => import( /* webpackChunkName: "about" */ '../views/AlbumNewest.vue'),
  }, {
    path: '/top-list',
    name: 'top-list',
    component: () => import( /* webpackChunkName: "about" */ '../views/TopList.vue'),
  }, {
    path: '/record-recent',
    name: 'record-recent',
    component: () => import( /* webpackChunkName: "about" */ '../views/RecordRecent.vue'),
  }, {
    path: '/album',
    name: 'album',
    component: () => import( /* webpackChunkName: "about" */ '../views/Album.vue'),
  }, {
    path: '/singers',
    name: 'singers',
    component: () => import( /* webpackChunkName: "about" */ '../views/Singers.vue'),
  }, {
    path: '/artist-album',
    name: 'artist-album',
    component: () => import( /* webpackChunkName: "about" */ '../views/ArtistAlbum.vue'),
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router