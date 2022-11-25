<template>
    <div class="index">
        <div id="container">
            <img class="muyu" src="../assets/11.png" @click="play">

            <!--手动的棍子-->
            <img class="gunzi" v-if="!data.auto" src="../assets/22.png">
            <!--自动的棍子-->
            <img class="gunzi1" v-if="data.auto" src="../assets/22.png">
            <!--木鱼声-->
            <audio id="music">
                <source src="../assets/1.mp3" />
            </audio>
            <!--1s延迟木鱼声-->
            <audio id="music1">
                <source src="../assets/2.mp3" />
            </audio>
            <div id="jia1"></div>
            <el-button class="bu" @click="autob">{{ data.auto ? "手动" : "自动" }}</el-button>
        </div>
    </div>




</template>
  
<script>
import { reactive, computed, watchEffect, onMounted, watch, onBeforeUnmount } from 'vue'
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
export default {
    //组件名
    name: 'test1',
    props: [],


    setup() {
        const router = useRouter()
        const store = useStore()
        //context用于接受自定义事件和插槽 
        //数据
        let data = reactive({
            music: 0,
            Intervalflag: 0,
            auto: 0
        })

        //生命周期函数，
        //onMounted：在初始化页面完成后执行
        onMounted(() => {


        })

        //退出前要将定时器销毁
        onBeforeUnmount(() => {
            clearInterval(data.Intervalflag);

        })

        function play() {
            if (data.auto == 0) {  //手动
                var audio = document.getElementById('music');//手动的音乐
                audio.currentTime = 0;
                audio.play();                   //播放音乐
                store.commit('gd', 1)//功德加1
                window.localStorage.setItem('muyutime', store.state.gongde)   //存到本地

                var jia = document.getElementById("jia1");
                var divv = document.createElement("div");
                divv.classList.add("show1")
                var jiajia = jia.appendChild(divv)
                setTimeout(() => {
                    jia.removeChild(jiajia)
                }, 2000);



            } else {              //自动
                var audio = document.getElementById('music1');//自动的音乐
                audio.currentTime = 0;
                audio.play();      //播放音乐
                store.commit('gd', 1)//功德加1
                window.localStorage.setItem('muyutime', store.state.gongde)   //存到本地
                var jia = document.getElementById("jia1");
                var divv = document.createElement("div");
                divv.classList.add("show2")
                var jiajia = jia.appendChild(divv)
                setTimeout(() => {
                    jia.removeChild(jiajia)
                }, 4000);
            }
        }


        function autob() {
            if (data.auto == 0) {
                data.auto = 1
                play()    //setInterval是两秒后开始执行，所以要先执行一次
                data.Intervalflag = setInterval(play, 2000);
            } else {
                clearInterval(data.Intervalflag);
                data.auto = 0
                var audio = document.getElementById('music1');//自动的音乐
                audio.pause();      //音乐停止


            }

        }

        



        //数据和函数都要返回
        return {
            data,
            play,
            autob

        }
    },







}
</script>
<style scoped>
#container {
    width: 600px;
    height: 500px;
    position: relative;
    transform: translate(0, -40px);


}

.muyu {
    width: 400px;
    position: absolute;
    bottom: 75px;
    left: 100px;

}

.gunzi {
    height: 100px;
    position: absolute;
    left: 280px;
    top: 80px;
    transform: rotateZ(30deg);
    transition: transform 0.5s cubic-bezier(.85, .1, .89, .65);

}

.muyu:active+.gunzi {
    transform: rotateZ(12deg);
    transition: 0.05s
}



.gunzi1 {
    height: 100px;
    position: absolute;
    left: 280px;
    top: 80px;
    transform: rotateZ(30deg);
    animation: run 1s alternate infinite cubic-bezier(.85, .1, .89, .65);
}

.bu {
    position: absolute;
    bottom: 50px;
    right: 10px;

}


@keyframes run {
    from {
        transform: rotateZ(30deg);
    }

    to {
        transform: rotateZ(12deg);
    }
}
</style>
<style>
.show1::after {
    content: "功德+1";
    color: #cecece;
    font-size: 28px;
    position: absolute;
    top: 150px;
    left: 240px;
    animation: run1 2s 0.1s ease-in;
}

.show2::after {
    content: "功德+1";
    color: #cecece;
    font-size: 28px;
    position: absolute;
    top: 180px;
    left: 240px;
    animation: run1 2s 1s ease-in;
}



@keyframes run1 {
    from {
        top: 150px;
    }

    to {
        top: -100px;
    }
}
</style>