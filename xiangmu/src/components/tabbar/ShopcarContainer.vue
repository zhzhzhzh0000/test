<template>
    <div class="shopcar-container">
        <div class="mui-card" v-for="(item,i) in list" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="value[item.id]" @change="selectchange(item.id,value[item.id])"></mt-switch>
                    <img :src="item.img" />
                    <div class="info">
                        <p class="title">{{item.info}}</p>
                        <p>
                            <span class="price">¥{{item.now_price}}</span>
                            <numbox :init="count[item.id]" :id="item.id"></numbox>
                            <a href="javascript:;" @click="remove(item.id,i)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已选商品<span>{{$store.getters.jisuan.count}}</span>件 ，总价 <span>¥{{$store.getters.jisuan.amod}}</span></p>
                    </div>
                    <div class="right"><mt-button size="normal" type="danger">去结算</mt-button></div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import numbox from '../subcomponents/shopnum_box.vue';
export default {
    data(){
        return {
            value:this.$store.getters.getSelect,
            list:[],
            count:{}
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            var info = [
                {id:1,now_price:1788,info:"Philips/飞利浦X598安卓智能手机 4+64G全网通电信4G智能机长待机",img:"http://gw.alicdn.com/bao/uploaded/i1/757287527/TB2v1JObdrJ8KJjSspaXXXuKpXa_!!757287527.jpg"},
                {id:2,now_price:1888,info:"7nm旗舰芯片 超广角三摄 7nm旗舰芯片 超广角三摄",img:"http://img.alicdn.com/bao/uploaded/i5/TB1OCArhZfpK1RjSZFORAi6nFXa_025954.jpg"},
                {id:3,now_price:1988,info:"现货Samsung/三星 GALAXY S9+ s9plus港版港行全网通4G手机",img:"http://gw.alicdn.com/bao/uploaded/i4/777828529/TB2oLnzkQSWBuNjSszdXXbeSpXa_!!777828529.jpg"},
                {id:4,now_price:488,info:"苹果鼠标 Magic Mouse2 新款超薄无线蓝牙鼠标MLA02CH/A",img:"http://gw.alicdn.com/bao/uploaded/i2/3299996388/TB1izsOqMoQMeJjy0FpXXcTxpXa_!!0-item_pic.jpg"},
                {id:5,now_price:5788,info:"尼康/Nikon AF-S 200-500mm f/5.6E ED VR镜头 顺丰包邮",img:'http://gw.alicdn.com/bao/uploaded/i4/TB1eZZfJFXXXXXaXXXXXXXXXXXX_!!0-item_pic.jpg'}
            ],
            local = JSON.parse(localStorage.getItem("cars") || "[]"),o =[],c={};
            local.forEach((item,i) => {
                info.forEach(el =>{
                    if(item.id == el.id){
                        o.push(el);
                        c[item.id] = item.cuont
                    }
                })
            });
            this.count = c;
            this.list = o;
        },
        remove(id,i){
            this.list.splice(i,1);
            this.$store.commit("removecar",id);
        },
        selectchange(id,val){
            console.log(id,val)
            this.$store.commit("updateSlc",{id:id,select:val});
        }
    },
    components:{
        numbox
    }
}
</script>

<style lang="less" scoped>
.shopcar-container{
    overflow: hidden;
    background: #eee;
    .mui-card-content-inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
            width: 60px;
            height: 60px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title{
                color: #000;
                font-size: 13px;
                font-weight: bold;
            }
            .price{
                color: red;
                font-size: 16px;
                font-weight: bold;
            }
            p{
               &:last-child{
                   margin-bottom: 0
               } 
            }
            
            
        }
        .left{
            span{
                color: red;
                font-size: 16px;
            }
        }
        
    }
}
</style>
