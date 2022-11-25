<template>
    <div class="index">
        <div class="container">
            <div class="count-table" v-show="data.showTable">
                <el-table :data="data.rebornCount" size="small" style="width: 100%; font-weight: bold;">
                    <el-table-column prop="times" label="总次数" style="width: auto;" />
                    <el-table-column prop="非洲" label="非洲" width="auto" />
                    <el-table-column prop="欧洲" label="欧洲" width="auto" />
                    <el-table-column prop="亚洲" label="亚洲" width="auto" />
                    <el-table-column prop="北美洲" label="北美洲" width="auto" />
                    <el-table-column prop="南美洲" label="南美洲" width="auto" />
                    <el-table-column prop="大洋洲" label="大洋洲" width="auto" />
                    <el-table-column prop="南极洲" label="南极洲" width="auto" />
                </el-table>
            </div>
            <el-table :data="data.rebornLog" size="small" stripe style="width: 100%; height: 80%;"
                v-show="data.showTable">
                <el-table-column prop="times" label="投胎次数" sortable style="width: auto;" />
                <el-table-column prop="continent" label="地区" sortable width="auto" />
                <el-table-column prop="name" label="国家" sortable width="auto" />
            </el-table>
            <div class="reborn-botton">
                <el-button @click="reborn()">投胎（100功德每次）</el-button>
            </div>
        </div>

    </div>


</template>
  
<script>
import { reactive, computed, watchEffect, onMounted } from 'vue'
import axios from 'axios'          //引入axios
import data1 from './result.json'
import { useStore } from 'vuex'
export default {
    //组件名
    name: 'TemplateHope2',
    setup() {
        const store = useStore()
        let data = reactive({
            cdata: {},
            coordinate: [104.195397, 35.86166], //China
            percentArray: null,
            showTable: false,
            times: 0,
            continentDict: {
                'AF': '非洲',
                'EU': '欧洲',
                'AS': '亚洲',
                'OA': '大洋洲',
                'NA': '北美洲',
                'SA': '南美洲',
                'AN': '南极洲'
            },
            rebornCount: [{
                'times': 0,
                '非洲': 0,
                '欧洲': 0,
                '亚洲': 0,
                '大洋洲': 0,
                '北美洲': 0,
                '南美洲': 0,
                '南极洲': 0
            }],
            rebornLog: [],
            zoom: 1.25,
            center: [17.228331, 26.3351],

        })



        //生命周期函数，
        //onMounted：在初始化页面完成后执行
        onMounted(() => {
            data.cdata = data1

        })


        function reborn() {
            let total = 100000

            if (data.percentArray == null) {

                data.percentArray = new Array();
                for (let i = 0; i < data.cdata.length; i++) {
                    let percent = data.cdata[i]['birth_rate'] * 1000
                    for (let j = 0; j < percent; j++) {
                        data.percentArray.push(i)
                    }
                }

            }




            let rand = Math.floor(Math.random() * total)
            let result = data.cdata[data.percentArray[rand]]


            data.times += 1
            let temp_dict = {}
            temp_dict['times'] = data.times
            temp_dict['name'] = result['cn']
            temp_dict['continent'] = data.continentDict[result['continent']]
            data.rebornLog.unshift(temp_dict)

            data.rebornCount[0]['times'] = data.times
            data.rebornCount[0][data.continentDict[result['continent']]] += 1
            data.showTable = true
            data.zoom = 2.0

            store.commit('gd', -100)//功德
            window.localStorage.setItem('muyutime', store.state.gongde)   //存到本地




        }


        //数据和函数都要返回
        return {
            data,
            reborn,
        }
    },



}
</script>

<style scoped>
.container {
    width: 760px;
    height: 50%;
    position: relative;


}

.count-table {
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translate(-50%, 0);
}
.reborn-botton {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
}
</style>
  