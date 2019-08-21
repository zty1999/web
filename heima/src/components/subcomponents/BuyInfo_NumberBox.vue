
<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
    	<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	    <input id="test" class="mui-input-numbox" type="number" value="5" />
	    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'//注意引入的要是min.js文件，否则点击一次步数为2
export default {
    mounted() {
        mui('.mui-numbox').numbox()//初始化数字选择框组件，官网文档可找到初始化数字输入框代码mui('').numbox()，添加进此组件类名，初始化此组件
    }
}
</script>
<style lang="scss" scoped>

</style>