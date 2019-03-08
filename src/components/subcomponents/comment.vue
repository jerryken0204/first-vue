<template>
    <div class="comment-container">
        <h4>Comment Area</h4>
        <hr>
        <textarea name="" id="comment" cols="30" rows="5" placeholder="pls etnter your comment"
        v-model="comment"></textarea>
        <mt-button type="primary" size='large' @click="postComment">Submit Button</mt-button>
          <div class="comment-content" v-for="(item,index) in commentList" :key="item.add_time">
            <div class="comment-title">
                <span>{{index+1}}</span>
                <span>username :{{item.user_name}}</span>
                <span>Time: {{item.add_time}}</span>
            </div>
            <p>{{item.content}}</p>
         </div>
        <mt-button type="danger" size="large" plain @click="getMore">load more</mt-button>
    </div>
</template>

<script>

import { Toast } from 'mint-ui';
export default {
    data(){
        return {
           commentList:[{user_name:'jerry',add_time:'2019-03-06',content:'test1'},
           {user_name:'jerry2',add_time:'2019-03-07',content:'test2'},
           {user_name:'jerry3',add_time:'2019-03-08',content:'test2'}],
           pageIndex:1,
           comment:''
        }
    },
    created(){
      this.getComments();
    },
    methods:{
        getComments(){
            console.log(this.articleId);
            //get comments using page index
            //get bug here
            this.$http.get('api/getcomments/'+this.articleId+'?/pageindex'+this.pageIndex).then(function(result){
                if(result.body.status===0){
                   this.commentList = this.commentList.concat(result.body.message);
                }else{
                   Toast('Fail to get comments');
                }
            })
        },
        getMore(){
            //get more comments
            this.pageIndex ++;
            this.getComments();
        },
        postComment(){
            //post comment
            // if(this.comment.trim().length==0){
            //    this.$http.post('/api/postcomment/'+this.articleId,{content: this.comment.trim()}).then(function(result){
            //     if(result.body.status===0){
            //         console.log('success.....')
            //         this.commentList.unshift({user_name:'jerry',add_time:'2019-03-09',content:this.comment});
            //     }
            //     })
            // }else{
            //     Toast('Comment can not be empty');
            // }
             this.commentList.unshift({user_name:'jerry',add_time:'2019-03-09',content:this.comment});
        }
    },
    props:['articleId']
}
</script>

<style lang="scss" scoped>
.comment-container {
    .comment-title {
        background-color:#ccc;
        line-height: 30px;
    }
}
</style>
