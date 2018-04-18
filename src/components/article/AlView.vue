<template>
	<div class="ar">
        <mt-header title="文章" fixed>
          
            <mt-button icon="back" slot="left" @click='returns'>back</mt-button>
          
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
		<div class="wz">
            {{content}}      
        </div>
		
	</div>

</template>
<script>
    export default{
        data(){
            return{
                content:""
            }
        },
        methods:{
            returns(){
                this.$router.history.go(-1)
            }
        },
        mounted(){
           let names=this.$route.query.names;
           let idx=this.$route.query.idx;
           this.$http({
                method:"get",
                url:'/arList'
            })
            .then(res=>{
                this.content=res.data[names]['fenlei'][idx].content;
            })
        }
    }
</script>
<style scoped>
    div{
        font-size: 22px;
        color:orange;
    }
    .ar{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
    }
    .wz{
        padding: 40px 10px 40px 10px;
        
    }
</style>