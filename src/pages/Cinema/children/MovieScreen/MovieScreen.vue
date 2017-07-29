<template>
  <div class="movie-screen">
    <div class="movie-intro">
      <router-link to="/">
        <div class="movie-title-wrap">
          <span class="movie-name">逆时营救</span>
          <span class="movie-score">7.0</span>
          <span class="movie-score-desc">分</span>
        </div>
        <div class="movie-profile">
          动作/106分钟/霍建华/火箭货/动作/106分钟/霍建华/火箭货/
        </div>
        <i class="iconfont icon-saishi"></i>
      </router-link>
    </div>
    <div class="movie-screen-detail">
        <ul class="movie-screen-date">
          <li>
            <router-link to="/cinema/detail/moviescreen/detail">
              今天06-29 <span class="icon-desc movie-coupon-icon">惠</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              明天06-30 <span class="icon-desc movie-coupon-icon">惠</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              后天07-01 <span class="icon-desc movie-coupon-icon">惠</span>
            </router-link>
          </li>
        </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{}
</script>

<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.movie-intro{
  padding: 10px;
  position: relative;
  &::before{
    @include border-bottom;
  }
  .iconfont{
    position: absolute;
    right: 20px;
    top: 32px;
    color: $color-light-gray;
  }
}
.movie-title-wrap,
.movie-profile{
  text-align: center;
  padding: 5px 0;
  width: 70%;
  margin: 0 auto;
  @include text-overflow-one;
}
.movie-name{
  font-size: $font-size-title;
  color: $color-dark-gray;
}
.movie-score{
  font-size: $font-size-normal;
  color: $color-orange;
  font-weight: bold;
}
.movie-profile,
.movie-score-desc{
  font-size: $font-size-sm;
  color: $color-light-gray;
}
.movie-screen-date{
  font-size: $font-size-normal;
  color: $color-dark-gray;
  display: flex;
  padding: 0 15px;
  position: relative;
  &::before{
    @include border-bottom;
  }
  li{
    margin-right: 10px;
  }
  a{
    display: inline-block;
    padding: 10px 0;
    color: $color-light-gray;
    &.router-link-exact-active{
      color: $color-dark-gray;
      border-bottom: 3px solid $color-green;
    }
  }
}
</style>
