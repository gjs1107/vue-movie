<template>
  <div class="search-page">
    <div class="search-wrap">
      <i class="iconfont icon-sousuo"></i>
      <input type="text">
    </div>

    <div class="search-result">
      <MovieList></MovieList>
    </div>
  </div>
  
</template>

<script type="text/javascript">
import MovieList from 'components/MovieList'

export default{
  components: {
    MovieList
  }
}
</script>
<style lang="scss" scoped>
@import "static/styles/scss/app.scss";
.search-wrap{
  flex: 1;
  background: #ffffff;
  border: 1px solid $color-border;
  border-radius: 4px;
  text-align: center;
  input{
    padding: 4px 0;
    font-size: $font-size-normal;
    border: none;
    color: $color-light-gray;
  }
}
</style>
