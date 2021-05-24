<template>
  <div class="home">
    {{banner}}
  </div>
</template>

<script>
import {ref,onMounted} from "vue";
import {getHomeAllData} from "@/network/home";
import {getBanner} from "@/network/home";

export default {
  name: 'Home',
  components: {

  },
  setup(){
    const banner = ref([])

    onMounted(()=>{
      console.log('111')
      getHomeAllData().then(res=>{

      banner.value=res.slides;


      }).catch(err=>{

      })
    })
    return {
      banner
    }
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
