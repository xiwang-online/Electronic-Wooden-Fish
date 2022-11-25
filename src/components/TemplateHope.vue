<template>
  <h1>标题</h1>
  <h2>{{ data.name }}</h2>
  <h2>{{ msg }}</h2>
  <h2>{{ data.nameAge }}</h2>
  <button @click="demo1">按钮</button>
</template>

<script>
import { reactive, computed, watchEffect,onMounted } from 'vue'
export default {
  //组件名
  name: 'TemplateHope',
  //接收参数
  props: ['msg'],
  //接受自定义事件
  emits: ['hello'],

  setup(props, context) {     //接收到的参数需要传入setup才能在setup中使用
    //context用于接受自定义事件和插槽 
    //数据
    let data = reactive({
      name: 'hope',  //基本数据
      age: '189',
      job: {        //对象类型
        type: '前端工程师',
        salary: '1k'

      },
      hobby: ['1', '2', '3']    //数组类型

    })

    //计算属性
    data.nameAge = computed(() => {     //属性直接追加到data中
      return data.name + "-" + data.age

    })

    //监视,watchEffect函数中用到谁就监视谁,被监视的数据变了则执行函数，watchEffect比watch好用
    watchEffect(() => {


    })


    //函数
    function demo1() {
      console.log(data.job),
        console.log(props.msg),
        context.emit('hello', 666)  //触发自定义事件,第一个参数为自定义函数名，第二个参数为要传给调用函数的值

    }



    //生命周期函数，
    //onMounted：在初始化页面完成后执行
    onMounted(()=>{
      console.log("mounted")
    })


    //数据和函数都要返回
    return {
      data,
      demo1,
    }
  },




}
</script>
