<template>
  <div>
        <div class="home">
            <mt-header fixed title="首页"></mt-header>

            <div class="con">
                <ul>
                    
                    <router-link tag='li' to='/list/yunqian'>
                        <img src="../../assets/img/pic1.png" alt="" />
                    </router-link>
                       
                    <router-link tag='li' to='/list/yunzhong'>
                        <img src="../../assets/img/pic2.png" alt="" />
                    </router-link>

                    <router-link tag='li' to='/list/chanqian'>
                        <img src="../../assets/img/pic3.png" alt="" />
                    </router-link> 

                    <router-link tag='li' to='/list/chanhou'>
                        <img src="../../assets/img/pic4.png" alt="" />
                    </router-link>
                       
                    <router-link tag='li' to='/list/chengzhang'>
                        <img src="../../assets/img/pic5.png" alt="" />
                    </router-link>

                    <router-link tag='li' to='/list/fangzhi'>
                        <img src="../../assets/img/pic6.png" alt="" />
                    </router-link> 
                </ul>
            </div>
        </div>
    
  </div>
</template>
<script>
import { Header } from 'mint-ui';
    export default{

    }
</script>
<style>
    .con{
        margin-top: 40px;
        margin-bottom: 40px;
        background:pink;        
    }
    
    .con ul li img{
        width: 80%;
        height:auto;
        margin-left: auto;
        margin-right: auto;
        display:block;
        padding: 10px 0 10px 0;
    }
    .home{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
    }
</style>