<template>
    <div class="home">
        <!-- 轮播图 -->
        <!-- <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in slideShowList" :key='item.img'>
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe> -->
        <swiper :slideShowList="slideShowList" :isfull="true"></swiper>

        <!-- mui中grid九宫格改为六宫格 -->
        <!-- <div class="mui-content"> -->
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/home/newslist'>
		                   <img src="../../images/menu1.png" alt="">
                           <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/home/photolist'>
                            <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/home/buy'>
                            <img src="../../images/menu3.png" alt="">		                    
		                    <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
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
		<!-- </div> -->
    </div>

</template> 
<script>
import { Toast } from 'mint-ui';
import swiper from '../subcomponents/swiper.vue'
export default {
    data() {
        return {
            slideShowList: []//保存轮播图的数组
        }
    },
    created() {//页面缓存完毕立即调用方法
        this.getSlideShow();
    },
    methods: {
        getSlideShow() {//向接口请求数据
            this.$http.get('api/getlunbo').then(result => {
        
                console.log(result.body);
                if(result.body.status === 0) {
                    //成功了
                    this.slideShowList = result.body.message;//请求到的数据传进数组
                    Toast('图片获取成功');
                }else {
                    //失败了
                    Toast('图片获取失败');
                }
            })
        }
    },
    components: {
        swiper
    }
    
}
</script>  
<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item:nth-child(1) {
        background: red;
    }
    .mint-swipe-item {
        &:nth-child(2) {
            background: blue;
        }
          &:nth-child(3) {
            background: blue;
        }
        img {
            width: 100%;
            height: 100%;
        }
    
    }
}
.mui-grid-view.mui-grid-9 {
    background: #fff;
    border: none;
    img {
        width: 60px;
    } 
    .mui-media-body {
        font-size: 13px;
    }
    
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;      
}

</style>