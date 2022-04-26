<template>
  <div class="container">
    <div class="block">
      <div class="sel">
      <el-select v-model="value1" placeholder="選擇圖片" @change="clearphoto">
        <el-option
          v-for="item in ir.resultData"
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
          <el-radio v-model="radio1" label="200" size="large" @change="clearphoto">200</el-radio>
          <el-radio v-model="radio1" label="300" size="large" @change="clearphoto">300</el-radio>
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
import { useIrStore } from "@/stores/ir.js";
const ir = useIrStore();

const fullscreenLoading = ref(false);

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
    a.value = ir.resultData[ir.resultData.map(x => x.value).indexOf(value1.value)].reimg[value2.value+'_'+radio1.value]
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
  margin-top: 15px;
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