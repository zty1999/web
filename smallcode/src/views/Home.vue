<template>
  <div class="home">
    <h2>我是首页</h2>
    <router-link to='/home/homeNews'>新闻</router-link>
    <router-link to='/home/homeMessage'>消息</router-link>
<h2>ajfon</h2>
    <router-view></router-view>
   
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNews from '@/components/HomeNews.vue'
import HomeMessage from '@/components/HomeMessage.vue'

export default {
  name: 'home',
  components: {
    HomeNews,
    HomeMessage
  }
}
</script>
