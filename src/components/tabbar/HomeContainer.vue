<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1111</mt-swipe-item>
            <mt-swipe-item>2222</mt-swipe-item>
            <mt-swipe-item>3333</mt-swipe-item>
        </mt-swipe>
        
        <div>
          <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul> 
         </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            swipeData:[],
        }
    },
    created(){
         this.getImage();
    },
    methods:{
       getImage(){
           this.$http.get('http://vue.studyit.io/api/getlunbo').then(data=>{
               if(data.body.status===0){
                  this.swipeData= data.body.message;
               }else{
                   Toast('Fail to get data');
               }
           })
       }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
}
.mui-table-view-cell img{
    width: 60px;
}
.mui-grid-view.mui-grid-9{
    background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
}

</style>

