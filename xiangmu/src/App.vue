<template>
    <div class="app-container">
        <mt-header fixed :title="title">
			<a slot="left" v-show="flag" @click="backed">
				<mt-button icon="back">返回</mt-button>
			</a>
		</mt-header>

		<transition>
			<router-view></router-view>
		</transition>

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/menber">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{ $store.getters.addCar}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
    
</template>

<script>

export default {
	data(){
		return {
			flag:false,
			title:"首页"
		}
	},
	created(){
		if(location.hash != "#/home"){
			this.flag = true;
		}
	},
	mounted(){
		// 
		console.log(this)
	},
	watch:{
		'$route.path':function(ne,old){
			ne == "/home" ? this.flag = false : this.flag =true;
			var alist = [{"/home":"首页"},{"/menber":"会员"},{"/shopcar":"购物车"},{"/search":"搜索"}];
			alist.forEach(item => {
				if(item[ne]) this.title = item[ne];
			})
			
		}
	},
	methods:{
		backed(){
			this.$router.back(-1);
		},
		test(){
			
		}
	}
}
</script>


<style lang="less" scoped>
.app-container{
	margin-top: 40px;
	margin-bottom: 50px;
	overflow: hidden;
	
}

.is-fixed{
	z-index: 999 !important;

}

.v-enter{
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,.v-leave-active{
	transition:  all 0.4s ease;

}

.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
