<template>
  <div id="app">
    <hello-vuex />
    <h2>App modules</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改muddleA里的名字 </button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>Info:{{$store.state.Info}}</h2>
    <button @click='updateInfo'>修改Info</button>    
    <button @click='addition'>+</button>
    <button @click='addcount(5)'>+5</button>
    <button @click='addcount(10)'>+10</button>
    <button @click='addStudent'>添加学生</button>
    <button @click='subtraction'>-</button>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.ageMore20}}</h2>
    
  </div>
</template>

<script>
import HelloVuex from '@/components/HelloVuex'
import {
    INCREMENT
  } from './store/mutations-types'
export default {
  name: 'App',
  data() {
    return {
      message: '我是app组件',
      
    }
  },
  // computed: {
  //   ageMore20() {
  //   // return this.$store.state.students.filter(s => {
  //   //   return s.age >=20;
  //   // });
  //   return this.$store.state.students.filter(s => s.age>= 20)
  //   }
  // },
  methods: {
    addition() {
      // this.$store.commit('increment')
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')

    },
    addcount(count) {//payload负载
    //1.普通的提交封装  提交count
      // this.$store.commit('incrementCount',count);
      //2.特殊的提交封装  提交整个commit对象
      this.$store.commit({
        type: 'incrementCount',
        count,
        age: 23,
      })
    },
    addStudent() {
      const stu = {id: 114, name: "alin",age: 22}
      this.$store.commit('addStudent',stu)
    },
    updateInfo() {
      // this.$store.commit('updateInfo')
      // 为了让操作经过action：
      // 方法1:
      // this.$store.dispatch('aupdateInfo',{
      //   message: '我是携带的信息',
      //   sucess: () => {
      //     console.log('里面已经完成了')
      //   }
      // })
      //方法2：
      this.$store
      .dispatch('aupdateInfo','我是携带的信息')
      .then((res=> {
        console.log('里面完成了提交')
        console.log(res);
      }))
    },
    updateName() {
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('bupdateInfo')
    }
  },
  components: {
    HelloVuex
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
