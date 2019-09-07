import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
//1.axios基本使用
// axios(config)
// axios({
//   url: 'http://123.207.32.32:8000/api/v1/home/multidata',
//   methods: 'get',//默认为get请求
// }).then(res => {
//   console.log(res);
// })
// axios({
//   url: 'http://123.207.32.32:8000/api/v1/home/data?type=sell&page=3',
  
// }).then(res => {
//   console.log(res);
// })
// axios({
//   url: 'http://123.207.32.32:8000/api/v1/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
  
// }).then(res => {
//   console.log(res);
// })
//2.axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/api/v1/home/multidata'
// }),axios({
//   url: 'http://123.207.32.32:8000/api/v1/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
// .then(results => {
//   console.log(results);
//   console.log(results[0]);
//   console.log(results[1]);
// })

// axios.all([axios({
//   url: 'http://123.207.32.32:8000/api/v1/home/multidata'
// }),axios({
//   url: 'http://123.207.32.32:8000/api/v1/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
// .then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
//axios配置 抽取相同参数
// axios.all([axios({
//   // baseURL: 'http://123.207.32.32:8000/api/v1',
//   url: '/home/multidata'
// }),axios({
//   // baseURL: 'http://123.207.32.32:8000/api/v1',
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
// .then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
//axios配置  全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000/api/v1'
// axios.defaults.timeout = 5000


// axios({
//   url: '/category'
// })

//开发中一般不直接使用全局配置

//4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000/api/v1',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// })
// .then(res => {
//   console.log(res);
// })
// instance1({ 
//   url: '/home/data',
//   params: {
//   type: 'pop',
//   page: 1
//   }
// }).then(res => {
//   console.log(res);
// })


// const instance2 = axios.create({
//   baseURL: '',
//   timeout: 10000,
//   // headers: {}
// })
// instance2({
//   url: '',
  
// }).then(res => {
//   console.log(res)
// })

// 5.封装一个request模块
import {request} from './network/request'


// request({
//   url: '/home/multidata'
// },res => {
//   console.log(res)
// },err => {
//   console.log(err)
// })

// request({
//   baseConfig: {

//   },
//   sucess: function (res) {

//   },
//   failure: function (err) {

//   }
// })

request({
  url: '/home/multidata'
})  .then(res => {
    console.log(res);
    
  })
  .catch(err => {
    console.log(err);
    
  })
