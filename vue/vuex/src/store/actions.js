
export default {
    //用来进行异步操作   默认属性context
        // 方法1：
        // aupdateInfo(context,payload) {
        //     setTimeout(() => {
        //         context.commit('updateInfo')
        //         console.log(payload.message)
        //         playload.success()
        //     },1000)
        // }
        // 方法2：
        updateInfo(context,payload) {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    context.commit('updateInfo')
                    console.log(payload)
                    resolve('1111')
                },1000)
            })
        }
}