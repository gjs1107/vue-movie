<template>
  <div class="movie-screen-detial">
    <!-- 影院折扣 -->
    <MovieScreenDiscount></MovieScreenDiscount>

    <!-- 影院场次列表 -->
    <MovieScreenList></MovieScreenList>

  </div>
</template>
<script type="text/javascript">
import MovieScreenDiscount from './MovieScreenDiscount'
import MovieScreenList from './MovieScreenList'
export default{
  components: {
    MovieScreenDiscount,
    MovieScreenList
  }
}
</script>
<style scoped lang="scss">
@import "static/styles/scss/app.scss";
</style>
