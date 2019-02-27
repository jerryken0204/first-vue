//entrance of the project 
import Vue from 'vue';
import app from  './App.vue';
import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css';



Vue.component(Header.name, Header);
var vue = new Vue({
  el: "#app",
  render: c=>c(app)
})