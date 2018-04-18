<template>
  <div class="foot">
        
<mt-tabbar v-model="selected" fixed>
          <mt-tab-item id="首页">
            
            <router-link to='/home'>{{msg}}</router-link>
          </mt-tab-item>
          <mt-tab-item id="收藏">
            
            <router-link to='/fav'>收藏</router-link>
          </mt-tab-item>
          <mt-tab-item id="历史记录">
            
            <router-link to='/history'>历史记录</router-link>
          </mt-tab-item>
          <mt-tab-item id="设置">
           
            <router-link to='/config'>设置</router-link>
          </mt-tab-item>
</mt-tabbar>
    
  </div>
</template>
<script>
import { Tabbar, TabItem } from 'mint-ui';
    export default{
      props:['msg'],
        data(){
            return{
                selected:""
            }
        }

    }
</script>
<style scoped>
    .router-link-active{
        color:blue;
    }
</style>