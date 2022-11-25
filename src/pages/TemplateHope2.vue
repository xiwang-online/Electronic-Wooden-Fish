<template>
  <h1>标题2</h1>
  <h2>路由</h2>

  <h2>读取vuex数据:count:{{ $store.state.count }}</h2>

  <div v-for="value in data.book" :key="value.id">
    <h1>{{ value.id }}</h1>
    <h1>{{ value.bookname }}</h1>
  </div>

</template>

<script>
import { reactive, computed, watchEffect, onMounted } from 'vue'
import axios from 'axios'          //引入axios
export default {
  //组件名
  name: 'TemplateHope2',
  setup() {
    let data = reactive({
      book: {}
    })



    //生命周期函数，
    //onMounted：在初始化页面完成后执行
    onMounted(() => {
      axios.get('api/book', {          //前缀在main.js中设置
        params: {
          action: 'list_book'
        }
      }).then(res => {
        //console.log(res.data);
        data.book = res.data.retlist
      }, err => {
        console.log(err);
      })
    })


    //数据和函数都要返回
    return {
      data,
    }
  },



}
</script>
