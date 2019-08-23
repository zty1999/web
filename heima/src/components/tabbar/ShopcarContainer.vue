<template>
    <div class="shopcar-container">
        <div class="commodity-list">
        <!-- 商品列表项区域 -->
        <div class="mui-card" v-for="item in shopcarlist" :key="item.id">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
				<mt-switch v-model="$store.getters.getbuySelected[item.id]"
                @change="selectedChanged(item.id, $store.getters.getbuySelected[item.id])"></mt-switch>
                <img :src="item.thumb_path" alt="图片加载失败">
                <div class="info">
                    <h1>{{item.title}}</h1>
                    <p>
                        <span class="price">￥{{item.sell_price}}</span>
                        <shopcarnumbox :initcount="$store.getters.getbuyCount[item.id]" :buysid="item.id"></shopcarnumbox>
                <!-- 问题：如何从购物车中获取商品的数量呢 -->
                <!-- 1. 我们可以先创建一个 空对象，然后循环购物车中所有商品的数据， 把 当前循环这条商品的 Id， 作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象： { 88: 2, 89: 1, 90: 4 } -->
               
                        <a href="#" @click.prevent="remove(item.id, i)">删除</a>
                    </p>
                    
                </div>
                </div>
			</div>
		</div>
        </div>
        <!-- 结算区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner account">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>
                            已勾选商品<span style="color:red">{{$store.getters.getbuyCountAndAmount.count}}</span>  件， 
                            <span style="color:red">￥{{$store.getters.getbuyCountAndAmount.amount}}</span> 元
                        </p>
                    </div>
                <mt-button type='danger' >去结算</mt-button>    
                </div>
               
			</div>
		</div>
        <p>{{ $store.getters.getbuySelected }}</p>
    </div>

</template> 
<script>
import shopcarnumbox from '../subcomponents/ShopCar_NumBox'
export default {
    data() {
        return {
            shopcarlist: [] // 购物车中所有商品的数据
        }
    },
    created() {
        this.getshopcarlist();
    },
    methods: {
        getshopcarlist() {
             // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
            var idArr = [];
            this.$store.state.car.forEach(item => idArr.push(item.id));
             // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
            if (idArr.length <= 0) {
                return;
            }
            // 获取购物车商品列表
            this.$http
            .get("api/goods/getshopcarlist/" + idArr.join(","))
            .then(result => {
                if (result.body.status === 0) {
                    this.shopcarlist = result.body.message;
                }
            });
        },
        remove(id, index) {
            // 点击删除，把商品从 store 中根据 传递的 Id 删除，同时，把 当前组件中的 shopcarlist 中，对应要删除的那个商品，使用 index 来删除
            this.shopcarlist.splice(index, 1);
            this.$store.commit("removeFormCar", id);
        },
        selectedChanged(id, val) {
            // 每当点击开关，把最新的 快关状态，同步到 store 中
            // console.log(id + " --- " + val);
            this.$store.commit("updateshopcarSelected", { id, selected: val });
        }
    },
    components: {
        shopcarnumbox
    }
}
</script>  
<style lang="scss" scoped>
.shopcar-container {
    background-color: #eee;
    overflow: hidden;
    .commodity-list {
        .mui-card-content-inner {
            display: flex;
            align-items: center;
        }
        img {
            width: 60px;
            height: 60px;
        }
        h1 {
            font-size: 13px;
        }
        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .price {
                color: red;
                font-weight: bold;
            }
        }
        
    }
    .account {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
}
</style>