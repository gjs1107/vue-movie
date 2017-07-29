<template>
  <div class="cinema-intro">
    <div class="cinema-name">
      广州万达海珠影院
    </div>
    <div class="cinema-address-wrap">
      <div class="cinema-address">
        广州市海珠区工业大道广州市海珠区工业大道
        广州市海珠区工业大道广州市海珠区工业大道
      </div>
      <i class="iconfont icon-saishi"></i>
      <i class="iconfont icon-saishi collection"></i>
    </div>
    <div class="cineme-mark-wrap">
      <span class="cineme-mark">IMAX</span>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{}
</script>

<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.cinema-intro{
  padding: 20px 5px 20px 20px;
}
.cinema-name{
  font-size: $font-size-title;
  color: $color-dark-gray;
}
.cinema-address-wrap{
  font-size: $font-size-sm;
  color: $color-light-gray;
  display: flex;

  .iconfont{
    width: 50px;
    text-align: center;
    padding: 8px 0;
  }
  .collection{
    border-left: 1px solid $color-light-gray;
  }
}
.cinema-address{
  flex:1;
  line-height: 31px;
  @include text-overflow-one;
}
</style>
