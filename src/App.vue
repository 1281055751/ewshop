<template>
  <div id="nav">
    <router-link to="/">home</router-link>
    <router-link to="/">home</router-link>
  <!-- <Home/> -->
 <router-view>
  </router-view>
  </div>
  
</template>

<script >
import Home from 'views/home'
export default {
  components:{
    Home,
  }
}
</script>
<style lang="scss">
 @import "assets/css/base.css";
 a{

   font-weight: bold;
   color: #2c3e50;
 &.router-link-exact-active{
   color: var(--color-hight-text);
 }
 }
</style>
