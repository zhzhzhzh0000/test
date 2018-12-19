<template>
    <div class="goodsinfo-container">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"> 
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>
        
        <!-- 轮播 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunboList="lunboList" :isfull="false"></swiper>
                </div>
            </div>
        </div>
    <!--  -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsList.info}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        市场价：<del>¥{{goodsList.old_price}}</del> 销售价：<span class="now_price">¥{{goodsList.now_price}}</span>
                    </p>
                    <p>购买数量：<numbox @funcnub="num_box"></numbox></p>
                    <p>
                        <mt-button size="small" type="primary" @click="purchase">立即购买</mt-button>
                        <mt-button size="small" type="danger" @click="joinCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsList.huohao}}</p>
                    <p>库存情况：{{goodsList.huocun}}件</p>
                    <p>上架时间：{{goodsList.time | datefmt("YYYY-MM-DD HH-mm:ss")}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button size="large" type="primary" plain @click="picIntroduction(id)">图文介绍</mt-button>
                <mt-button size="large" type="danger" plain @click="CommodityReview(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue';
import numbox from '../subcomponents/num_box.vue';
export default {
    data(){
        return {
            id:this.$route.params.id,//用id模拟获取数据
            lunboList:[
                {img:"http://gw.alicdn.com/bao/uploaded/i1/757287527/TB2v1JObdrJ8KJjSspaXXXuKpXa_!!757287527.jpg"},
                {img:"http://img.alicdn.com/bao/uploaded/i5/TB1OCArhZfpK1RjSZFORAi6nFXa_025954.jpg"},
                {img:"http://gw.alicdn.com/bao/uploaded/i2/3299996388/TB1izsOqMoQMeJjy0FpXXcTxpXa_!!0-item_pic.jpg"}
            ],
            time:new Date(),
            ballflag:false,
            selectCuont:1,
            goodsList:{}
        }
    },
    created(){
        
        this.getGoodsInfo()
    },
    methods:{
        purchase(){

        },
        joinCar(){
            this.ballflag = !this.ballflag;
            var goodsinfo = {id:this.id,cuont:this.selectCuont,price:this.goodsList.now_price,select:true};
            this.$store.commit("addCar",goodsinfo);

            console.log(this.selectCuont);
        },
        picIntroduction(id){
            this.$router.push({name:"goodsIntro",params:{id}})
        },
        CommodityReview(id){
            console.log(id)
            this.$router.push({name:"goodsinfoComment",params:{id}})
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            var ballposition = this.$refs.ball.getBoundingClientRect();
            var badgeposition = document.getElementById("badge").getBoundingClientRect();
            var x = badgeposition.left - ballposition.left;
            var y = badgeposition.top - ballposition.top;
            
            el.style.transform = `translate(${x}px,${y}px)`;
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
            done()
        },
        afterEnter(el){
            this.ballflag = !this.ballflag;
        },
        num_box(count){
            this.selectCuont = parseInt(count);
        },
        getGoodsInfo(){
            var info = [
                {id:1,now_price:1788,old_price:2200,huohao:'SD44443A4RFR',huocun:1220,shelfTime:new Date(),info:"Philips/飞利浦X598安卓智能手机 4+64G全网通电信4G智能机长待机"},
                {id:2,now_price:1888,old_price:2000,huohao:'SD44443A4RFR',huocun:1223,shelfTime:new Date(),info:"7nm旗舰芯片 超广角三摄 7nm旗舰芯片 超广角三摄"},
                {id:3,now_price:1988,old_price:2300,huohao:'SD44443A4RFR',huocun:1222,shelfTime:new Date(),info:"现货Samsung/三星 GALAXY S9+ s9plus港版港行全网通4G手机"},
                {id:4,now_price:488,old_price:500,huohao:'SD44443A4RFR',huocun:188,shelfTime:new Date(),info:"苹果鼠标 Magic Mouse2 新款超薄无线蓝牙鼠标MLA02CH/A"},
                {id:5,now_price:5788,old_price:6700,huohao:'SD44443A4RFR',huocun:899,shelfTime:new Date(),info:"尼康/Nikon AF-S 200-500mm f/5.6E ED VR镜头 顺丰包邮"}
            ],sinfo = {};
            info.some(item => {
                if(item.id == this.id){
                    sinfo = item;
                    return true;
                }
            })
        
            this.goodsList = sinfo;
        }

    },
    components:{
        swiper,
        numbox
    }
}
</script>

<style lang="less" scoped>
.goodsinfo-container{
    overflow: hidden;
    background: #eee;
    .now_price{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-header, .mui-card-footer{
        display: block;
        button{
            margin: 8px 0;
        }
    }

    .ball{
        width: 15px;
        height: 15px;
        z-index:999;
        background: red;
        position: absolute;
        border-radius: 50%;
        left: 148px;
        top: 411px;
        
    }
}
</style>

