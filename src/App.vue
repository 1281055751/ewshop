<template>
  <router-view></router-view>
<!--  <router-view v-slot="{ Component }">-->
<!--    <transition>-->
<!--      <keep-alive>-->
<!--        <component :is="Component"/>-->
<!--      </keep-alive>-->
<!--    </transition>-->
<!--  </router-view>-->
  <div id="nav">
    <router-link class="tab-bar-item" to="/">
      <i class="iconfont icon icon-shouye"></i>
      <div>首页</div>
    </router-link>
    <router-link class="tab-bar-item" to="/category">
      <i class="iconfont icon icon-fenlei"></i>
      <div>分类</div>
    </router-link>
    <router-link class="tab-bar-item" to="/shopcart">
      <div class="icon">
        <van-badge :content="20" max="9">
          <div class="child"/>
          <i class="iconfont icon-gouwuche"></i>
        </van-badge>
      </div>
      <div>购物车</div>
    </router-link>
    <router-link class="tab-bar-item" to="/profile">
      <i class="iconfont icon icon-wode"></i>
      <div>我的</div>
    </router-link>
  </div>
</template>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/iconfont.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  //padding: 30px;
  background-color: #F6F6F6;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -4px 1px rgba(100, 100, 100, 0.1);

  a {
    //font-weight: bold;
    color: var(--color-text);


    &.router-link-exact-active {
      color: var(--color-high-text);
    }
  }
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 50px;
  font-size: var(--font-size);
}

.tab-bar-item .icon {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
  display: inline-block;
}
</style>
