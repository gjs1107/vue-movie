<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides">
      <router-link to="/cinema/detail/moviescreen">
        <img :src="slide.imgUrl">
      </router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    props: ['carouselType'],
    data () {
      return ({
        swiperOption: {
          autoplay: false,
          pagination: '.swiper-pagination',
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 30,
          freeMode: true
        },
        swiperSlides: []
      })
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted () {
      this.initSwiper(this.carouselType)
    },
    methods: {
      initSwiper (carouselType) {
        this.swiperSlides = [
          {'imgUrl': 'static/assets/img-avatar.png'},
          {'imgUrl': 'static/assets/img-avatar.png'},
          {'imgUrl': 'static/assets/img-avatar.png'}
        ]
      }
    }
  }
</script>

<style lang="scss">
  .swiper-box {
    // width: 100%;
    // height: 100%;
    // margin: 0 auto;
  }
  .swiper-item {
    // height: 100%;
    // text-align: center;
    // font-size: 18px ;
    // background: #fff;
    // /* Center slide text vertically */
    // display: -webkit-box;
    // display: -ms-flexbox;
    // display: -webkit-flex;
    // display: flex;
    // -webkit-box-pack: center;
    // -ms-flex-pack: center;
    // -webkit-justify-content: center;
    // justify-content: center;
    // -webkit-box-align: center;
    // -ms-flex-align: center;
    // -webkit-align-items: center;
    // align-items: center;
  }
  .swiper-slide{
    height: 90px;
    a{
      width: 100%;
      height: 100%;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
