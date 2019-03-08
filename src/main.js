//entrance of the project 

// import vue
import Vue from 'vue';

//import vue-router and register for global
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//import vue-resorce and register for global
import VueResource from 'vue-resource';
Vue.use(VueResource);

//import App.vue and render in vue object 
import app from  './App.vue';
//import router.js file and attached with vue object to observe all the changes for routers 
import router from './router.js';

//import mint ui and register them
import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

//import mui 
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//set root url path 
Vue.http.options.root = 'http://vue.studyit.io';
var vue = new Vue({
  el: "#app",
  render: c=>c(app),
  router
})