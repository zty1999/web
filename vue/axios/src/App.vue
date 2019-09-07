<template>
  <div id="app">
    
    <div>------------------{{result}}</div>
    <router-view/>
  </div>
</template> 

<script>
import HelloWorld  from './components/HelloWorld';
import axios  from 'axios';
export default {
  name: 'App',
  data() {
    return {
      result: '',
    }
    
  },
  created() {
    axios({
      url: 'http://123.207.32.32:8000/api/v1/home/multidata'
    }).then(res => {
      console.log(res);
      this.result = res;
    })
  },
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
