<template>
  <div class="container">
    <div class="b">
      <el-select v-model="value1" placeholder="選擇圖片" @change="clearphoto">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <br />
      <br />
      <br />
      <br />
      <div class="back">
        <img :src="img" alt />
      </div>
    </div>
    <div class="b">
      <div class="aaa">
        <el-select v-model="value2" placeholder="選擇模型" @change="clearphoto">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div>
          <el-radio v-model="radio3" label="1">彩色</el-radio>
          <el-radio v-model="radio3" label="2">黑白</el-radio>
        </div>
        <div>
          <el-radio v-model="radio4" label="1">50</el-radio>
          <el-radio v-model="radio4" label="2">100</el-radio>
        </div>
      </div>

      <div class="back">
        <img :src="asd" alt />
      </div>
    </div>
    <button @click="as" class="result-but">查看結果</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const options1 = ref([
  {
    value: '选项1',
    label: '圖片一',
    img: 'https://upload.cc/i1/2021/12/05/qDIQc9.png',
    reimg: {
      img1: 'https://upload.cc/i1/2021/12/05/KlmJos.png',
      img2: '圖片一模型二',
    }
  },
  {
    value: '选项2',
    label: '圖片二',
    img: 'https://upload.cc/i1/2021/12/08/LumTMJ.png',
    reimg: {
      img1: 'https://upload.cc/i1/2021/12/08/4DVZz3.png',
      img2: '圖片二模型二',
    }
  },
  {
    value: '选项3',
    label: '圖片三',
    img: 'https://upload.cc/i1/2021/12/08/wdTUm7.png',
    reimg: {
      img1: 'https://upload.cc/i1/2021/12/08/SHK50G.png',
      img2: '圖片三模型二',
    }
  },
  {
    value: '选项4',
    label: '圖片四',
    img: 'https://upload.cc/i1/2021/12/08/dvjPWG.png',
    reimg: {
      img1: 'https://upload.cc/i1/2021/12/08/rjqT0b.png',
      img2: '圖片四模型二',
    }
  },
  {
    value: '选项5',
    label: '圖片五',
    img: 'https://upload.cc/i1/2021/12/08/Xro9kN.png',
    reimg: {
      img1: 'https://upload.cc/i1/2021/12/08/FSiba7.png',
      img2: '圖片五模型二',
    }
  },
  {
    value: '选项6',
    label: '圖片六',
    img: 'https://upload.cc/i1/2021/12/08/9UP3wl.png',
    reimg: {
      img1: 'https://upload.cc/i1/2021/12/08/PTMf2p.png',
      img2: '圖片六模型二',
    }
  },
  {
    value: '选项7',
    label: '圖片七',
    img: 'https://upload.cc/i1/2021/12/08/mNHfg0.png',
    reimg: {
      img1: 'https://upload.cc/i1/2021/12/08/dxIc0W.png',
      img2: '圖片七模型二',
    }
  },
  {
    value: '选项8',
    label: '圖片八',
    img: 'https://upload.cc/i1/2021/12/08/WPGgNX.png',
    reimg: {
      img1: 'https://upload.cc/i1/2021/12/08/JsVGdq.png',
      img2: '圖片八模型二',
    }
  },
  {
    value: '选项9',
    label: '圖片九',
    img: 'https://upload.cc/i1/2021/12/08/nuOLih.png',
    reimg: {
      img1: 'https://upload.cc/i1/2021/12/08/zu4Gad.png',
      img2: '圖片九模型二',
    }
  },
  {
    value: '选项10',
    label: '圖片十',
    img: 'https://upload.cc/i1/2021/12/08/cVvtAU.png',
    reimg: {
      img1: 'https://upload.cc/i1/2021/12/08/QnePCM.png',
      img2: '圖片十模型二',
    }
  },
])
const value1 = ref("选项1")

const options2 = ref([
  {
    value: 'img1',
    label: '模型一',
  },
  {
    value: 'img2',
    label: '模型二',
  },
  {
    value: 'img3',
    label: '模型三',
  },
])
const value2 = ref("img1")

const a = ref("")
const radio1 = ref("1")
const radio2 = ref("1")
const radio3 = ref("1")
const radio4 = ref("1")

const img = computed(() => {
  return options1.value[options1.value.map(x => x.value).indexOf(value1.value)].img
})

const asd = computed(() => {
  return a.value
})

const as = () => {
  a.value = options1.value[options1.value.map(x => x.value).indexOf(value1.value)].reimg[value2.value]
}

const clearphoto = () => {
  a.value = ""
}
</script>


<style scoped>
.container {
  width: 100%;
  position: relative;
}
.el-select {
  width: 150px;
}
.b {
  width: 50%;
  height: 70%;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
.b:nth-child(1) {
  padding-left: 10%;
}
.b:nth-child(2) {
  padding-right: 10%;
}
.back {
  width: 60%;
  height: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 30px;
  background: rgba(133, 133, 133, 0.205);
}
.back img {
  width: 90%;
}

.result-but {
  width: 100px;
  height: 50px;
  font-size: 1.2em;
  position: relative;
  border-radius: 10px;
}


@media (max-width: 600px) {
  .container {
    height: 150vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .b {
    width: 100%;
    height: 400px;
    margin-top: 50px;
  }
  .b:nth-child(1) {
    padding-left: 0;
  }
  .b:nth-child(2) {
    padding-right: 0;
  }
  .back {
  width: 70%;
  height: 80%;
  margin-top: 0;
}
.back img {
  width: 90%;
}
.result-but {
  margin-top: 30px;
}
}
</style>