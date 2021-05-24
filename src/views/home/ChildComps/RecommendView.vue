<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends.slice(0,4)" :key="item.id">
      <a href="">
        <img :src="item.cover_url" alt="">
        <div>{{item.title}}</div>
      </a>

  </div>


  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return[];
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 15px 0 30px;
    border-bottom: 8px solid #EEE;
    font-size: 12px;


  }
  .recommend-item{
    flex: 1;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;

    }
  }

</style>