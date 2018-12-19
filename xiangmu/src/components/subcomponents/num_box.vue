<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="getnum" ref="value" />
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
            this.$emit("funcnub",this.$refs.value.value)
        }
    }
}
</script>
<style lang="less" scoped>

</style>


