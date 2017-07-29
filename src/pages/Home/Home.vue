<template>
	<div class="home">
		<!-- <v-Header></v-Header> -->
		<div class="item-wrap fixed-header">
			<router-link to="/movie" class="item">
				<i class="iconfont icon-dy-light"></i>
				电影票
			</router-link>
			<router-link to="/show" class="item">
				<i class="iconfont icon-yingyuan"></i>
				演出票
			</router-link>
			<router-link to="/game" class="item">
				<i class="iconfont icon-saishi"></i>
				赛事票
			</router-link>
		</div>
		<div class="page-container">
			<router-view></router-view>
		</div>
		<div class="fixed-footer">
			<div class="item-wrap">
				<router-link to="/movie" class="item">
					<i class="iconfont icon-shouye"></i>
					首页
				</router-link>
				<router-link to="/cinema" class="item">
					<i class="iconfont icon-yingyuan"></i>
					影院
				</router-link>
				<router-link to="/discover" class="item">
					<i class="iconfont icon-faxian"></i>
					发现
				</router-link>
				<router-link to="/user" class="item">
					<i class="iconfont icon-wode"></i>
					我的
				</router-link>
			</div>	
		</div>
	</div>
</template>

<script type="text/javascript">
// import vHeader from 'components/Header'
// import vFooter from 'components/Footer'

export default{
  components: {
    // vHeader
    // vFooter
  }
}
</script>

<style scoped src="./styles.scss" lang="scss" scoped>
	
</style>
