<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
                        <a  v-for="item in categoryList" :key="item.id" class="mui-control-item" :class="['mui-control-item',item.id==0?'mui-active':'']" @click="getImagesList(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
		</div>
        <ul class="image-container">
            <li v-for="item in imageList" :key="item.id">
                <!-- <img v-lazy="item.img_url"> -->
                <img src="../../temportary/temportary2.jpg">
                <!-- <img :src="item.img_url" alt=""> -->
                <h3>{{item.title}}</h3>
                <p>{{item.zhaiyao}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
//import mui js file
import mui from '../../lib/mui/js/mui.min.js';

export default {
    data(){
        return {
            //../../images/menu1.png
           imageList:[{id:50,title:'test123',zhaiyao:'adipisci aliquam in voluptatem corporis itaque\nquia pariatur est\nquo sunt culpa aliquid',img_url:'../../images/menu1.png'},
           {id:51,title:'test123',zhaiyao:'adipisci aliquam in voluptatem corporis itaque\nquia pariatur est\nquo sunt culpa aliquid',img_url:'../../temportary/temportary2.jpg'},
           {id:52,title:'test123',zhaiyao:'adipisci aliquam in voluptatem corporis itaque\nquia pariatur est\nquo sunt culpa aliquid',img_url:'../../temportary/temportary3.jpg'},
           {id:53,title:'test123',zhaiyao:'adipisci aliquam in voluptatem corporis itaque\nquia pariatur est\nquo sunt culpa aliquid',img_url:'../../temportary/temportary1.jpg'},
           {id:54,title:'test123',zhaiyao:'adipisci aliquam in voluptatem corporis itaque\nquia pariatur est\nquo sunt culpa aliquid',img_url:'../../temportary/temportary1.jpg'}],
           categoryList:[{id:0,title:'test1'},{id:15,title:'test2'},{id:16,title:'test3'},{id:10,title:'test5'},{id:17,title:'test6'},{id:18,title:'test7'}]
        }
    },
    created(){
        //default get all the image list 
       this.getImagesList(0);
    },
    mounted(){
       mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        //get photo list category 
        getImagesCategory(){
            this.$http.get('api/getimgcategory').then(function(result){
                if(result.body.status===0){
                    this.categoryList = result.body.message;
                    this.categoryList.unshift({title:'all',id:0})
                }
            })
        },
        //get image list for each category
        getImagesList(id){
            console.log(id);
            this.$http.get('api/getimages/'+id).then(function(result){
                if(result.body.status===0){
                    this.imageList = result.body.message;
                }
           })
        }
    }
}
</script>

<style lang="scss" scoped>
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.image-container {
    list-style: none;
    padding:0;
    padding:0 10px;
    img{
        width:100%;
        box-shadow: 1px 1px 10px grey;
    }
}

</style>
