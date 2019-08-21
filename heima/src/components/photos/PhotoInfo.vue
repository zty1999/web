<template>
    <div class="photoinfo-contaier">
        <h3 class="title">{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
            <span>点击：{{photoinfo.click}}次</span>
        </p>
        <hr> 
        <!-- 缩略图区域 -->
       
        <vue-preview :slides="slide1" @close="handleClose" class="thumbs"> </vue-preview>
  

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 放置一个现成的评论子组件 -->
        <v-Comment :id="id"></v-Comment>
    </div>
</template>
<script>
import Comment from '../subcomponents/Comment'
export default {
    data() {
        return {
            id: this.$route.params.id,//从路由中获取到的图片id
            photoinfo: {},//图片详情

             slide1: [
        //   {
        //     src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
        //     msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
        //     alt: 'picture1',
        //     title: 'Image Caption 1',
            // w: 600,
            // h: 400
        //   },
        //   {
        //     src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
        //     msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
        //     alt: 'picture2',
        //     title: 'Image Caption 2',
        //     w: 1200,
        //     h: 900
        //   }
        ]
        }
    },
    created() {
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods: {
        getPhotoInfo() {
            this.$http.get('api/getimageInfo/' + this.id).then(result => {
                console.log(result.body);
                if(result.body.status === 0) {
                   this.photoinfo = result.body.message[0];
                }
                else{
                    Toast("获取图片详情页失败！");
                }
            })
        },
        getThumbs() {
            // 获取缩略图
            this.$http.get("api/getthumimages/" + this.id).then(result => {
                if (result.body.status === 0) {
                    // 循环每个图片数据，补全图片的宽和高
                    result.body.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                        console.log(item.src)
                        // item.src = item.src;  //大图
                        item.msrc = item.src;  //小图
                    });
                    // 把完整的数据保存到 list 中
                    this.slide1 = result.body.message;
                }
            });
        },
        handleClose () {
            console.log('close event')
        }
    },
    components: {
        'v-Comment': Comment
    }
}
</script>
<style lang="scss" scoped>
.photoinfo-contaier {
    padding: 3px;
    h3 {
        color: #2266aa;
        font-size: 15PX;
        text-align: center;
        margin: 15px;
    }
    .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 13px;

    }
    .thumbs{
         
        div{ //deep深层作用选择器
            display: flex;
            flex-wrap: wrap;//默认换行
            figure{
                width: 30%;
                margin: 5px; 
                img{
                    width: 100%;
                    box-shadow: 0 0 8px口#999;
                    border-radius: 5px;
                }
            }
        }
    } 

    .content {
        font-size: 13px;
        line-height: 30px;
    }

}

</style>