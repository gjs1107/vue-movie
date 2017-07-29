<template>
  <div class="cinema">
    <!-- 搜索和定位 -->
    <SearchAndLocation></SearchAndLocation>

    <!-- 轮播图 -->
    <Carousel :carouselType="carouselType"></Carousel>

    <!-- 影院列表 -->
    <CinemaList></CinemaList>

    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script type="text/javascript">
import Footer from 'components/Footer'
import Carousel from 'components/Carousel'
import SearchAndLocation from 'components/SearchAndLocation'
import CinemaList from './CinemaList.vue'
export default{
  data () {
    return ({
      carouselType: 2 // 1是电影轮播图，2是影院轮播图
    })
  },
  components: {
    Footer,
    Carousel,
    SearchAndLocation,
    CinemaList
  }
}
</script>
