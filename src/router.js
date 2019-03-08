import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import CartContainer from './components/tabbar/CartContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import Newslist from './components/news/Newslist.vue';
import NewsInfo from './components/news/NewsInfo.vue';
import PhotoList from './components/photos/photoList.vue';


var router = new VueRouter({
  routes: [
      {path:'/', redirect :'/home'},
      {path: '/home', component: HomeContainer },
      {path: '/member', component: MemberContainer},
      {path: '/cart', component: CartContainer},
      {path: '/search', component: SearchContainer},
      { path:'/home/newslist',component: Newslist},
      {path:'/home/newslist/:id',component:NewsInfo},
      {path:'/home/photolist',component: PhotoList }
  ],
  linkActiveClass: 'mui-active'
})


export default router