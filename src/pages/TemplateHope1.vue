<template>
<!--使用组件-->
  <!--hello:自定义时间名，demo:自定义事件调用的函数-->
  <TemplateHope @hello="demo" msg="12345" />
  <RouterLink to="/TemplateHope2">路由</RouterLink>
</template>

<script>
import TemplateHope from '../components/TemplateHope.vue'  //引入组件
export default {
  //组件名
  name: 'TemplateHope1',
  components: {
    TemplateHope    //注册组件
  },

  setup() {
    function demo(value) {
      alert("自定义事件被触发，参数为" + value)
    }

    return {
      demo
    }

  }

  
}
</script>
