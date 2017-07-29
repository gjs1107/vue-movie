<template>
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
</template>

<script type="text/javascript">
	export default{}
</script>

<style scoped lang="scss">
@import "static/styles/scss/variable.scss";
@import "static/styles/scss//mixins.scss";
  .fixed-footer{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 50px;
  }
	.item-wrap{
  display: flex;
  .item{
    flex: 1;
    font: bold 16px/50px 'Microsoft Yahei';
    color: #666666;
    text-align: center;
    &.router-link-active{
      color: $color-green;
    }
  }
}
</style>
