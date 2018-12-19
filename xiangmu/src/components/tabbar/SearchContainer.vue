<template>
    <div class="search-container">
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>   
    </div>
</template>

<script>

export default {
    data(){
        return {
            value:"",
            result:[]
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="less">
.search-container{
    .mui-search{
        margin-top: 5px;
    }
    .mint-searchbar-core{
        margin-bottom: 0;
        height: 28px;
    }
    .mint-searchbar-inner .mintui-search{
        font-size: 20px;
    }
    input[type='search']{
        background: #fff;
    }
    
}
</style>
