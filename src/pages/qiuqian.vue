<template>
    <div class="main">
        <div v-if="data.showtc" class="tc">
            <div class="title">{{ data.qnow["title"] }}</div>
            <div class="content">{{ data.qnow["content"].substr(0, 16) }}</div>
            <div class="content">{{ data.qnow["content"].substr(16, 16) }}</div>
        </div>
        <div v-if="data.showj" class="j">
            <div class="shiyi">诗意：{{ data.qnow["诗意"]}}</div>
            <div class="jieyue">解曰：{{ data.qnow["解曰"]}}</div>
        </div>

        <el-button v-if="!data.showtc" @click="qiu">求签（500功德一次）</el-button>
        <el-button class="jieb" v-if="data.showtc==1 && data.showj==0" @click="jie">解签（1000功德一次）</el-button>
    </div>

</template>
  
<script>
import { reactive, computed, watchEffect, onMounted } from 'vue'
import qian from './qian.json'
import axios from 'axios'          //引入axios
import { useStore } from 'vuex'

export default {
    //组件名
    name: 'qiuqian',
    setup() {
        const store = useStore()
        let data = reactive({
            qdata: [],  //全部签文数据
            qnow: {},    //当前签文数据
            showtc: 0,   //显示标题和内容
            showj: 0,   //显示解签

        })



        //生命周期函数，
        //onMounted：在初始化页面完成后执行
        onMounted(() => {
            data.qdata = qian

        })

        function qiu() {
            let rand = Math.floor(Math.random() * 100)
            data.qnow = data.qdata[rand]
            data.showtc = 1
            store.commit('gd', -500)//功德
            window.localStorage.setItem('muyutime', store.state.gongde)   //存到本地

        }
        function jie() {
            data.showj = 1
            store.commit('gd', -1000)//功德
            window.localStorage.setItem('muyutime', store.state.gongde)   //存到本地

        }


        


        //数据和函数都要返回
        return {
            data,
            qiu,
            jie
        }
    },



}
</script>
<style scoped>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /*元素垂直排列*/
    /*水平垂直居中*/
    align-items: center;
    justify-content: center;
}

.title {
    color: white;
    font-size: 30px;
    margin: 20px 0;
}

.content {
    color: white;
    font-size: 24px;
    margin:  10px 0;

}

.tc {
    display: flex;
    flex-direction: column;
    /*元素垂直排列*/
    /*水平垂直居中*/
    align-items: center;
    justify-content: center;

}

.shiyi {
    color: #cecece;
    font-size: 18px;
    margin: 10px 0;

}
.jieyue {
    color: #cecece;
    font-size: 18px;
    margin: 10px 0;

}
.jieb {
    margin: 50px 0;
}
</style>

  