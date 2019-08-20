<template>
<div class="newsinfo-container">
<h3 class="title">{{newsinfo.title}}</h3>
<p class="subtitle">
    <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
    <span>阅读量：{{newsinfo.click}}</span></p>
<hr>
<div class="content" v-html="newsinfo.content"></div>
<!-- <Comment></Comment> -->
<!-- <router-view></router-view> -->
<v-comment :id="this.id"></v-comment>
</div>
</template>
<script>
import Comment from '../subcomponents/Comment.vue'
export default {
    data() {
        return{
            id: this.$route.params.id,// 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
            newsinfo: {} // 新闻对象
        }
    },
    created() {
    this.getNewsInfo();
    },
    methods: {
        getNewsInfo() {
            this.$http.get("api/getnew/" + this.id).then(result => {
                console.log(result.body);
                if(result.body.status === 0) {
                    this.newsinfo = result.body.message[0];
                }
                else{
                    Toast("获取新闻失败！");
                }
            })
        }
    },
    components: {
         'v-comment': Comment
    }
}
</script>
<style lang="scss" >
.newsinfo-container {
    padding: 0 4px;
    .title {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        
    }
    .subtitle {
        font-size: 13px;
        color: #bababa;
        display: flex;
        justify-content: space-between;
    }
    .content {
        font-size: 14px;
        width: 100%;
    }
}
</style>