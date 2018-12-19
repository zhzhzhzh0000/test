<template>
    <div class="photo-container">
        <div class="photo-header">
            详情页
        </div>
        <hr>
        <div class="photoview">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
        <p>
            大会官方克制，第一天的大会上，公开发言的讲者都没有直接提到贺建奎的事情，大会两位主席徐立之和David Baltimore、主办者之一美国国家医学院院长曹文凯（Victor J Dzau）接受记者访问时，都婉拒评论基因编辑婴儿的事情，说期待贺在会上发布详情。立场比较强硬的张锋和伯克莱的Jennifer Doudna会前已发表声明，呼吁立刻停止类似的基因編輯。据接近大会组织委员会的消息，会方对贺的基因工程一无所知，到开会前夕才得到消息，大为震惊。

大会批评贺的最强音来自中国专家。{{id}}
        </p>


        <mt-box :id="id"></mt-box>
    </div>
</template>
<script>

import menber from '../subcomponents/menber.vue';

export default {
    data(){
        return {
            id:this.$route.params.id,
            slide1:[]
        }
    },
    created(){
        // console.log(this.$route)
        this.getImg();
    },
    methods:{
        getImg(){
            this.$http.jsonp("https://live.ent.163.com/api/recommend/163/home/p1").then(function(data){
                var gpm = data.body.mint_live;
                var list1 = [];
                gpm.forEach(e => {
                    list1.push({
                        src:e.image_url,
                        msrc:e.image_url,
                        w:600,
                        h:400,
                        alt:"pic",
                        title: 'Image Caption 1'
                    })
                });
                this.slide1 = list1;
                console.log(list1)
            })
        },
        handleClose () {
            
        }
    },
    components:{
        "mt-box":menber
    }
}
</script>

<style lang="less">
.photo-container{
    padding: 3px;
    .photo-header{
        text-align: center;
        color: rgb(28, 90, 59);
        margin: 6px 0
    }
    .photoview{
        figure{
           display: inline-block;
            margin: 5px;
        }
        
        img{
            height: 50px;
            width: 50px;
        }
    }
    

}
</style>

