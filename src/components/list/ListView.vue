<template>
	
	<div class="oo">
    <mt-header :title='title'>
          <router-link to="/" slot="left">
            <mt-button icon="back">back</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
	   <ul>
           <li v-for='(item,index) in arr'>
           <img src='"item.img+"'>
               <router-link :to="{
                    path:'/article',
                    query:{
                        names:str,
                        idx:index
                        }
                }">
                    <!-- ../../assets/img/tu/ -->
                    {{item.title}}
               </router-link>
           </li>
       </ul>
		
	</div>

</template>

<script>
import '../../mock/mock'
    export default{
        data(){
            return{
                arr:[],
                str:"",
                title:""
            }
        },
        mounted(){
            let id=this.$route.params.id;
            if(id==='yunqian'){
                this.title='孕前准备'
            }else if(id==='yunzhong'){
                this.title='孕中准备'
            }else if(id==='chanqian'){
                this.title='产前准备'
            }else if(id==='chanhou'){
                this.title='产后注意'
            }else if(id==='chengzhang'){
                this.title='成长注意'
            }else if(id==='fangzhi'){
                this.title='防治注意'
            }
            this.str=id;
            this.$http({
                method:"get",
                url:'/arList'
            })
            .then(res=>{
                this.arr=res.data[id]['fenlei'];
                console.log(res.data[id]['fenlei'])
            })
        }
    }


    



    // let local=localStorage;
    // if(!local.getItem('sc')){
    //     local.setItem('sc',123)
    // }
    // $('.oo a').tap(function(){
    //     alert(1)
    // })

        console.log($(".oo"))




</script>
<style scoped>
.oo ul li{
    padding:10px;
}
ul li a{
    color:black;
    text-decoration: none;
}
.oo ul li:nth-child(odd){background:#000000;color:white;}
.oo ul li:nth-child(odd) a{
    color:white;
}
</style>