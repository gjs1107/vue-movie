<template>
  <div class="user-home">
    <div class="user-information">
      <div class="user-avatar">
        <img src="../../assets/img-avatar.png">
      </div>
      <div class="user-name">雨飘尔用户</div>
      <img src="../../assets/img-avatar.png" class="user-information-bg">
    </div>
    <div class="user-order">
      <router-link to="/user/order" class="order">
        <i class="iconfont icon-saishi"></i>
        <span>订单</span>
      </router-link>
      <router-link to="/user/news" class="news">
        <i class="iconfont icon-saishi"></i>
        <span>消息</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{}
</script>
<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.user-information{
  position: relative;
  overflow: hidden;
  height: 175px;
  .user-information-bg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: blur(2px);
    z-index: 0;
  }
}
.user-avatar{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px auto 5px auto;
  position: relative;
  z-index: 100;
  border: 8px solid rgba(255,255,255,0.2);
  img{
    width: 100%;
    height: 100%;
  }
}
.user-name{
  position: relative;
  z-index: 100;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
}
.user-order{
  display: flex;
  .order,
  .news{
    display: inline-block;
    flex: 1;
    text-align: center;
    font-size: $font-size-normal;
    color: $color-dark-gray;
    padding: 10px 0;
    margin: 10px 0;
    span{
      display: block;
    }
  }
  .order{
    position: relative;
    &::before{
      @include border-right;
    }
  }
}
</style>
