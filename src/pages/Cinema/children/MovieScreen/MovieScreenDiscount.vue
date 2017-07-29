<template>
  <div class="movie-screen-discount">
    <ul class="movie-screen-discount-ul">
      <li class="movie-screen-discount-li">
        <span class="color-orange">特惠</span>
        购票限时特惠，数量有限
      </li>
      <li class="movie-screen-discount-li">
        <span class="card-discount">折扣卡</span>
        购票限时特惠，数量有限
      </li>
      <li class="movie-screen-discount-li member">
        <span class="card-member">会员卡</span>
        购票限时特惠，数量有限
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default{}
</script>
<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.movie-screen-discount-li{
  position: relative;
  padding: 10px 15px;
  font-size: $font-size-sm;
  color: $color-light-gray;
  &::before{
    @include border-bottom;
  }
  &.member{
    background: #d3dcf4;
    color: $color-gray;
  }
  .color-orange{
    color: $color-orange;
  }
}
</style>
