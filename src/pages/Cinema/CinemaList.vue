<template>
  <div class="cinema-list">
    <ul class="cinema-list-ul">
      <li class="ciname-list-li">
        <router-link to="/cinema/detail">
          <div class="cinema-title">
            <div class="cinema-name">
              广州万达影院广州万达影院
              广州万达影院广州万达影院
              广州万达影院广州万达影院
            </div>
            <div class="cinema-price">
              <span class="mark">￥</span><span class="price">123</span>
              <span class="desc">起</span>
            </div>
          </div>
          <div class="cinema-address-wrap">
            <div class="cinema-address">
            海珠区工业大道821号急急急
            海珠区工业大道821号急急急
            海珠区工业大道821号急急急
            </div>
            <span class="cinema-distance">
              12.2km
            </span>
          </div>
          <div class="cineme-mark-wrap">
            <span class="cineme-mark">IMax</span>
            <span class="cineme-mark">小吃</span>
            <span class="cineme-mark">折扣卡</span>
          </div>
          <div class="cinema-movie-wrap">
            <span class="icon-desc movie-coupon-icon">惠</span>
            <span class="cinema-movie-coupon">
              逆时营救9.9|影城特惠|逆时营救特惠
            </span>
          </div>
        </router-link>
      </li>
    </ul>  
  </div>
</template>

<script type="text/javascript">
  export default{}
</script>

<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.ciname-list-li{
  padding: 10px 15px;
  position: relative;
  &::before{
    @include border-bottom;
  }
}
.cinema-title,
.cinema-address-wrap,
.cineme-mark-wrap,
.cinema-movie-wrap{
  margin: 6px 0;
}
.cinema-title{
  display: flex;
}
.cinema-name{
  font-size: $font-size-title;
  color: $color-dark-gray;
  flex: 1;
  @include text-overflow-one;
}
.cinema-price{
  width: 100px;
  text-align:right;
  .mark{
    font-size: $font-size-sm;
    color: $color-orange;
  }
  .price{
    color: $color-orange;
    font-size: $font-size-title;
  }
  .desc{
    font-size: $font-size-normal;
    color: $color-light-gray
  }
}
.cinema-address-wrap,
.cinema-movie-wrap{
  display: flex;
}
.cinema-address{
  flex: 1;
  font-size: $font-size-sm;
  color: $color-light-gray;
  @include text-overflow-one;
}
.cinema-distance{
  width: 60px;
  text-align:right;
  font-size: $font-size-sm;
  color: $color-light-gray;
}
.cinema-movie-coupon{
  font-size: $font-size-sm;
  color: $color-light-gray;
  margin-left: 5px;
}
</style>
