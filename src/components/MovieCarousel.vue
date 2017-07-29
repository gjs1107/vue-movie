<template>
  <div class="carousel">
      <MovieSwiper :carouselType="carouselType"></MovieSwiper>
  </div>
</template>

<script type="text/javascript">
import MovieSwiper from 'components/MovieSwiper'
export default{
  props: ['carouselType'],
  components: {
    MovieSwiper
  }
}
</script>
