<template>
  <div class="movie-seats">
    <div class="movie-intro">
      <div class="movie-name">逆时营救</div>
      <div class="movie-time">今天 06-29 18：20 国语3D</div>
      <div class="exchange" @click="changeTime()">
        换一场
        <i class="iconfont icon-saishi"></i>
      </div>
      <!-- 电影选座时间 -->
      <div class="seat-time-wrap" v-if="seatTimeShow">
        <MovieSeatTime></MovieSeatTime>
      </div>
    </div>
    <div class="seats-wrap">
      <div class="choose-info">
        <i class="iconfont icon-saishi"></i>
        请选择座位
      </div>
      <div class="movie-screen">
        <span>广州万达影院 2号厅</span>
      </div>
      <!-- 影院座位表 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
import MovieSeatTime from './MovieSeatTime'
export default{
  data () {
    return ({
      seatTimeShow: true
    })
  },
  components: {
    MovieSeatTime
  },
  methods: {
    changeTime () {
      this.seatTimeShow = !this.seatTimeShow
    }
  }
}
</script>
<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.movie-seats{
  background: $color-background;
}
.movie-intro{
  padding: 15px;
  background: #ffffff;
  text-align: center;
  position: relative;
  .movie-name{
    margin-bottom: 5px;
    font-size: $font-size-title;
    color: $color-dark-gray;
    font-weight: bold;
  }
  .movie-time{
    font-size: $font-size-normal;
    color: $color-dark-gray;
  }
  .exchange{
    position: absolute;
    left: 50%;
    margin-left: -60px;
    bottom: -16px;
    background: #ffffff;
    display: inline-block;
    width: 100px;
    color: $color-blue;
    font-size: $font-size-sm;
    .iconfont{
      font-size: $font-size-sm;
    }
  }
}
.seats-wrap{
  margin-top: 20px;
}
.choose-info{
  margin: 15px;
  font-size: $font-size-sm;
  color: $color-dark-gray;
  i{
    font-size: $font-size-sm;
  }
}
.movie-screen{
  font-size: $font-size-sm;
  color: $color-dark-gray;
  text-align: center;
  border-top: 1px dashed #cccccc;
  span{
    display:inline-block;
    padding: 4px 20px;
    background: $color-background;
    position: relative;
    top: -10px;
    border-top: 1px dashed #cccccc;
  }
}
</style>
