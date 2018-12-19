<template>
    <div class="mt-container">
        <h3>发表评论</h3>

        <hr>

        <textarea v-model="text" placeholder="输入想要吐槽的内容...(最多120字)" maxlength="120"></textarea>

        <mt-button size="large" type="primary" @click="comment">发表评论</mt-button>

        <div class="mt-pl">
            <div class="mt-main" v-for="(item,index) in list" :key="item.content">
                <div class="mt-top" >
                    {{index+1}}楼 <span>{{item.user}} ：</span>&nbsp;&nbsp;<span>发表时间 {{item.time | datefmt("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
                <div class="mt-bot">
                    {{item.content }}{{id}}
                </div>
            </div>
        </div>

        <mt-button size="large" type="danger" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>

import { Toast} from "mint-ui";
export default {
    data(){
        return {
            list:[ ],
            text:""
        }
    },
    created(){
        this.getComem()
    },
    props:["id"],
    methods:{
        getComem(){//模拟假数据
            var pllist =[
                {user:"匿名用户",time: new Date(),content:"锄禾日当午"},
                {user:"匿名用户",time:new Date(),content:"哟西。。"},
                {user:"zh",time:new Date(),content:"汗滴禾下土，哈。。。"},
                {user:"匿名用户",time:new Date(),content:"哈萨给，"},
                {user:"匿名用户",time:new Date(),content:"锄一点寒芒先到。。"}
            ]
            this.list = pllist;
        },
        getMore(){//模拟加载更多假数据
            var nList = [
                {user:"zz",time: new Date(),content:"恕瑞玛"+Math.random()},
                {user:"hanb",time:new Date(),content:"德玛西亚"+Math.random()},
                {user:"zh",time:new Date(),content:"一个能打的都没有"+Math.random()},
                {user:"ww",time:new Date(),content:"随后枪出如龙"+Math.random()}
            ]
            this.list = this.list.concat(nList);
        },
        comment(){//发表评论
            if(this.text.trim().length == 0){
                return Toast("评论不能为空！")
            }
            var aList = {user:"匿名用户",time:new Date(),content:this.text.trim()};
            this.list.unshift(aList);
        }
    }
}
</script>

<style lang="less" scoped>
.mt-container{
    margin: 0 3px;
    h3{
        font-size: 16px;
    }
    textarea{
        height: 85px;
        margin: 0;
        font-size: 12px;
    }
    .mt-pl{
        margin-top: 5px;
        height: 44px;
        height: 100%;
        .mt-top{
            background-color: rgb(184, 169, 169);
            
            font-size: 14px;
        }
        .mt-bot{
            text-indent: 1em;
        }
    }

}
</style>


