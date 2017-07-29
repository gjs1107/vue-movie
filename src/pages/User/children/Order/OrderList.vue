<template>
  <div class="order-list">
    <ul class="order-list-ul">
      <li class="order-list-li abled">
        <router-link to="/user/order/detail">
          <div class="order-title">
            <span class="name">记忆大师</span>
            <span class="ticket">2张</span>
            <i class="iconfont icon-saishi"></i>
          </div>
          <div class="order-location">
            广州万达影院
          </div>
          <div class="order-state-wrap">
            <span class="order-time">2017-04-30 18:20:22</span>
            <span class="order-state">等待放映</span>
          </div>
        </router-link>
      </li>
      <li class="order-list-li">
        <router-link to="/user/order/detail">
          <div class="order-title">
            <span class="name">记忆大师</span>
            <span class="ticket">2张</span>
            <i class="iconfont icon-saishi"></i>
          </div>
          <div class="order-location">
            广州万达影院
          </div>
          <div class="order-state-wrap">
            <span class="order-time">2017-04-30 18:20:22</span>
            <span class="order-state">已放映</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default{}
</script>
<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.order-list-ul{
  margin-top: 10px;
}
.order-list-li{
  margin: 0 10px 10px 10px;
  padding: 15px 20px;
  background: #ffffff;
  a {
    color: $color-light-gray;
  }
}
.order-title{
  padding: 8px 0;
  line-height: 16px;
  .name{
    font-size: $font-size-title;
  }
  .ticket{
    font-size: $font-size-sm;
    background: #cccccc;
    color: #ffffff;
    display: inline-block;
    padding: 0 4px;
  }
  .iconfont{
    float: right;
  }
}
.order-location,
.order-state-wrap{
  font-size: $font-size-sm;
  padding: 3px 0;
}
.order-state{
  float: right;
  font-size: $font-size-normal;
}
.order-list-li.abled{
  a {
    color: $color-dark-gray;
  }
  .ticket{
    background: #7f7f7f;
  }
}
</style>
