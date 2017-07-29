<template>
  <div class="movie-list">
    <div>{{movieList}}</div>
    <ul class="move-list-ul">
      <li class="movie-list-li">
        <div class="movie-poster">
          <img src="../assets/img-avatar.png">
        </div>
        <div class="movie-intro-wrap">
          <div class="movie-intro">
            <div class="movie-intro-left">
              <h3 class="movie-tit"> 变形金刚就登记等级登记等级登记变形金刚就登记等级登记等级登记</h3>
              <p class="movie-desc">还是还是适合合适何时上市还是还是适合合适何时上市</p>
                <p class="movie-actor">迈克尔贝/迈克尔白/迈克尔啥/迈克尔啥/迈克尔啥</p>
            </div>
            <div class="movie-intro-right">
              <div class="movie-score"> 7.7分 </div>
              <a href="" class="btn btn-buy">购票</a>
            </div>
          </div>
          <div class="movie-coupon">
            <ul class="movie-coupon-ul">
              <li class="movie-coupon-li">
                  <span class="icon-desc movie-coupon-icon">优惠</span>
                  <span class="movie-coupon-desc">5元观影红包，民生大派送</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default{
    data () {
      return ({
        movieList: '',
        movieType: 0
      })
    },
    mounted () {
      this.movieType = this.$route.query.movieType
      this.initData(this.movieType)
    },
    watch: {
      '$route': 'fetchdata' // 路由改变就会执行
    },
    methods: {
      fetchdata () {
        this.movieType = this.$route.query.movieType
        this.initData(this.movieType)
      },
      initData (movieType) {
        console.log(movieType)
        if (movieType === 1) {
          this.movieList = '正在上映'
        } else {
          this.movieList = '即将上映'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "static/styles/scss/app.scss";

.movie-list-li{
  display: flex;
  text-align: left;
}
.movie-poster{
  width: 80px;
  height: 110px;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 15px;
  img{
    width: 100%;
    height: 100%;
  }
}
.movie-intro-wrap{
  flex: 1;
  margin-right: 15px;
}
.movie-intro{
  display: flex;
  position: relative;
  margin: 10px 0 0 0;
  padding-bottom: 20px;
  &:before{
    @include border-bottom;
  }
}
.movie-intro-left{
  flex: 1;
  width: 0; // 如果不设置为0，则里面的块级元素无法超出隐藏
}
.movie-intro-right{
  width: 50px;
  text-align: right;
}
.movie-tit{
  margin: 5px 0;
  font-weight: normal;
  font-size: $font-size-title;
  color: $color-dark-gray;
  @include text-overflow-one;
}
.movie-score{
  display: inline-block;
  margin: 6px 0;
}
.movie-desc{
  margin: 6px 0;
  font-size: $font-size-normal;
  color: $color-gray;
  @include text-overflow-one;
}
.movie-actor{
  margin: 5px 0;
  font-size: $font-size-sm;
  color: $color-light-gray;
  @include text-overflow-one;
}
.movie-coupon-desc{
  font-size: $font-size-normal;
  color: $color-gray;
}
.movie-coupon-li{
  position: relative;
  padding: 10px 0;
  &:before{
    @include border-bottom;
  }
}

</style>
