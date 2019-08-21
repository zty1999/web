<template>
    <div class="photolist-container">
        <!-- ### 制作顶部滑动条的坑们：
 1. 需要借助于 MUI 中的 tab-top-webview-main.html 
 2. 需要把 slider 区域的 mui-fullscreen 类去掉
 3. 滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化一下：
  + 导入 mui.js 
  + 调用官方提供的 方式 去初始化：
  ```
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

  ```
 4. 我们在初始化 滑动条 的时候，导入的 mui.js ，但是，控制台报错： `Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode`
  + 经过我们合理的推测，觉得，可能是 mui.js 中用到了 'caller', 'callee', and 'arguments' 东西，但是， webpack 打包好的 bundle.js 中，默认是启用严格模式的，所以，这两者冲突了；
  + 解决方案： 1. 把 mui.js 中的 非严格 模式的代码改掉；但是不现实； 2. 把 webpack 打包时候的严格模式禁用掉；
  + 最终，我们选择了 plan B  移除严格模式： 使用这个插件 babel-plugin-transform-remove-strict-mode
    cnpm install babel-plugin-transform-remove-strict-mode -D   然后在babel.config.js文件中加入"plugins": ["transform-remove-strict-mode"]无效，于是更改用
     "ignore": ["./src/lib/mui/js/*.js"]之后，页面不报错，但是仍旧无法滑动。后来以为是win10下chrome浏览器的问题，用edge浏览器尝试可以滑动。结果一段时间后又可以滑动了，可能就是反应慢吧。
     如果滑动时出现警告可添加样式：
      * {
            touch-action: pan-y;
        }
 5. 刚进入 图片分享页面的时候， 滑动条无法正常工作， 经过我们认真的分析，发现， 如果要初始化 滑动条，必须要等 DOM 元素加载完毕，所以，我们把 初始化 滑动条 的代码，搬到了 mounted 生命周期函数中；
 6. 当 滑动条 调试OK后，如果发现， tabbar 无法正常工作了，这时候，我们需要把 每个 tabbar 按钮的 样式中  `mui-tab-item` 重新改一下名字,复制粘贴tabbar的原样式。
 7. 获取所有分类，并渲染 分类列表； -->
        <div id="slider" class="mui-slider ">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
                    <!-- <a class="mui-control-item mui-active" v-for="item in photoCat" :key="item.id" data-wid="tab-top-subpage-1.html">
						{{item.title}}
					</a> -->
					<!-- <a :class="['mui-control-item',item.id == 0 ? 'mui-active':'' ]" v-for="item in photoCat" :key="item.id" @click='getPhotoListByCateId(item.id)'>
						
                        {{item.title}}
					</a>这里使用item.id === 0无效，使用item.id == 0 有效的原因不清楚。 -->
					<a :class="['mui-control-item',item.id == 0 ? 'mui-active':'' ]" v-for="item in photoCat" :key="item.id" @tap='getPhotoListByCateId(item.id)'>
						<!-- 这里使用item.id === 0无效，使用item.id == 0 有效的原因不清楚。 -->
                        {{item.title}}
					</a>
                    <!-- 用@tap替换@click能够解决手机浏览器上切换类别时，原全部中图片不消失的bug(如果出现这个bug的话)，但是@tap只能在mui中使用。 -->
				</div>
			</div>
		</div>
        <ul class="photo-list">
            <router-link tag='li' v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data() {
        return {
            photoCat: [],
            list:[],
        }
    },
    created() {
        this.getPhotoClassify();
        this.getPhotoListByCateId(0);
    },
    methods: {
        getPhotoClassify() {
            this.$http.get('api/getimgcategory').then(result => {
                console.log(result.body);
                if(result.body.status === 0) {
                    result.body.message.unshift({title:'全部',id:'0'})
                   this.photoCat = result.body.message;
                }
                else{
                    Toast("获取图片列表失败！");
                }
            })
        },
        getPhotoListByCateId(cateId) {
            this.$http.get('api/getimages/' + cateId).then(result => {
                console.log(result.body);
                if(result.body.status === 0) {
                   this.list = result.body.message;
                }
                else{
                    Toast("获取图片缩略图失败！");
                }
            })
        }
    },
    mounted() {
        // 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
        mui('.mui-scroll-wrapper').scroll({
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
  	}
}
</script>
<style lang="scss" scoped>
* {
    touch-action: pan-y;
}

.photo-list {
    margin: 0;
    padding: 0 10px;
    list-style: none;

    li { position: relative;
        text-align: center;
        margin-bottom: 10px;
        background-color: #ccc;
        box-shadow: 0 0 9px #999;


        img {
           
           width: 100%; 
           vertical-align: middle;
        }

        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            max-height: 90px;
            padding: 0 5px;
            text-align: left;
            background-color: rgba(0,0,0,.5);
            color: #fff;

            
            .info-title {
                font-size: 16px;

            }
            .info-body {
                font-size: 13px;
            }

        }
    }
   
}
</style>