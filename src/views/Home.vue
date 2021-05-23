<template>
  <div class="home">
    <img src="">
    <div id="demo"></div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
  #demo{
    width: 100px;
    height: 100px;
    background:url("~assets/images/logo.png") no-repeat;
  }
</style>
