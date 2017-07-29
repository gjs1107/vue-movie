import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../pages/Home/Home')), 'Home')
const Movie = r => require.ensure([], () => r(require('../pages/Movie/Movie')), 'Movie')
const Show = r => require.ensure([], () => r(require('../pages/Show/Show')), 'Show')
const Game = r => require.ensure([], () => r(require('../pages/Game/Game')), 'Game')
const MovieListWrap = r => require.ensure([], () => r(require('components/MovieListWrap')), 'MovieListWrap')
const Cinema = r => require.ensure([], () => r(require('../pages/Cinema/Cinema')), 'Cinema')
const Discover = r => require.ensure([], () => r(require('../pages/Discover/Discover')), 'Discover')
const User = r => require.ensure([], () => r(require('../pages/User/User')), 'User')
const CinemaDetail = r => require.ensure([], () => r(require('../pages/Cinema/children/CinemaDetail')), 'CinemaDetail')
const MovieScreen = r => require.ensure([], () => r(require('../pages/Cinema/children/MovieScreen/MovieScreen')), 'MovieScreen')
const MovieScreenDetail = r => require.ensure([], () => r(require('../pages/Cinema/children/MovieScreen/MovieScreenDetail')), 'MovieScreenDetail')
const MovieSeats = r => require.ensure([], () => r(require('../pages/Cinema/children/MovieSeats/MovieSeats')), 'MovieSeats')
const Order = r => require.ensure([], () => r(require('../pages/User/children/Order/Order')), 'Order')
const OrderList = r => require.ensure([], () => r(require('../pages/User/children/Order/OrderList')), 'OrderList')
const OrderDetail = r => require.ensure([], () => r(require('../pages/User/children/Order/OrderDetail')), 'OrderDetail')
const News = r => require.ensure([], () => r(require('../pages/User/children/News/News')), 'News')
const search = r => require.ensure([], () => r(require('components/search')), 'search')
const city = r => require.ensure([], () => r(require('components/city')), 'city')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Home',
      component: Home,
      children: [
        { // 当路径为空时，重定向到/movie，实现默认显示功能
          path: '',
          redirect: '/movie'
        },
        {
          path: '/movie',
          // name: 'Movie',
          component: Movie,
          children: [
            {
              path: '',
              redirect: 'list'
            },
            {
              path: 'list',
              // name: 'MovieListWrap',
              component: MovieListWrap
            }
          ]
        },
        {
          path: '/show',
          // name: 'Show',
          component: Show
        },
        {
          path: '/game',
          // name: 'Game',
          component: Game
        },
        {
          path: '/discover',
          // name: 'discover',
          component: Discover
        },
        {
          path: '/user',
          // name: 'user',
          component: User
        }
      ]
    },
    {
      path: '/cinema', // 影院
      // name: 'cinema',
      component: Cinema
    },
    {
      path: '/cinema/detail', // 影院详情
      // name: 'CinemaDetail',
      component: CinemaDetail,
      children: [
        {
          path: '',
          redirect: 'moviescreen/detail'
        },
        {
          path: 'moviescreen',
          // name: 'moviescreen',
          component: MovieScreen,
          children: [
            {
              path: 'detail',
              // name: 'moviescreendetail',
              component: MovieScreenDetail
            }
          ]
        }
      ]
    },
    {
      path: '/cinema/movieseats',
      // name: MovieSeats,
      component: MovieSeats
    },
    {
      path: '/user/order', // 用户-订单
      // name: 'Order',
      component: Order,
      children: [
        {
          path: 'list',
          // name: 'OrderList',
          component: OrderList
        }
      ]
    },
    {
      path: '/user/order/detail', // 用户-订单-详情
      // name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/user/news', // 用户-消息
      // name: 'News',
      component: News
    },
    {
      path: '/search', // 搜索
      component: search
    },
    {
      path: '/city', // 城市定位
      component: city
    }
  ]
})
