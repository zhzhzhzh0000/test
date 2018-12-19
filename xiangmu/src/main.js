import Vue from "vue";

import app from "./App.vue";

import VueRouter from "vue-router";
import Vuex from 'vuex';

import router from "./router.js";
// import vuex from './vuex.js';

import MintUI from "mint-ui";
import 'mint-ui/lib/style.css';
import "./lib/dist/css/mui.css";
import "./lib/dist/css/icons-extra.css";

import moment from 'moment';

import VuePreview from "vue-preview"

import Resource from "vue-resource";

Vue.filter("datefmt",function (param,parm="YYYY-MM-DD HH:mm:ss") { 
    return moment(param).format(parm);
 });

// Vue.component(Header.name,Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

Vue.use(MintUI);
Vue.use(Resource);
Vue.use(VueRouter);
Vue.use(VuePreview);

import store from './vuex.js';

var vm = new Vue({
    el:"#app",
    data:{

    },
    render:function(e){return e(app)},
    router,
    store
})



