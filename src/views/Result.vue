<template>
  <div class="container">
    <div class="block">
      <div class="sel">
      <el-select v-model="value1" placeholder="選擇圖片" @change="clearphoto">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      </div>

      <div class="back">
        <img :src="img" alt />
      </div>
    </div>

    <div class="block">
      <div class="sel">
        <el-select v-model="value2" placeholder="選擇模型" @change="clearphoto">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
        <div class="radio">
          <el-radio v-model="radio1" label="200" size="large">200</el-radio>
          <el-radio v-model="radio1" label="300" size="large">300</el-radio>
        </div>
      </div>

      <div class="back">
        <img :src="resultImg" alt />
      </div>
    </div>

    <button
      @click="result"
      class="result-but"
      v-loading.fullscreen.lock="fullscreenLoading"
      element-loading-text="running"
      element-loading-background="rgba(100, 100, 100, 0.4)"
    >查看結果</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const fullscreenLoading = ref(false);

const options1 = ref([
  {
    value: 'Image1',
    label: 'Image1',
    img: 'https://upload.cc/i1/2022/04/10/SVd9ku.png',
    reimg: {
      img1_200: 'https://upload.cc/i1/2022/04/10/7rYuH1.png',
      img1_300: 'https://upload.cc/i1/2022/04/10/yiJfVG.png',
      img2_200: '圖片一模型二',
      img2_300: '圖片一模型二',
    }
  },
  {
    value: 'Image2',
    label: 'Image2',
    img: 'https://upload.cc/i1/2022/04/10/wN3Mzc.png',
    reimg: {
      img1_200: 'https://upload.cc/i1/2022/04/10/3HJuE5.png',
      img1_300: 'https://upload.cc/i1/2022/04/10/JNgzY1.png',
      img2_200: '圖片二模型二',
      img2_300: '圖片一模型二',
    }
  },
  {
    value: 'Image3',
    label: 'Image3',
    img: 'https://upload.cc/i1/2022/04/10/Yy2AQq.png',
    reimg: {
      img1_200: 'https://upload.cc/i1/2022/04/10/iRubId.png',
      img1_300: 'https://upload.cc/i1/2022/04/10/HPzXY9.png',
      img2_200: '圖片三模型二',
      img2_300: '圖片一模型二',
    }
  },
  {
    value: 'Image4',
    label: 'Image4',
    img: 'https://upload.cc/i1/2022/04/10/tw2o13.png',
    reimg: {
      img1_200: 'https://upload.cc/i1/2022/04/10/t7HWUF.png',
      img1_300: 'https://upload.cc/i1/2022/04/10/d9mAea.png',
      img2_200: '圖片四模型二',
      img2_300: '圖片一模型二',
    }
  },
  {
    value: 'Image5',
    label: 'Image5',
    img: 'https://upload.cc/i1/2022/04/10/mSiAMv.png',
    reimg: {
      img1_200: 'https://upload.cc/i1/2022/04/10/1lxirc.png',
      img1_300: 'https://upload.cc/i1/2022/04/10/ZJht5j.png',
      img2_200: '圖片五模型二',
      img2_300: '圖片一模型二',
    }
  },
  {
    value: 'Image6',
    label: 'Image6',
    img: 'https://upload.cc/i1/2022/04/10/0mgEvA.png',
    reimg: {
      img1_200: 'https://upload.cc/i1/2022/04/10/Wfpu5k.png',
      img1_300: 'https://upload.cc/i1/2022/04/10/cQizKV.png',
      img2_200: '圖片六模型二',
      img2_300: '圖片一模型二',
    }
  },
  {
    value: 'Image7',
    label: 'Image7',
    img: 'https://upload.cc/i1/2022/04/10/Xaqpfs.png',
    reimg: {
      img1_200: 'https://upload.cc/i1/2022/04/10/evq7Md.png',
      img1_300: 'https://upload.cc/i1/2022/04/10/tmf4V5.png',
      img2_200: '圖片七模型二',
      img2_300: '圖片一模型二',
    }
  },
  {
    value: 'Image8',
    label: 'Image8',
    img: 'https://upload.cc/i1/2022/04/10/NdB6Sv.png',
    reimg: {
      img1_200: 'https://upload.cc/i1/2022/04/10/TvYwJk.png',
      img1_300: 'https://upload.cc/i1/2022/04/10/2Fy3fq.png',
      img2_200: '圖片八模型二',
      img2_300: '圖片一模型二',
    }
  },
  {
    value: 'Image9',
    label: 'Image9',
    img: 'https://upload.cc/i1/2022/04/10/WEdnrY.png',
    reimg: {
      img1_200: 'https://upload.cc/i1/2022/04/10/JuMS38.png',
      img1_300: 'https://upload.cc/i1/2022/04/10/tPCf1o.png',
      img2_200: '圖片九模型二',
      img2_300: '圖片一模型二',
    }
  },
  {
    value: 'Image10',
    label: 'Image10',
    img: 'https://upload.cc/i1/2022/04/10/cEFXHM.png',
    img: 'https://upload.cc/i1/2022/04/10/cEFXHM.png',
    reimg: {
      img1_200: 'https://upload.cc/i1/2022/04/10/nCxpuj.png',
      img1_300: 'https://upload.cc/i1/2022/04/10/ebJ3mN.png',
      img2_200: '圖片十模型二',
      img2_300: '圖片一模型二',
    }
  },
])
const value1 = ref("Image1")

const options2 = ref([
  {
    value: 'img1',
    label: 'U-Net',
  },
  {
    value: 'img2',
    label: 'SegNet',
    disabled: true,
  },
  {
    value: 'img3',
    label: 'FCN',
    disabled: true,
  },
])
const value2 = ref("img1")

const a = ref("")
const radio1 = ref("200")

const img = computed(() => {
  return options1.value[options1.value.map(x => x.value).indexOf(value1.value)].img
})

const resultImg = computed(() => {
  return a.value
})

const result = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
    a.value = options1.value[options1.value.map(x => x.value).indexOf(value1.value)].reimg[value2.value+'_'+radio1.value]
  }, Math.floor(Math.random()*(1500))+1000)
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
.block {
  width: 50%;
  height: 70%;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
.back {
  width: 90%;
  height: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 30px;
  background: rgba(133, 133, 133, 0.205);
}
.back img {
  width: 80%;
}

.result-but {
  width: 100px;
  height: 50px;
  font-size: 1.2em;
  position: relative;
  border-radius: 10px;
  transition: all 0.3s;
}
.result-but:hover {
  background: #92abb6;
}

@media (max-width: 800px) {
  .container {
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .block {
    width: 100%;
    height: 500px;
    margin-top: 50px;
  }
  .back {
    width: 70%;
    height: 80%;
  }
  .back img {
    width: 90%;
  }
  .result-but {
    margin: 40px 0;
  }
}
.sel{
  position: relative;
  display: flex;
  flex-direction: row;
  height: 40px;
}
.radio{
  margin-left: 20px;
}
</style>