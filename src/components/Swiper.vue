<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides">
      <img :src="slide.imgUrl">
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
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true
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
        if (carouselType === 1) {
          this.swiperSlides = [
            {'imgUrl': 'static/assets/img-avatar.png'},
            {'imgUrl': 'static/assets/img-avatar.png'},
            {'imgUrl': 'static/assets/img-avatar.png'}
          ]
        } else {
          this.swiperSlides = [
            {'imgUrl': 'static/assets/img-avatar.png'},
            {'imgUrl': 'static/assets/img-avatar.png'},
            {'imgUrl': 'static/assets/img-avatar.png'}
          ]
        }
        // setInterval(() => {
        //   console.log('simulate async data')
        //   let swiperSlides = this.swiperSlides
        //   if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
        // }, 3000)
      }
    }
  }
</script>

<style lang="scss">
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide{
    height: 90px;

    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
