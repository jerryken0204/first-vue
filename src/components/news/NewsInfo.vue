<template>
        <div class="news-container">
            <h2 class="title">news info title</h2>
            <p class="sub-title">
                <span>Time:05/03/2019</span>
                <span>click time</span>
            </p>
            <hr>
            <p class="content">test test tetst tteststststststtstststs</p>

            <div class="comment"> 
                <comment :articleId="newsDetails.id"></comment>
            </div>
        </div>
        
         <!-- <div class="news-container">
            <h2 class="title">{{newsDetails.title}}</h2>
            <p class="sub-title">
                <span>{{newsDetails.add_time}}</span>
                <span>click {{newsDetails.click}} time</span>
            </p>
            <hr>
            <p :v-html="newsDetails.content" class="content"></p>
        </div> -->
</template>

<script>
import comment from '../subcomponents/comment.vue';
import { Toast } from 'mint-ui';
export default {
    data(){
       return {
           newsDetails:{id:1230},
           id:this.$route.params.id
       }
    },
    created(){
       this.getNewsDetails();
    },
    methods:{
       getNewsDetails(){
        //    console.log(this.id);
           //get news details 
           this.$http.get('api/getnew/'+this.id).then(function(result){
                if(result.body.status===0){
                    this.newsDetails = result.body.message[0];
                }else{
                    Toast('Fail to get news detail data');
                }
           })
       }
    },
    components:{
        comment
    }
}
</script>

<style lang="scss" scoped>
.news-container {
    padding:4px;
    .title {
        text-align: center;
        font-size: 25px;
        color:red;
        margin: 10px 0;
    }
    .sub-title {
        display:flex;
        justify-content: space-between;
        color: #226aff;
    }
    // .content {
    //     // color: 
    // }
}
</style>
