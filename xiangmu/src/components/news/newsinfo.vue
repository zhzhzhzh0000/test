<template>
    <div>
        <div>
            <p>大会官方克制，第一天的大会上，公开发言的讲者都没有直接提到贺建奎的事情，大会两位主席徐立之和David Baltimore、主办者之一美国国家医学院院长曹文凯（Victor J Dzau）接受记者访问时，都婉拒评论基因编辑婴儿的事情，说期待贺在会上发布详情。立场比较强硬的张锋和伯克莱的Jennifer Doudna会前已发表声明，呼吁立刻停止类似的基因編輯。据接近大会组织委员会的消息，会方对贺的基因工程一无所知，到开会前夕才得到消息，大为震惊。

大会批评贺的最强音来自中国专家。中国社会科学研究院哲学研究所的高级研究员邱仁宗指出卫生部及科技部的管理条例严禁基因修饰的胚胎植入人或动物的生殖系统。而毫不含糊地指责贺教授违反了有关管理条例。他也清楚地提出有必要“构建一个伦理学框架，对具有决策作用的科学家、医师及管理者进行评估” 以及制定章程， 管理用于申请种质基因组修饰的基因编辑。

他也提出了有必要加强管控专业、机构、管控本身、法律和国际的层面。------{{$route.params.id}}
            </p>
        </div>
        
        <!-- 发表 -->
        <mt-box :id="id"></mt-box>

    </div>
</template>

<script>


import mt from '../subcomponents/menber.vue';

export default {
    data(){
        return {
            id:1
        }
    },
    created(){
        this.nubCuont()
    },
    methods:{
        nubCuont(){
            this.id = Math.floor(Math.random()*100+100);
        }
    },
    components:{
        "mt-box":mt
    }
}
</script>

<style lang="less" scoped>

</style>


