<template>
  <div class="movie-screen-list">
    <ul class="movie-screen-list-ul">
      <li class="movie-screen-list-li">
        <div class="movie-time">
          <div class="start-time">00:00</div>
          <div class="end-time">02:30散场</div>
        </div>
        <div class="movie-position">
          <div class="movie-intro">
            国语IMAX 3D <span class="cineme-mark">IMAX</span>
          </div>
          <div class="movie-venue-number">8号厅</div>
        </div>
        <div class="movie-price">
          <div class="movie-real-prive"><span>特惠 ￥</span>64.9</div>
          <div class="movie-discount-price">折扣卡￥57.9</div>
        </div>
        <div class="btn-wrap">
          <router-link to="/cinema/movieseats" class="btn-big btn-buy">购票</router-link>
          <!-- <a href="" class="btn-big btn-buy">购票</a> -->
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default{}
</script>
<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.movie-screen-list-li{
  display: flex;
  padding: 20px 15px;
  position: relative;
  &::before{
    @include border-bottom;
  }
}
.movie-position,
.movie-price{
  flex: 1;
}
.movie-time{
  width: 84px;
}
.btn-wrap{
  width: 60px;
  text-align: right;
}
.start-time{
  font-size: 20px;
  font-weight: bold;
  color: $color-dark-gray;
}
.end-time,
.movie-venue-number{
  font-size: $font-size-sm;
  color: $color-light-gray;
}
.movie-intro{
  font-size: $font-size-normal;
  color: $color-dark-gray;
}
.movie-real-prive{
  font-size: 20px;
  color: $color-orange;
  font-weight:bold;
  span{
    font-size: $font-size-normal;
    font-weight: normal;
    margin-right: 4px;
  }
}
.movie-discount-price{
  font-size: $font-size-sm;
  color: $color-yellow;
}
</style>
