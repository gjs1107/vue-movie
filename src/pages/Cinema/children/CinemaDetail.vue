<template>
  <div class="cinema-detail">
    <!-- 影院简介 -->
    <CinemaIntro></CinemaIntro>
    
    <!-- 电影轮播 -->
    <MovieCarousel></MovieCarousel>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import MovieCarousel from 'components/MovieCarousel'
import CinemaIntro from './CinemaIntro'
export default{
  components: {
    MovieCarousel,
    CinemaIntro
  }
}
</script>
