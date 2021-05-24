<template>
  <div>
  <nav-bar>
<!--    <template v-slot:left>&lt;</template>-->
    <template v-slot:default>图书兄弟</template>
  </nav-bar>

    <div class="banners">
      <img src="~assets/images/图层179.png" alt="">
    </div>

    <recommend-view :recommends="recommends"></recommend-view>
      {{recommends[0]}}
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import RecommendView from "@/views/home/ChildComps/RecommendView";
import {getHomeAllData} from "@/network/home";
import {ref,reactive,onMounted} from "vue";

export default {
  name: "home",
  setup(){

    const  recommends = ref([])

    onMounted(()=>{

      getHomeAllData().then(res=>{
        console.log(res.goods)

        recommends.value =res.goods.data;
      })
    })
    return {
      recommends
    }
  },
    components:{
      NavBar,
      RecommendView,

    }
}
</script>

<style scoped>
.banners img {
  width: 100%;
  margin-top: 45px;
  height: auto;
}
</style>