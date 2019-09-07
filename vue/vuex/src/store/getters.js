export default {//类似于单个组件中的计算属性
    powerCounter(state) {
        return state.counter * state.counter
    },
    ageMore20(state) {
        return state.students.filter(s => s.age >= 20)
    },
    ageMore20length(state,getters) {
        return getters.ageMore20.length
    },
    moreAge(state) {
        // return function(age) {
        //     return state.students.filter(s => s.age > age)
        // }
        //可简写为：
        return age => { 
            return state.students.filter(s => s.age > age)
        }
    }
}