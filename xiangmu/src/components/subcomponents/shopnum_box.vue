<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='1000' style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="init" @change="getnum" ref="value" readonly />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from "../../lib/dist/js/mui.min.js"
export default {
    mounted(){
        mui(".mui-numbox").numbox()
    },
    methods:{
        getnum(){
            this.$emit("funcnub",this.$refs.value.value);
           
            this.$store.commit("updatecar",{id:this.id,count:this.$refs.value.value});
            
        }
    },
    props:["init","id"]
}
</script>
<style lang="less" scoped>

</style>


