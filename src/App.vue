<template>
  <div id="app">
		<keep-alive>
    	<router-view name="home"></router-view>
		</keep-alive>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
  </div>
</template>

<script >
export default {
	name: 'app',
	data(){
		return{
			
		}
	},
	methods:{

	}
}
</script>

<style lang="less" rel="stylesheet/less">
	@import "common/css/var";
	
	.appContent{
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		background-color: @lightTextColor;
	}
</style>