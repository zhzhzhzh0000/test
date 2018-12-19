<template>
    <div>
        <swiper :lunboList="lunboList" :isfull="true"></swiper>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
                            <img src="/img/1.jpg" />
                            <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/share">
                            <img src="/img/2.jpg" />
                            <!-- <span class="mui-badge">5</span></span> -->
                            <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/goodslist">
                            <img src="/img/3.jpg" />
                            <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
		            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/">
                            <img src="/img/4.jpg" />
                            <div class="mui-media-body">留言反馈</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
                            <img src="/img/5.jpg" />
                            <div class="mui-media-body">视屏专区</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
                            <img src="/img/6.jpg" />
                            <div class="mui-media-body">联系我们</div>
                        </router-link>
                    </li> -->
		        </ul> 
        
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
import swiper from "../subcomponents/swiper.vue";

export default {
    data(){
        return {
            lunboList:[]
        }
    },
    created(){
        this.getLunbo()
    },
    methods:{
        getLunbo(){
            // this.$http.post("https://c.gj.qq.com/fcgi-bin/Wallpaper_Rank",{"cmd":2,"sub_cmd":1,"guid_hex":"b2bf5eee5de5b3e2185d5e87ab924b19"},{emulateJSON:true}).then(function (params) {
            //     console.log(params)
            // })

            this.$http.get("http://ossweb-img.qq.com/images/clientpop/idata_ad/idata_ad_40.js").then(function(a){
                
                if(!a.body){
                    return Toast("获取数据失败");
                }
                var gAds40 = JSON.parse(a.body.substr(11));
                
                var list =[];
                for(var i in gAds40.common){
                    list.push({
                        img:gAds40.common[i].imgUrl,
                        url:gAds40.common[i].adUrl
                    })
                }
                this.lunboList = list.slice(0,4);
                
            })
        }
    },
    components:{
        swiper
    }
}
</script>

<style lang="less" scoped>

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img{
        height: 60px;
        width: 60px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
    .mui-media-body{
        font-size: 12px;
    }
}
</style>


