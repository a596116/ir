<template>
  <div class="result">
    <div class="block">
      <div class="select">
        <el-select v-model="value1" placeholder="選擇圖片" @change="clearphoto">
          <el-option v-for="item in ir.resultData" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div class="result_img">
        <el-image :src="img" />
      </div>
    </div>

    <div class="block">
      <div class="select">
        <el-select v-model="value2" placeholder="選擇模型" @change="clearphoto">
          <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"
            :disabled="item.disabled"></el-option>
        </el-select>
        <div class="radio">
          <el-radio v-model="radio1" label="200" size="large" @change="clearphoto">200</el-radio>
          <el-radio v-model="radio1" label="300" size="large" @change="clearphoto">300</el-radio>
        </div>
      </div>

      <div class="result_img">
        <el-image :src="resultImg" v-if="resultImg" />
      </div>
    </div>

    <button @click="result" class="result-but" v-loading.fullscreen.lock="fullscreenLoading"
      element-loading-text="running" element-loading-background="rgba(100, 100, 100, 0.4)">查看結果</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useIrStore } from "@/stores/ir.js"
const ir = useIrStore()

const fullscreenLoading = ref(false)

const value1 = ref("Image1")

const options2 = ref([
  {
    value: 'img1',
    label: 'U-Net'
  },
  {
    value: 'img2',
    label: 'SegNet'
  },
  {
    value: 'img3',
    label: 'U-Net++'
  },
])
const value2 = ref("img1")
const a = ref("")
const radio1 = ref("200")

const img = computed(() => {
  return ir.resultData[ir.resultData.map(x => x.value).indexOf(value1.value)].img
})

const resultImg = computed(() => {
  return a.value
})

const result = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
    a.value = ir.resultData[ir.resultData.map(x => x.value).indexOf(value1.value)].reimg[value2.value + '_' + radio1.value]
  }, Math.floor(Math.random() * (1500)) + 1000)
}

const clearphoto = () => {
  a.value = ""
}
</script>


<style scoped lang="scss">
.result {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .block {
    width: 50%;
    height: 70%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;

    .select {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      height: 40px;

      .el-select {
        width: 150px;
      }
    }

    .result_img {
      width: 95%;
      height: 95%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin-top: 30px;
      background: rgba(133, 133, 133, 0.205);

      img {
        width: 80%;
        height: 90%;
      }

      .el-image {
        width: 80%;
        height: 90%;
        background: #fff;
      }
    }
  }

  .result-but {
    width: 120px;
    height: 60px;
    letter-spacing: 1px;
    font-size: 1.3em;
    border-radius: 10px;
    transition: all 0.3s;

    &:hover {
      background: #92abb6;
    }
  }

}

.radio {
  margin-left: 20px;
}

@media (max-width: 800px) {
  .result {
    flex-direction: column;

    .block {
      width: 100%;
      height: 400px;
      margin-top: 50px;
    }

    .result-but {
      margin: 40px 0;
    }
  }

}
</style>