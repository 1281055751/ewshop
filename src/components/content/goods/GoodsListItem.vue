<template>
  <div class="goods-item">
    <img src="~assets/images/r_dj.png" alt="">
    <div class="goods-info">
      <p>标题</p>
      <span class="price"><small>￥</small>1000</span>
      <span><span class="collect">3</span></span>
    </div>
  </div>
</template>

<script>

export default {
  name: "GoodsListItem"

}
</script>

<style scoped lang="scss">
.goods-item {
  width: 46%;
  padding-bottom: 40px;
  position: relative;


  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;

    }
    .price{
      color: red;
      margin-right: 20px;

    }
    .collect{
      position: relative;
    }
    .collect::before{
      content: '';
      position: absolute;
      left: -15px;
      width: 14px;
      height: 14px;
      top: -1px;
      background: url("~assets/images/collect.png") 0 0/14px 14px;
    }
  }

}
</style>