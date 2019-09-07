<template>
    <div id='tab-bar'>
        <slot></slot>    
      
    </div>
</template>
<script>

export default {
    name: 'TabBar',
   
}
</script>
<style scoped>

#tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  /* 设置right也为0使tabbar占据页面整个的宽度 */
  bottom: 0;
  display: flex;  
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  /* 给tabbar设置阴影使颜色过度较为平滑 */
} 

</style>