import { INCREMENT } from './mutations-types';
export default {//方法   使用浏览器插件devtools可捕捉mutations的变化
    //如果要操作更改 store 中的 state 值，必须通过调用 mutations 提供的方法，
    // increment(state) {
    //     state.counter++
    // },
 [INCREMENT](state) {//官方推荐写法定义一个常量代替，定义文件是mutations-types.js,此js文件须在本文件和调用此方法文件中引入
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    // incrementCount(state,count) {//普通提交封装下的写法
    //     state.counter += count
    // },
    incrementCount(state,payload) {//特殊提交封装下的写法
        state.counter += payload.count
    },
    addStudent(state,stu) {
        state.students.push(stu)
    },
    updateInfo(state) {
        state.Info.name = 'coderwhy'//在state中初始化了的属性直接更改可以实现响应式
        // state.Info['address'] = '洛杉矶'
        //添加没有在state中初始化的值不可以实现响应式，除非以push/pop等方法或者Vue.set的方式将属性值添加至响应式系统中
        Vue.set(state.Info,'addresst','洛杉矶')
        delete state.Info.age//直接删除属性也无法做到响应式可以使用Vue.delete
        Vue.delete(state.Info,'age')
    }
    
}