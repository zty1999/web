<template>
  <div id="app"><!--vue的模板里面所有的内容要被-一个根节点包含起来-->

<header> <section><input class="inp" type="text" v-model="todo" @keydown="doAdd($event)"></section></header>


<section>
  <div>



    <h2>进行中</h2>



    <ul class="begin">
      <li v-for="(item,key) in list" v-if="!item.checked"><input type="checkbox" v-model="item.checked " @change="saveList()">{{item.title}}--- <button @click="removeData(key)">删除</button> </li>
    </ul>


    <h2>已完成</h2>

    <ul class="finish">
      <li v-for="(item,key) in list" v-if="item.checked"><input type="checkbox" v-model="item.checked ">{{item.title}}--- <button @click="removeData(key)">删除</button> </li>
    </ul>
  </div>
</section>




<footer><section>Copyright © 2014 todolist.cn clear</section></footer>

  </div>
</template>

<script>


import storage from 'model/storage.js ';
console.log(storage);
export default {
  name: 'app',
  data (){/*业务逻辑里面定义的数据*/
    return {
      todo:'',
      list:[],
    }
  },
  methods: { /*放方法的地方*/
    doAdd(e) {
      console.log(e.keyCode)
      // alert('zengjia');
      // 1.获取文本框输入的值
      // 2.把文本框的值push到list里面
      if(e.keyCode==13){//敲击回车键
        //1、获取文本框输入的值   2、把文本框的值push到list里面
        this.list.push({
          title: this.todo,
          checked: false
        });
        this.todo='';
      }
      localStorage.setItem('key',JSON.stringify(this.list));
    },
    removeData(key) {
      // alert('删除');
      this.list.splice(key,1);//.splice js操作数组的方法，在列表中删除数组中的一个（依据传过来的key值索引）
      localStorage.setItem('key',JSON.stringify(this.list));
    },
    saveList() {
      localStorage.setItem('list',JSON.stringify(this.list));
    }
  },
  mounted() {/*生命周期函数    vue页面刷新就会触发*/
    var list=JSON.parse(localStorage.getItem('list'));
    if (list) {/*注意判断*/
      this.list = list;
    }
  },
}
</script>
<style>
  body {margin:0;padding:0;font-size:16px;background: #CDCDCD;}
  #app {

    margin: 0 auto;

  }
  header {height:50px;background:#333;background:rgba(47,47,47,0.98);}

  .inp {
    float: right;
    width: 60%;
    height:24px;
    margin-top:12px;
    text-indent:10px;
    border-radius:5px;
    box-shadow: 0 1px 0 rgba(255,255,255,0.24), 0 1px 6px rgba(0,0,0,0.45) inset;
    border:none
  }

  section{    width: 40%;margin:0 auto;}
  button {
    border: none;
    background: url("");
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {

    margin: .5rem 0;
    padding: 5px 0;
    border-radius:5px;
  }
  li button {
    float: right;
  }
  .begin li {

    border-left: 5px solid #0b2e13;
    background: white;
  }
   .finish li{

     border-left: 5px solid #6c757d;
       background:#eee;

   }
  footer {
    text-align: center;
  }
</style>
