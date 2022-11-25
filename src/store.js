import { createStore } from 'vuex'

export default createStore({
    state: {       // 准备state——用于存储数据
        gongde:0
    },

    actions: {   // 准备actions——用于响应组件中的动作
    },


    mutations: {    // 准备mutations——用于操作数据（state）
        gd(state,num){
            state.gongde = state.gongde + num
        }
    },

})
