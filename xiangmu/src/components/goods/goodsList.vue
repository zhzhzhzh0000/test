<template>
    <div class="good-list">
        <div class="goods-item" v-for="item in list" :key="item.content" @click="jumpRoute(item.id)"> 
            <img :src="item.img_url" />
            <h4 class="goods-info">
                {{item.content}}
            </h4>
            <div class="goods-bot">
                <p>
                    <span class="now">¥{{item.price}}</span> 
                    <span class="old">¥{{item.old_price}}</span>
                 </p> 
                <p>
                    <span>热卖中</span>
                    <span>剩余{{item.num}}件</span>
                </p>
            </div>
        </div>

        <mt-button size="large" type="danger" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            num:6,
            list:[
                {
                    img_url:"http://gw.alicdn.com/bao/uploaded/i1/757287527/TB2v1JObdrJ8KJjSspaXXXuKpXa_!!757287527.jpg",
                    content:"Philips/飞利浦X598安卓智能手机 4+64G全网通电信4G智能机长待机",
                    price:2200,
                    old_price:1788,
                    num:1220,
                    id:1
                },
                {
                    img_url:"http://img.alicdn.com/bao/uploaded/i5/TB1OCArhZfpK1RjSZFORAi6nFXa_025954.jpg",
                    content:"7nm旗舰芯片 超广角三摄 7nm旗舰芯片 超广角三摄",
                    price:2000,
                    old_price:1888,
                    num:1223,
                    id:2
                },
                {
                    img_url:"http://gw.alicdn.com/bao/uploaded/i4/777828529/TB2oLnzkQSWBuNjSszdXXbeSpXa_!!777828529.jpg",
                    content:"现货Samsung/三星 GALAXY S9+ s9plus港版港行全网通4G手机",
                    price:2300,
                    old_price:1988,
                    num:1222,
                    id:3
                },
                {
                    img_url:"http://gw.alicdn.com/bao/uploaded/i2/3299996388/TB1izsOqMoQMeJjy0FpXXcTxpXa_!!0-item_pic.jpg",
                    content:"苹果鼠标 Magic Mouse2 新款超薄无线蓝牙鼠标MLA02CH/A",
                    price:500,
                    old_price:488,
                    num:188,
                    id:4
                },
                {
                    img_url:"http://gw.alicdn.com/bao/uploaded/i4/TB1eZZfJFXXXXXaXXXXXXXXXXXX_!!0-item_pic.jpg",
                    content:"尼康/Nikon AF-S 200-500mm f/5.6E ED VR镜头 顺丰包邮",
                    price:6700,
                    old_price:5788,
                    num:889,
                    id:5
                }
            ]
        }
    },
    methods:{
        getMore(){
            var list1 = {
                    img_url:"http://gw.alicdn.com/bao/uploaded/i1/12502286/TB2j4ZkXC_I8KJjy0FoXXaFnVXa_!!12502286.png",
                    content:"Nikon/尼康 COOLPIX A900便携数码相机35倍光学变焦  4K 无线传输"+Math.random().toFixed(2),
                    price:1700,
                    old_price:1688,
                    num:889,
                    id:this.num++
                };
            this.list.push(list1);
        },
        jumpRoute(id){
            this.$router.push({name:"goodsinfo",params:{id}})
        }
    }
}
</script>
<style lang="less" scoped>
.good-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px;
    .goods-item{
        border: 1px solid #000;
        width: 49%;
        box-shadow: 0 0 10px #ccc;
        margin: 3px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            width: 100%;
        }
        .goods-info{
            font-size: 14px
        }
        .goods-bot{
            background: #eee;
            margin: 2px;
            .now{
                color: red;
                font-weight: bold;
                font-size: 14px;
            }
            .old{
                text-decoration: line-through;
                font-size: 12px;
            }
            p{
                &:nth-child(2){
                    display: flex;justify-content: space-between;
                    font-size: 12px;
                    margin: 0;
                }
            }
            
        }
    }
}
</style>

