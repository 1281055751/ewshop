<template>
  <div>
    <nav-bar>
      <template v-slot:default>商品分类</template>
    </nav-bar>
    <div id="mianbox">
      <div class="ordertab">
        <van-tabs v-model="active" @click="tabClick">
          <van-tab title="销量排序"></van-tab>
          <van-tab title="价格排序"></van-tab>
          <van-tab title="评论排序"></van-tab>
        </van-tabs>
      </div>

      <van-sidebar class="leftmenu" v-model="activeKey">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item v-for="(item,index) in categories" :key="index"
                             :title="item.name" :name="item.name">


            <van-sidebar-item v-for="sub in item.children"
                              :title="sub.name"
                              :key="sub.id"
                              @click="getGoods(sub.id)"
            />

          </van-collapse-item>

        </van-collapse>
      </van-sidebar>

      <div class="goodslist">
        <div class="content">
          <van-card
              num="2"
              tag="标签"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              origin-price="10.00"
          />
          <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          />
          <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          />
          <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {ref, reactive, onMounted} from 'vue';
import {getCategory} from "network/category";

export default {
  name: "Category",
  setup() {
    let active = ref(1);
    let activeKey = ref(0);
    let activeName = ref(1);
    let categories = ref([]);
    //当前排序的条件
    let currentOrder =ref('seles')
    //当前分类的id
    let currentCid =ref(0)
    onMounted(() => {
      getCategory().then((res) => {
        categories.value = res.categories
        console.log(res);
      })
    })
    //排序选项卡
    const tabClick = (index) => {

      let orders = ['seles', 'price', 'comments_count']
      currentOrder.value =orders[index]
      console.log('排序的序号:' + orders[index])
    }
    //通过分类得到商品
    const getGoods = (cid) =>{
      currentCid.value = cid
      console.log(cid);
      console.log('当前分类的id：'+currentOrder.value)
    }
    return {
      activeKey,
      categories,
      activeName,
      active,
      tabClick,
      getGoods

    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped lang="scss">
#mianbox {
  margin-top: 45px;
  display: flex;

  .ordertab {
    flex: 1;
    float: right;
    //background: red;
    //width: 100%;
    height: 50px;
    z-index: 9;
    position: fixed;
    top: 45px;
    right: 0;
    left: 130px;
    height: 44px;
  }

  .leftmenu {
    position: fixed;
    top: 95px;
    left: 0;
    //background: green;
    width: 130px;
    //height: 200px;
  }

  .goodslist {
    flex: 1;
    //background: blue;
    padding: 10px;
    position: absolute;
    top: 100px;
    left: 130px;
    right: 0;
    height: 100vh;

  }

}
</style>