<template>
  <div class="movie-list-adv">
    <ul class="movie-list-adv-ul">
      <li class="movie-list-adv-li" v-for="movieAdv in movieAdvs">
        <div class="img-wrap">
          <img :src="movieAdv.imgUrl">
          <span class="adv-type">{{movieAdv.advType}}</span>
        </div>
        <div class="adv-title">{{movieAdv.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default{
    data () {
      return ({
        movieAdvs: []
      })
    },
    mounted () {
      this.initData()
    },
    methods: {
      initData () {
        this.movieAdvs = [
          {'imgUrl': 'static/assets/img-avatar.png',
            'advType': '明星专访',
            'title': '刘德华刘德华刘德华刘德华刘德华刘德华'
          },
          {'imgUrl': 'static/assets/img-avatar.png',
            'advType': '明星专访',
            'title': '刘德华刘德华刘德华刘德华刘德华刘德华'
          },
          {'imgUrl': 'static/assets/img-avatar.png',
            'advType': '明星专访',
            'title': '刘德华刘德华刘德华刘德华刘德华刘德华'
          },
          {'imgUrl': 'static/assets/img-avatar.png',
            'advType': '明星专访',
            'title': '刘德华刘德华刘德华刘德华刘德华刘德华'
          },
          {'imgUrl': 'static/assets/img-avatar.png',
            'advType': '明星专访',
            'title': '刘德华刘德华刘德华刘德华刘德华刘德华'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "static/styles/scss/app.scss";
.movie-list-adv{
  margin: 0 15px;
  padding: 15px 0;
  position: relative;
  &:before{
    @include border-bottom;
  }
}
.movie-list-adv-ul{
  width: 100%;
  height: 116px;
  white-space: nowrap;
  overflow: hidden;
  overflow-x: scroll; /* 1 */
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-overflow-scrolling: touch; /* 2 */
  text-align: justify; /* 3 */
  &::-webkit-scrollbar {
      display: none;
  }
}
.movie-list-adv-li{
  width: 120px;
  margin-right: 10px;
  // float: left;使用float：left的话无法达到不换行
  display: inline-block;
  &:last-child{
    margin-right: 0;
  }
}
.img-wrap{
  position: relative;
  width: 120px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
  }
  .adv-type{
    position: absolute;
    left: 6px;
    top: 6px;
    z-index: 10;
    display: inline-block;
    background: rgba(0, 0, 0, 0.6);
    color: #f3f3f3;
    font-size: $font-size-sm;
    padding: 2px 5px;
  }
}
.adv-title{
  margin: 4px 0;
  font-size: $font-size-normal;
  color: $color-dark-gray;
  line-height: 16px;
  @include text-overflow-more(2);
  white-space: normal;
}

</style>
