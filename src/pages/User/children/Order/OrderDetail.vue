<template>
  <div class="order-detail-wrap">
    <div class="order-detail">
      <div class="order-intro">
        <div class="order-name">记忆大师<span>国语</span><span>2D</span></div>
        <div class="order-time">
          04月30日 周日 18:23
        </div>
        <div class="order-location">
          广州万达影院
        </div>
        <div class="order-position">
          7号厅 A排3座 | A排4座 
        </div>
      </div>
      <div class="order-qrcode">
        <div class="qrcode-number">
          取票码：<span>WFJJ 7FJDH</span>
        </div>
        <div class="qrcode">
          <img src="../../../../assets/img-avatar.png">
        </div>
        <div class="rule-wrap">
          <div class="rule-open">如何取票</div>
          <div class="rule">
            取票规则
          </div>
        </div>
      </div>
      <div class="cinema-intro">
        <div class="cinema-name">
          广州万达海珠影院
        </div>
        <div class="cinema-address-wrap">
          <div class="cinema-address">
            广州市海珠区工业大道广州市海珠区工业大道
            广州市海珠区工
          </div>
          <i class="iconfont icon-saishi"></i>
          <i class="iconfont icon-saishi collection"></i>
        </div>
      </div>
      <div class="order-operation">
        <div class="operation-left">
          <div class="order-number">订单号：1725489957455</div>
          <div class="order-price">总价：76元</div>
        </div>
        <div class="operation-right">
          删除订单
        </div>
      </div>
    </div>
    
  </div>
</template>

<script type="text/javascript">
  export default{}
</script>
<style scoped lang="scss">
@import "static/styles/scss/app.scss";
.cinema-intro{
  padding: 20px 5px 20px 20px;
}
.cinema-name{
  font-size: $font-size-normal;
  color: $color-gray;
  margin-bottom: 15px;
}
.cinema-address-wrap{
  font-size: $font-size-sm;
  color: $color-gray;
  display: flex;

  .iconfont{
    width: 50px;
    text-align: center;
    padding: 8px 0;
  }
  .collection{
    border-left: 1px solid $color-light-gray;
  }
}
.cinema-address{
  flex:1;
  line-height: 18px;
  @include text-overflow-more(2);
}
</style>
