<template>
	<div class="carousel">
      <Swiper :carouselType="carouselType"></Swiper>
	</div>
</template>

<script type="text/javascript">
import Swiper from 'components/Swiper'
export default{
  props: ['carouselType'],
  components: {
    Swiper
  }
}
</script>
