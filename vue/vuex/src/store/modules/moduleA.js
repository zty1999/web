export default{
    state: {
        name: 'zhangsan'
    },
    mutations: {
        updateName(state,payload) {
            state.name = payload
        }
    },
    actions: {
        bupdateInfo(context) {
            setTimeout(() => {
               context.commit('updateName','wangwu')
                //这里的commit只调用本模板中的数据 
            },1000)
            
        }
    },
    getters: {
        fullname(state) {
            return state.name +'111'
        },
        fullname2(state,getters) {
            return getters.fullname +'222'
        }, 
        fullname3(state,getters,rootstate) {
            return getters.fullname + rootstate.counter
        }
    }
}