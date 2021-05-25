<template>
  <div class="goods">
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>


  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodList",
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;

  }
</style>