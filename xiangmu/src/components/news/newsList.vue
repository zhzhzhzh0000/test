<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item) in newsList" :key="item.url">
                <router-link :to="'/home/newslist/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img">
                    <div class="mui-media-body">
                        <h3>{{item.title}}</h3>
                        <p class='mui-ellipsis'>
                            <span>{{item.content}}</span>
                            <!-- <span>点击：0次</span> -->
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>


export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.jsonp("https://live.ent.163.com/api/recommend/163/home/p1").then(function(data){
                var gpm = data.body.mint_live;
                var list = [];
                gpm.forEach(e => {
                    list.push({
                        content:e.ltitle,
                        img:e.image_url,
                        title:e.stitle,
                        id:e.live_state,
                        url:e.url
                    })
                });
                this.newsList = list;
            })
        }
    }
}
</script>

<style lang="less" scoped>
.mui-table-view{
    li{
        h3{
            font-size: 14px;
        }
        
        .mui-ellipsis{
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #226aff;
        }
    }
}
</style>


