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
    <tab-control @tabClick="tabClick" :titles="['畅销','新书','精选']"></tab-control>
<!--    {{ recommends[0] }}-->

    <goods-list></goods-list>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br> {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>

    {{temid}}<br>


  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import RecommendView from "@/views/home/ChildComps/RecommendView";
import TabControl from "@/components/content/tabCoutrol/TabContorl";
import {getHomeAllData, getHomeGoods} from "@/network/home";
import {ref, reactive, onMounted} from "vue";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "home",
  setup() {
    let temid = ref(0)
    const recommends = ref([])

    onMounted(() => {

      getHomeAllData().then(res => {
        // console.log(res)

        recommends.value = res.goods.data;
      })

      getHomeGoods().then(res=>{
        console.log(res);
      })
    })

    const tabClick = (index)=>{
      temid.value =index;
    }
    return {
      recommends,
      temid,
      tabClick
    }
  },
  components: {
    NavBar,
    RecommendView,
    TabControl,
    GoodsList,

  }
}
</script>

<style scoped >
.banners img {
  width: 100%;
  margin-top: 45px;
  height: auto;
}
</style>