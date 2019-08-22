
<template>
    <div class="mui-numbox" data-numbox-min='1'>
    	<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref='numbox'/>
	    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'//注意引入的要是min.js文件，否则点击一次步数为2
export default {
    mounted() {
        mui('.mui-numbox').numbox()//初始化数字选择框组件，官网文档可找到初始化数字输入框代码mui('').numbox()，添加进此组件类名，初始化此组件
    },
    methods: {
        countChanged() {
            // 每当 文本框的数据被修改的时候，立即把 最新的数据，通过事件调用，传递给父组件
            console.log(this.$refs.numbox.value);
            this.$emit("getcount", parseInt(this.$refs.numbox.value));
        }
    },
    props: ['max'],
    watch: {
         // 属性监听
        max: function(newVal, oldVal) {
            // 使用 JS API 设置 numbox 的最大值
            mui(".mui-numbox")
            .numbox()
            .setOption("max", newVal);
        }
    }
}
</script>
<style lang="scss" scoped>


</style>