<template>
<div class="comment-container">
<h4>发表评论</h4>
<hr>
<textarea   placeholder="请输入要bb的内容（最多吐槽120词）" maxlength='120'></textarea>
<mt-button type='primary' size="large" @click="getout()">发表评论</mt-button>
<div class="cmt-list">
    <div class="cmt-item" v-for="(item,n) in comments" :key="item.id">
        <div class="cmt-title">
            第{{n + 1}}楼&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">
                {{item.content ==='underfined' ? '此用户很懒，什么都没说':item.content}}
        </div>
    </div>
</div>
<mt-button type='danger' size="large" plain  @click="getMore()">加载更多</mt-button>

</div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return{
          comments: [],
          pageIndex: 1,

        }
    },
    created() {
        this.getComments();
    },
    methods: {
        getComments() {
            this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result => {
                if(result.body.status === 0) {
                    console.log(result.body)
                    this.comments = this.comments.concat(result.body.message);
                }
                else {
                    Toast('评论获取失败')
                }
            })
        },
        getMore() {
            this.pageIndex++;
            this.getComments();
        },
        getout() {
      
        }
    },
    props: ['id']
}
</script>
<style lang="scss" >
.comment-container {
    h3 {
        font-size: 18px;
    }
    text-area {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list {
        margin: 10px 0;
        .cmt-item {
            font-size: 13px;
            .cmt-title {
                background: #ccc;
                line-height: 30px;
            }
            .cmt-body {
                line-height: 30px;
                text-indent: 2em;

            }
        }
    }
}

</style>