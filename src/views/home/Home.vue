<template>
  <div id="home">
    <nav-bar>
      <!--    <template v-slot:left>&lt;</template>-->
      <template v-slot:default>图书兄弟</template>
    </nav-bar>
    <tab-control v-show="inTabFixed" @tabClick="tabClick" :titles="['畅销','新书','精选']"></tab-control>
    <div class="wrapper">
      <div class="content">
        <div ref="banref">
          <div class="banners">
            <img src="~assets/images/图层179.png" alt="">
          </div>
          <recommend-view :recommends="recommends"></recommend-view>
        </div>



        <tab-control @tabClick="tabClick" :titles="['畅销','新书','精选']"></tab-control>
        <!--    {{ recommends[0] }}-->

        <goods-list :goods="showGoods"></goods-list>
      </div>
    </div>
      <back-top @bTop="bTop" v-show="inShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import RecommendView from "@/views/home/ChildComps/RecommendView";
import TabControl from "components/content/tabCoutrol/TabContorl";
import {getHomeAllData, getHomeGoods} from "@/network/home";
import {ref, reactive, onMounted, computed, watchEffect, nextTick} from "vue";
import GoodsList from "components/content/goods/GoodsList";
import BScroll from 'better-scroll'
import BackTop from "components/common/backtop/BackTop";

export default {
  name: "home",
  setup() {
    //临时变量
    let inTabFixed =ref(false);
    let inShowBackTop=ref(false);
    let banref =ref(null);
    const recommends = ref([])

    //列表数据模型
    const goods = reactive({
      sales: {page: 1, list: []},
      recommend: {page: 1, list: []},
      new: {page: 1, list: []}
    })

    let currentType = ref('sales');

    const showGoods = computed(() => {
      return goods[currentType.value].list

    })
    let bscroll = reactive({});
    onMounted(() => {

      getHomeAllData().then(res => {
        // console.log(res)

        recommends.value = res.goods.data;
      })

      getHomeGoods('sales').then(res => {
        // console.log(res);
        goods.sales.list = res.goods.data;
      })
      getHomeGoods('recommend').then(res => {
        // console.log(res);
        goods.recommend.list = res.goods.data;
      })
      getHomeGoods('new').then(res => {
        // console.log(res);
        goods.new.list = res.goods.data;
      })
      // console.log(goods);

      //创建BetterScroll对象
      bscroll = new BScroll(document.querySelector('.wrapper'), {
        probeType: 3,//0,1,2,3 3 只要在运动就触发scroll事件
        click: true, //是否允许点击
        pullUpLoad: true //上拉加载更多，默认是false
      });
      console.log(banref.value);
      //触发滚动事件

      bscroll.on('scroll', (position) => {
        // console.log(position.y);
        console.log(banref.value.offsetHeight);
        inShowBackTop.value=inTabFixed.value =(-position.y)>banref.value.offsetHeight
      })

      //上拉加载数据,触发pullingUp
      bscroll.on('pullingUp',()=>{
        console.log('上拉加载更多')

        const page =goods[currentType.value].page+1;
        getHomeGoods(currentType.value,page).then(res=>{
          goods[currentType.value].list.push(...res.goods.data)
          goods[currentType.value].page +=1;
        })
        //完成上拉，等数据请求完成，要将新数据展示出来
        bscroll.finishPullUp();
        console.log('当前类型'+currentType.value+'当前页'+page);
        //重新计算高度
        bscroll.refresh();
        console.log("contentheight:"+document.querySelector('.content').clientHeight );

      })

    })


    const tabClick = (index) => {

      let types = ['sales', 'new', 'recommend'];
      currentType.value = types[index]
      // console.log(currentType.value);
      nextTick(() => {
        //重新计算高度
        bscroll && bscroll.refresh()
      })

    }
    //监听任何一个变量有变化
    watchEffect(() => {
      nextTick(() => {
        //重新计算高度
        bscroll && bscroll.refresh()
      })
    })
    const bTop = ()=>{

    }
    return {
      recommends,
      inTabFixed,
      tabClick,
      goods,
      showGoods,
      banref,
      inShowBackTop
    }
  },
  components: {
    NavBar,
    RecommendView,
    TabControl,
    GoodsList,
    BackTop

  },

}
</script>

<style scoped>
.banners img {
  width: 100%;
  /*margin-top: 45px;*/
  height: auto;
}

#home {
  height: 100vh;
  position: relative;
}

.wrapper {
  position: absolute;
  top: 45px;
  bottom: 50px;
  left: 0px;
  right: 0px;
  overflow: hidden;
  /*background: red;*/
}

.content {

}
</style>