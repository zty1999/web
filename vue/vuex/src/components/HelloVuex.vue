<template>
  <div id="HelloVuex">
    
    <h2>我是HelloVuex内容</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.ageMore20}}</h2>
    <h2>{{$store.getters.ageMore20length}}</h2>
    
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  data() {
    return {
      
    }
  },
  
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>