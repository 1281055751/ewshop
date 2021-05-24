<template>
  <div id="nav">
    <router-link to="/">
      <i class="iconfont icon-shouye"></i>
      <div>首页</div>
    </router-link>
    <router-link to="/category">
      <i class="iconfont icon-fenlei"></i>
      <div>分类</div>
    </router-link>
    <router-link to="/shopcart">
      <i class="iconfont icon-gouwuche"></i>
      <div>购物车</div>
    </router-link>
    <router-link to="/profile">
      <i class="iconfont icon-wode"></i>
      <div>我的</div>
    </router-link>
    <router-view/>
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--color-high-text);
    }
  }
}
</style>
