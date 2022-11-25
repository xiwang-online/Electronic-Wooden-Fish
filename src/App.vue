<template>
  <div class="index">
    <div class="con">
      <RouterView></RouterView>
      <div class="total">功德：{{ $store.state.gongde }}</div>
      <div class="butBox">
        <img src="./assets/muyu.png" class="but" @click="muyu">
        <img src="./assets/yinyue.png" class="but" @click="music">
        <img src="./assets/shaoxiang.png" class="but" @click="shaoxiang">
        <img src="./assets/qiuqian.png" class="but" @click="qiuqian">
        <img src="./assets/toutai.png" class="but" @click="toutai">
        
        
      </div>


      <!--背景音乐大悲咒-->
      <audio id="music2">
        <source src="./assets/3.mp3" />
      </audio>
    </div>










  </div>









</template>

<script>
import { onMounted, reactive } from 'vue'
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
export default {
  name: 'App',

  setup() {
    const router = useRouter()
    const store = useStore()
    let data = reactive({
      music: 0,



    })


    onMounted(() => {
      //判断本地是否存有次数，有的话赋值给time，没有的话设为0
      if (localStorage.getItem('muyutime') != null) {
        store.commit('gd', localStorage.getItem('muyutime') * 1)
      } else {
        window.localStorage.setItem('muyutime', 0)
      }


    })


    

    function music() {
            if (data.music == 0) {
                data.music = 1
                var audio = document.getElementById('music2');//自动的音乐
                audio.play()
            } else {
                data.music = 0
                var audio = document.getElementById('music2');//自动的音乐
                audio.pause();      //音乐停止
            }
        }

        function shaoxiang() {
          router.push('/shaoxiang')

        }
        function qiuqian() {
          router.push('/qiuqian')

        }
        function muyu() {
          router.push('/')

    }
    function toutai() {
          router.push('/toutai')

    }










    return {
      data,
      muyu,
      music,
      shaoxiang,
      qiuqian,
      toutai

    }

  }

}
</script>

<style scoped>
.con {

  width: 50%;
  height: 100%;
  position: relative;
}

.butBox {
  display: flex;
  /*水平垂直居中*/
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);


}



.total {
  color: white;
  position: absolute;
  bottom: 130px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 24px;
}



.but {
  width: 50px;
  height: 120px;
  margin: 0 30px;
  cursor: pointer;
}

.but:hover {
  width: 60px;
  height: 120px;
  margin: 0 25px;
}
.but:active {
  width: 50px;
  height: 120px;
  margin: 0 30px;

}
</style>
