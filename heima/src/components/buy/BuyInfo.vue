<template>
    <div class="buyinfo-contaier">
        <!-- 半场动画使用钩子函数 -->
        <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                   <swiper :slideShowList="slideShowList" :isfull="false"></swiper>  
				</div>
			</div>
		</div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
			<div class="mui-card-header">{{buyinfo.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <p>市场价：<del>￥{{buyinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class='now_price'>￥{{buyinfo.sell_price}}</span></p>
                    <p>购买数量：<BuyInfo_NumberBox @getcount="getSelectedCount"
                    :max='buyinfo.stock_quantity'></BuyInfo_NumberBox></p>
                    <p>
                        <mt-button type='primary' size='small'>立即购买</mt-button>
                        <mt-button type='danger' size='small' @click="addToShopCar()">加入购物车</mt-button>
                             <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
            <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
            <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
            <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
                    
                    </p>
                </div>
			</div>
		</div>
        <!-- 商品参数区域 -->
       <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <p>商品货号：{{buyinfo.goods_no}}</p>
                    <p>库存情况：{{buyinfo.stock_quantity}}件</p>
                    <p>上架时间：{{buyinfo.add_time | dateFormat}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button type='primary' size='large' plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type='danger' size='large' plain @click="goComment(id)">商品评论</mt-button>                  
            </div>
		</div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'//导入轮播图组件
import BuyInfo_NumberBox from '../subcomponents/BuyInfo_NumberBox.vue'//导入数字选择框组件
export default {
    data() {
        return {
            id: this.$route.params.id,//从路由中获取到的图片id
            slideShowList: [],
            buyinfo: {},
            ballFlag: false,//控制小球隐藏和显示的标识符
            selectedCount: 1//保存用户选中的商品数量，默认为1
        }
    },
    created() {
        this.SlideShow();
        this.getBuyInfo();
    },
    methods: {
        SlideShow() {//获取轮播图内容
            this.$http.get('api/getthumimages/' + this.id).then(result => {
                console.log(result.body);
                if(result.body.status === 0) {
                    //先循轮播图数组的每一项，为item添加img属性，因为轮播图组件中只认识item.img,不认识item.src
                    result.body.message.forEach(item => {
                        item.img = item.src
                    });
                   this.slideShowList = result.body.message;
                }
                else{
                    Toast("获取商品详情页失败！");
                }
            })
        },
        getBuyInfo() {// 获取商品的信息
            this.$http.get('api/goods/getinfo/' + this.id).then(result => {
                console.log(result.body);
                if(result.body.status === 0) {
                
                   this.buyinfo = result.body.message[0];
                }
                else{
                    Toast("获取商品参数失败！");
                }
            })
        },
        goDesc(id) {// 点击使用编程式导航跳转到 图文介绍页面
            this.$router.push({name:'BuyDesc',params:{id}})
        },
        goComment(id) {// 点击跳转到 评论页面
            this.$router.push({name:'BuyComment',params:{id}})
        },
        addToShopCar() {
             //添加到购物车 点击按钮小球出现
            this.ballFlag = !this.ballFlag
        },
        beforeEnter(el) {//从小球初始位置开始
            el.style.transform = "translate(0, 0)";
        },
        enter(el, done) {
            el.offsetWidth;

      // 小球动画优化思路：
      // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
      // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
      // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
      // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
      // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()

      // 获取小球的 在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")//需现在App组件上给徽标一个id="badge"
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            el.style.transition = "all .5s cubic-bezier(.4,-0.3,1,.68)";
            done();
        },
        afterEnter(el) {//动画结束后小球隐藏
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count) {
        // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
            this.selectedCount = count;
            console.log("父组件拿到的数量值为： " + this.selectedCount);
        }
    },
    components: {
        swiper,
        BuyInfo_NumberBox
    }
}
</script>
<style lang="scss" scoped>
.buyinfo-contaier {
    background-color: #eee;
    overflow: hidden;
    .now_price {
        color: red;
    }
    .mui-card-content-inner {
        button{
        margin:  0 5px ; 
            label {
                margin-bottom: 0;
            }
        }
    }
    .mui-card-footer {
        display: block;
        button{
        margin: 15px 0; 
        }
    }
    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 394px;
        left: 145px;
    }
}


</style>