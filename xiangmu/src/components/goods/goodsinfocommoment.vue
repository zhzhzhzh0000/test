<template>
    <div>
        <mtbox :id="id"></mtbox>
    </div>
</template>

<script>

import mtbox from '../subcomponents/menber.vue';
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    components:{
        mtbox
    }
}
</script>

<style lang="less" scoped>

</style>

