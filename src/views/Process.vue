<template>
  <div class="process">
    <!-- <div class="process-line">|</div> -->
    <el-tabs v-model="active" style="width: 100%; height: 100%">
      <el-tab-pane label="模型" name="page1">
        <div class="page1_nav">
          <div class="page1_item">
            <div
              class="page1_button"
              :class="{ buttonhover: activepage1 == 'page1_1' }"
              @click="activepage1 = 'page1_1'"
            >
              <span>U-Net</span>
            </div>
            <div
              class="page1_button"
              :class="{ buttonhover: activepage1 == 'page1_2' }"
              @click="activepage1 = 'page1_2'"
            >
              <span>Seg</span>
            </div>
            <div
              class="page1_button"
              :class="{ buttonhover: activepage1 == 'page1_3' }"
              @click="activepage1 = 'page1_3'"
            >
              <span>U-Net++</span>
            </div>
          </div>
          <el-popover
            placement="bottom"
            title
            :width="400"
            trigger="click"
            :content="p1content"
          >
            <template #reference>
              <el-button>介紹</el-button>
            </template>
          </el-popover>
        </div>
        <div class="modulImg">
          <transition name="img-fade" appear mode="out-in">
            <keep-alive exclude="detail">
              <img :src="p1img" :key="p1img" />
            </keep-alive>
          </transition>
          <div class="mask" @click="imgDialog = true">點擊放大</div>
        </div>

        <el-dialog v-model="imgDialog" title=" " width="90%" top="40px">
          <div class="dialogImg">
            <img :src="p1img" @click="imgDialog = false" />
          </div>
        </el-dialog>
      </el-tab-pane>

      <el-tab-pane label="流程" name="page2">
        <br />
        <el-tabs v-model="activepage2">
          <el-tab-pane label="原始資料" name="page2_1"
            >利用空拍機，拍攝太陽光電模組的熱影像圖，蒐集資料
            <img src="/img/vn8MEK.png" alt="" />
          </el-tab-pane>
          <el-tab-pane label="處理資料" name="page2_2"
            >將無人機收集的資料透過Labelme標記，再將圖片轉為灰階和縮小並且正規化
            <img src="/img/5zsCSw.png" alt="" />
          </el-tab-pane>
          <el-tab-pane label="拆分資料集" name="page2_3"
            >將資料集的95%作為訓練集，剩餘的5%作為測試集
            <img src="/img/JitA6d.png" alt="" />
          </el-tab-pane>

          <el-tab-pane label="訓練模型" name="page2_4"
            >使用深度學習的方式建立(U-Net、SegNet、U-Net++)模型架構進行訓練
            <div class="carouselImg">
              <el-carousel
                :autoplay="false"
                indicator-position="outside"
                height="400px"
              >
                <el-carousel-item
                  v-for="(item, index) in carousel_Img"
                  :key="index"
                >
                  <img :src="item" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-tab-pane>

          <el-tab-pane label="測試" name="page2_5"
            >使用訓練好的模型對測試集進行預測
            <img src="/img/Hw74yv.png" alt="" />
          </el-tab-pane>
          <el-tab-pane label="結果" name="page2_6"
            >標示出太陽光電模組異常的區塊
            <br />
            <img src="/img/r4EJy1.png" alt="" />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const active = ref('page1')
const activepage1 = ref('page1_1')
const activepage2 = ref('page2_1')
const p1data = reactive({
  page1_1: {
    content:
      'U-Net由收縮路徑和擴展路徑兩部分組成!它的特殊之處在於結構後半部分的擴展路徑。此外，該網路沒有使用全連接層，只採用了卷積層，每個標準的卷積層後面都緊跟著一個Relu激活函數層。',
    img: '/img/5pD8wn.png',
  },
  page1_2: {
    content:
      'SegNet是一個由encoder和decoder組成的對稱網路。輸入一張RGB圖像後，網絡根據圖像中物體的語義信息，把圖像中的物體進行分類，最後生成一張分割圖像',
    img: '/img/SxqT1i.jpeg',
  },
  page1_3: {
    content:
      '這個綜合U-Net長連線和短連線的架構就是UNet++。UNet++的優勢是可以抓取不同層次的特徵,將它們通過特徵疊加的方式整合，加入更淺的U-Net結構，使得融合時的特徵圖尺度差異更小。UNet++同時也引進了很多引數，佔用記憶體也變大',
    img: '/img/2i0Plw.png',
  },
})

const carousel_Img = reactive([
  '/img/qkfGBS.png',
  '/img/OnMU3g.png',
  '/img/LsBQVP.png',
  '/img/b2iWYq.png',
  '/img/7fkB8V.png',
  '/img/CrYkDP.png',
])
const imgDialog = ref(false)

const p1content = computed(() => {
  return p1data[activepage1.value].content
})
const p1img = computed(() => {
  return p1data[activepage1.value].img
})
</script>

<style scoped lang="scss">
.process {
  width: 90%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 20px;

  .process-line {
    font-size: 40px;
    color: aliceblue;
    position: absolute;
    top: 15px;
    left: 7%;
  }

  .el-tabs {
    height: 100%;
  }

  #pane-page1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .page1_nav {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .page1_item {
        display: flex;

        .page1_button {
          width: auto;
          height: 40px;
          margin: 0 20px 0 0;
          padding: 0 5px;
          border: 1px solid #fff;
          color: #fff;
          display: grid;
          place-items: center;
          font-size: 0.7em;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.5s ease 0s;

          &:hover,
          &.buttonhover {
            background: rgba(255, 255, 255, 0.582);
            color: rgb(66, 62, 62);
          }
        }
      }
    }

    .modulImg {
      padding: 30px 0;
      position: relative;

      img {
        width: 100%;
        height: 60vh;
      }

      .mask {
        position: absolute;
        top: 30px;
        left: 0;
        width: 100%;
        height: calc(100% - 68px);
        background: rgba(101, 101, 101, 0.4);
        color: #ffffff;
        font-size: 1.5em;
        display: grid;
        place-content: center;
        cursor: zoom-in;
        opacity: 0;
        transition: all 0.5s ease-in-out;
      }

      &:hover {
        .mask {
          opacity: 1;
        }
      }
    }

    .dialogImg img {
      height: 100%;
      width: 100%;
      cursor: zoom-out;
    }
  }
}

#pane-page2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .el-tab-pane {
    padding-top: 30px;

    img {
      width: 100%;
      margin-top: 20px;
    }
  }

  #pane-page2_4 {
    display: flex;
    align-items: center;
    flex-direction: column;

    .carouselImg {
      width: 90%;
      height: 200%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

/* Img動畫 */
.img-fade-enter-active,
.img-fade-leave-active {
  transition: all 0.5s;
}

.img-fade-leave-to,
.img-fade-enter {
  transform: translateX(10%);
  opacity: 0.2;
}

.img-fade-enter-from {
  transform: translateX(10%);
}
</style>
