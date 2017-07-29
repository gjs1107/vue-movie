<template>
  <div class="search-location-wrap">
    <div class="location-wrap">
      <span class="city">城市</span>
      <i class="iconfont icon-triangle-copy-copy-copy"></i>
    </div>
    
    <div class="search-wrap">
      <i class="iconfont icon-sousuo"></i>
      <button type="button">搜索...</button>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{}
</script>

<style lang="scss" scoped>
@import "static/styles/scss/app.scss";

.search-location-wrap{
  display: flex;
  padding: 8px 15px;
  background: $color-background;
}
.location-wrap{
  width: 70px;
  line-height: 28px;
  span{
    font-size: $font-size-normal;
    color:$color-dark-gray;
  }
  i{
    color: $color-light-gray;
  }
}
.search-wrap{
  flex: 1;
  background: #ffffff;
  border: 1px solid $color-border;
  border-radius: 4px;
  text-align: center;
  button{
    padding: 4px 0;
    font-size: $font-size-normal;
    border: none;
    color: $color-light-gray;
  }
}
</style>
