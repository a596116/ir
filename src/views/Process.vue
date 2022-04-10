<template>
  <div class="process">
    <div class="line">|</div>
    <el-tabs v-model="active" style="width: 100%;">
      <el-tab-pane label="模型" name="page1" class="tabs1">
        <br />
        <div class="page1">
          <div class="p1button" :class="{buttonhover:activepage1=='page1_1'}" @click="activepage1='page1_1'"><span>FCN</span></div>
          <div class="p1button" :class="{buttonhover:activepage1=='page1_2'}" @click="activepage1='page1_2'"><span>Seg</span></div>
          <div class="p1button" :class="{buttonhover:activepage1=='page1_3'}" @click="activepage1='page1_3'"><span>U-Net</span></div>
        </div>
        <div class="page1-content">
          <el-popover
          placement="bottom"
          title=""
          :width="400"
          trigger="click"
          :content="p1content"
        >
          <template #reference>
            <el-button>介紹</el-button>
          </template>
        </el-popover>
          <img :src="p1img">
        </div>
      </el-tab-pane>
      <el-tab-pane label="流程" name="page2" class="tabs2">
        <br />
        <el-tabs v-model="activepage2">
          <el-tab-pane label="原始資料" name="page2_1"
            >利用空拍機，拍攝太陽光電模組的熱影像圖，蒐集資料</el-tab-pane
          >
          <el-tab-pane label="處理資料" name="page2_2"
            >將圖片轉為灰階之後再左右對切，將總數變為2倍，對圖片進行正規化</el-tab-pane
          >
          <el-tab-pane label="拆分資料集" name="page2_3"
            >將資料集裡的95%作為訓練集，剩餘的5%做為測試集</el-tab-pane
          >
          <el-tab-pane label="訓練模型" name="page2_4"
            >使用深度學習的方式建立(U-NET、SegNet)模型架構進行訓練</el-tab-pane
          >
          <el-tab-pane label="測試" name="page2_5"
            >使用訓練好的模型對測試集進行預測</el-tab-pane
          >
          <el-tab-pane label="結果" name="page2_6"
            >標示出太陽光電模組異常的區塊</el-tab-pane
          >
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const active = ref("page1")
const activepage1 = ref("page1_2")
const activepage2 = ref("page2_1")
const p1data = reactive({
        page1_1:{content:"FCN能夠對影象進行畫素級的分類，與經典的CNN在卷積層之後使用全連線層得到固定長度的特徵向量進行分類不同，FCN可以接受任意尺寸的輸入圖像，采用反卷積層對最後一個卷積層的特征圖進行上取樣",img:"https://upload.cc/i1/2021/12/09/qGN6I1.png"},
        page1_2:{content:"SegNet是一個由encoder和decoder組成的對稱網路。輸入一張RGB圖像後，網絡根據圖像中物體的語義信息，把圖像中的物體進行分類，最後生成一張分割圖像",img:"https://upload.cc/i1/2021/12/22/RTV8uh.png"},
        page1_3:{content:"U-Net由收縮路徑和擴展路徑兩部分組成!它的特殊之處在於結構後半部分的擴展路徑。此外，該網路沒有使用全連接層，只採用了卷積層，每個標準的卷積層後面都緊跟著一個Relu激活函數層。",img:"https://upload.cc/i1/2021/12/09/WFMcNI.png"}
      })

const p1content = computed(()=>{
  return p1data[activepage1.value].content
})
const p1img = computed(()=>{
  return p1data[activepage1.value].img
})

</script>

<style>
.process{
  width: 70vw;
  position: relative;
}
.line {
  font-size: 40px;
  color: aliceblue;
  position: relative;
  top: 45px;
}
.el-tabs__nav-wrap::after {
  background-color: rgba(0, 0, 0, 0) !important;
}
.el-tabs__nav-scroll {
  text-align: center;
  display: flex;
  justify-content: center;
}
.el-tabs__item {
  color: rgb(129, 129, 129) !important;
  font-size: 30px !important;
  margin: 0 20px;
}

.el-tab-pane {
  color: rgb(131, 197, 161);
  font-size: 30px !important;
}
.el-tabs__content{
  width: 100%;
  height: 100vh;
  position: relative;
  padding-top: 30px;
}

.el-tabs__active-bar {
  background-color: rgba(255, 255, 255, 0.753) !important;
}

.el-tabs__nav-scroll .is-active {
  color: aliceblue !important;
}
.el-tabs__item{
  padding-left: 0 !important;
}

#pane-page1{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
}
.page1{
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#pane-page1 .p1button{
  width: 80px;
  height: 80px;
  margin: 60px 0 0 0;
  border: 1px solid #fff;
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 0.7em;
  transform: rotate(45deg);
  cursor: pointer;
  transition: all .5s ease 0s;
}
#pane-page1 .p1button span{
  transform: rotate(-45deg);
  transition: all .5s ease 0s;
}
#pane-page1 .p1button:hover,#pane-page1 .buttonhover{
  background: rgba(255, 255, 255, 0.582);
  transform: rotate(0deg);
  color: rgb(66, 62, 62);
}
#pane-page1 .p1button:hover span,#pane-page1 .buttonhover span{
  transform: rotate(0deg);
  font-weight: bold;
}

.page1-content{
  position: relative;
  width: 80%;
  height: 70%;
  display: inline-flex;
  flex-direction: column;

}
.page1-content .el-button{
  width: 80px;
  margin: 0 0 20px 0;
}
#pane-page1 img{
  height: 80%;
}
#pane-page1 p{
  padding: 20px;
  transition: all 0.5s ease-in-out;
}
.el-popover.el-popper{
  font-size: 1.5em !important;
  padding: 30px !important;
}

@media (max-width: 600px){
#pane-page1{
  display: flex;
  flex-direction: column;
}
#pane-page1 .page1{
  display: flex;
  flex-direction: row;
  width: 100%;
}
#pane-page1 .p1button{
  margin: 0 40px 20px 20px;
}
.page1-content .el-button{
  margin: 20px 0;
}
.page1-content{
  width: 100%;
  overflow: auto;
}
#pane-page1 img{
  width: 600px;
}
}
</style>