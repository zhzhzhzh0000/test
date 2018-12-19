
import VueRouter from "vue-router";

import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MenberCintainer from "./components/tabbar/MenberContainer.vue";
import Search from "./components/tabbar/SearchContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
import NewsList from './components/news/newsList.vue';
import NewsInfo from './components/news/newsinfo.vue';
import Photoinfo from './components/photo/photoinfo.vue';
import Photo from './components/photo/photo.vue';
import GoodsList from './components/goods/goodsList.vue';
import GoodsInfo from './components/goods/goodsInfo.vue';
import GoodsCommoment from './components/goods/goodsinfocommoment.vue';
import GoodsItro from './components/goods/doosinfointro.vue';

var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:HomeContainer},
        {path:"/menber",component:MenberCintainer},
        {path:"/search",component:Search},
        {path:"/shopcar",component:ShopcarContainer},
        {path:"/home/newslist",component:NewsList},
        {path:"/home/newslist/:id",component:NewsInfo},
        {path:"/home/share",component:Photoinfo},
        {path:"/home/share/:id",component:Photo},
        {path:"/home/goodslist",component:GoodsList},
        {path:"/home/goodsinfo/:id",component:GoodsInfo,name:"goodsinfo"},
        {path:"/home/commoent/:id",component:GoodsCommoment,name:"goodsinfoComment"},
        {path:"/home/introduce/:id",component:GoodsItro,name:"goodsIntro"}
    ],
    linkActiveClass:"mui-active"
})

export default router;