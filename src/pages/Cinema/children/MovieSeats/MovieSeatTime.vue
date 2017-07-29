<template>
  <div class="seat-time">
    <ul class="seat-time-ul">
      <li class="seat-time-li seat-date">
        今天
      </li>
      <li class="seat-time-li">
        <span class="discount">惠</span>
        <div class="time">13:07</div>
        <div class="style">国语2D</div>
        <div class="price">￥50</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default{}
</script>
<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.seat-time-ul{
  width: 100%;
  height: 80px;
  white-space: nowrap;
  overflow: hidden;
  overflow-x: scroll;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-overflow-scrolling: touch;
  text-align: justify;
}
.seat-time-li{
  display: inline-block;
  &.seat-date{
    width: 20px;
  }
  .time,.style,.price,.date{
    color: $color-gray;
  }
}
</style>
