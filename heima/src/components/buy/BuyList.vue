<template>
<div class="buylist-container">
    
    <router-link tag='div' :to="'/home/buyinfo/' + item.id"  class="buylist-item" v-for="item in buylist" :key="item.id">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
            <p class="price">
                <span class="now">￥{{item.sell_price}}</span>
                <span class="old">￥{{item.market_price}}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩余{{item.stock_quantity}}件</span>
            </p>
        </div>
    </router-link>
    <mt-button type='danger' size='large' @click="getMoreList()">加载更多</mt-button>

</div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data() {
        return {
         buylist: [],
         pageIndex: 1,
        }
    },
    created() {
       this.getBuyList();
    },
    methods: {
        getBuyList() {
            this.$http.get('api/getgoods/?pageIndex ' + 'this.pageIndex+1').then(result => {
                console.log(result.body);
                if(result.body.status === 0) {
                  
                   this.buylist = result.body.message
                }else {
                 Toast('商品列表获取失败')
                }
            })
        },
        getMoreList() {
          this.pageIndex++
          this.$http.get('api/getgoods/?pageIndex ' + 'this.pageIndex').then(result => {
                console.log(result.body);
                if(result.body.status === 0) {
                   this.buylist = this.buylist.concat(result.body.message);
                }else {
                 Toast('商品列表获取失败')
                }
            })
        }
    }
}
</script>    
<style lang="scss" scoped>
.buylist-container {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .buylist-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>