<template>
  <div class="order">
    <ul class="order-ul">
      <li class="order-li">
        <router-link to="/user/order/list">
          电影
        </router-link>
      </li>
      <li class="order-li">
        <router-link to="/">
          演出
        </router-link>
      <li>
      <li class="order-li">
        <router-link to="/">
          赛事
        </router-link>
      </li>
      <li class="order-li">
        <router-link to="/">
          商城
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  export default{}
</script>
<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.order{
  background: $color-background;
}
.order-ul{
  display: flex;
  padding: 0 10px;
  background: #ffffff;
}
.order-li{
  flex: 1;
  text-align: center;
  a{
    display: block;
    font-size: $font-size-normal;
    color: $color-dark-gray;
    padding: 10px 0;
    &.router-link-exact-active{
      border-bottom: 3px solid $color-green;
    }
  }
}
</style>
