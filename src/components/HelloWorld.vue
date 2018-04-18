<template>
  <div class="hello">
      {{login}}
      
  </div>
</template>

<script>
// import store from '../store/index.js';
    import {mapState} from 'vuex'
export default {
    computed:{
      ...mapState(["login,arr"])
    }
}
</script>