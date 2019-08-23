<template>
  <div id="app">
    <div id="nav">
      <!-- 顶部header区域 -->
      <mt-header fixed title="黑马项目">
        <span slot='left' @click='goBack' v-show='flag'>
          <mt-button icon='back'>返回</mt-button>
        </span>
      </mt-header>
    </div>

    <transition name='view'>
      <router-view/>
    </transition>

    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-z" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-z" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-z" to="shopcar">
				<span class="mui-icon mui-icon-extra  mui-icon-extra-cart "><span class="mui-badge" id='badge'>{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
        
			</router-link>
			<router-link class="mui-tab-item-z" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
    }
  },
  created() {
    this.flag = this.$route.path ==='/home'? false : true;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    '$route.path':function(newVal) {
      if(newVal ==='/home') {
        this.flag =false;
      
      }
      else {
        this.flag = true;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  .mint-header {
    z-index: 99;
  }
  .mint-header-title {
    margin-bottom: 0;
  }
  .view-enter-active,.view-leave-active{
  
    transition:opacity all .5s ease
  }
  .view-enter {
    opacity:0;
    transform: translateX(100%);
    
  }
  .view-leave-to{
    opacity:0;
    transform: translateX(-100%);
    
  }

  .mui-bar-tab .mui-tab-item-z.mui-active {
    color: #007aff;
  }

  .mui-bar-tab .mui-tab-item-z {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item-z .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-z .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }


}


</style>
