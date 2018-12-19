<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a @click="getPhotoList" v-for="(item,index) in liebiaoList" :key="item" :class="['mui-control-item', index == 0 ?'mui-active' :'']" href="">
						{{item}}
					</a>
                </div>
            </div>
        </div>

        <ul>
            <li v-for="item in getList" :key="item.img">
                <router-link :to="'/home/share/'+id">
                    <img v-lazy="item.img">
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>

import mui from '../../lib/dist/js/mui.min.js';
import {Toast} from 'mint-ui';

export default {
    data(){
        return {
            id:Math.floor(Math.random()*10+10),
            getList:[],
            liebiaoList:["推荐","美女","帅哥","女神","模特","淑女","大叔","成熟"]
        }
    },
    created(){
        this.getPhotoList();
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getPhotoList(){
            this.$http.get("http://ossweb-img.qq.com/images/clientpop/idata_ad/idata_ad_40.js").then(function(a){
                
                if(!a.body){
                    return Toast("获取数据失败");
                }
                var gAds40 = JSON.parse(a.body.substr(11));
                
                var list =[];
                for(var i in gAds40.force){
                    list.push({
                        img:gAds40.force[i].imgUrl,
                        url:gAds40.force[i].adUrl,
                        text:gAds40.force[i].Fname,
                        time:gAds40.force[i].endTime
                    })
                }
                this.getList = list;
            })
        }
    }
}
</script>

<style lang="less" scoped>
ul{
    padding: 0 10px;
    margin: 0;
    li{
        margin-bottom: 10px;
        list-style: none;
        box-shadow: 0 0 2px 2px #999;
        vertical-align: middle;
        background: #999;
        img{
            width: 100%;
            height: 200px;
        }
        img[lazy=loading] {
            width: 40px;
            height: 200px;
            margin: auto;
        }
    }
}
</style>

