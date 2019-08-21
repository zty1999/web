<template>
    <div>
        <mt-swipe :auto="2000">
            <!-- 谁使用此组件谁为我们传递值 -->
            <mt-swipe-item v-for="item in slideShowList" :key='item.img'>
                <img :src="item.img" alt="" :class="{'full': isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props: ['slideShowList','isfull']
}
</script>
<style lang="scss" scoped>
.mint-swipe {
    
    height: 200px;
    // .mint-swipe-item:nth-child(1) {
    //     background: red;
    // }
    .mint-swipe-item {
        text-align: center;
        // &:nth-child(2) {
        //     background: blue;
        // }
        //   &:nth-child(3) {
        //     background: blue;
        // }
        img {
            // width: 100%;
            height: 100%;
        }
    
    }
}
.full {
    width: 100%;
}
</style>