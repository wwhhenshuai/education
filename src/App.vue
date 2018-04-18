<template>
  <div>
      <transition
      enter-active-class='animated bounceInLeft'
      leave-active-class='animated bounceOutRight'>
          <router-view></router-view>
      </transition>
      <FootView :msg='t'></FootView>
  </div>
</template>

<script>

import FootView from './components/common/FootView.vue'
export default {
    data(){
        return{
            t:"首页"
        }
    },
    components:{
      FootView
    }
}
</script>