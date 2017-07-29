<template>
  <div>
    <!-- 搜索和定位 -->
    <SearchAndLocation></SearchAndLocation>
    <!-- 轮播图 -->
    <Carousel :carouselType="carouselType"></Carousel>

  	<div class="item-wrap">
        <router-link :to="{path:'/movie/list',query:{movieType:1}}" class="item">
          正在上映
        </router-link>
        <router-link :to="{path:'/movie/list',query:{movieType:2}}" class="item">
          即将上映
        </router-link>
  	</div>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import Carousel from 'components/Carousel'
import SearchAndLocation from 'components/SearchAndLocation'
export default{
  data () {
    return ({
      carouselType: 1 // 1是电影轮播图，2是影院轮播图
    })
  },
  components: {
    Carousel,
    SearchAndLocation
  }
}
</script>

<style scoped lang="scss">
@import "static/styles/scss/app.scss";

.item-wrap{
  display: flex;
  padding: 8px 0;
  .item{
    flex: 1;
    font-size: $font-size-normal;
    color: $color-gray;
    text-align: center;
    &.router-link-exact-active{
      color: $color-dark-gray;
    }
  }
}
</style>
