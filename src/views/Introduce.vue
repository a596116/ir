<template>
  <div class="container">
    <swiper
      :spaceBetween="50"
      :speed="700"
      :pagination="{ clickable: true }"
      :effect="'flip'"
      :navigation="true"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="a">
          <h1 class="title">研究背景</h1>
            <p class="txt">
              <span style="color:#cc0000">‧氣候暖化、能源浩劫</span>
              <br />&emsp;&emsp;近幾年來全球暖化日益嚴重，氣候也越發異常，各國為了<span style="color:#cc0000">防止全球性的能源浩劫和所引發的災難</span>，開始推動<span style="color:#cc0000">綠色保護以及再生能源</span>。
              <br />
              <span style="color:#cc0000">‧健康的危害</span>
              <br />&emsp;&emsp;火電廠是以化石燃料發電，其中<span style="color:#cc0000">燃煤</span>對人體的影響最大，在使用燃煤發電的過程中會排放大量<span style="color:#cc0000">提高對人體死亡的有害物質</span>，包括氮氧化物（Nox)、硫氧化物（SOx）、細懸浮微粒（PM2.5）等。
            </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="a">
          <h1 class="title">研究背景</h1>
          <p class="txt">
            <span style="color:#cc0000">‧環境的影響</span>
            <br />&emsp;&emsp;<span style="color:#cc0000">燃煤</span>被認定是<span style="color:#cc0000">造成全球暖化和酸雨</span>的主要原因也間接<span style="color:#cc0000">導致許多動植物數量減少甚至走向滅絕</span>，農產品也包含其中。而隨著海平面持續上升的問題，也將會影響我們的人類的生存範圍。<span style="color:#cc0000">核廢料的存處問題</span>至今仍然是無法解決，各國政府也只能將核廢料進行存放。
            <br />
            <span style="color:#cc0000">‧臺灣</span>
            <br />&emsp;&emsp;臺灣的能源主要以進口為最大占比，其中主要的有石油、天然氣、煤礦等。近年來政府為了響應全球環境議題，開始推動<span style="color:#cc0000">綠色產業</span>，在再生能源方面<span style="color:#cc0000">太陽光發電</span>也在這幾年中有顯著的成長。
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="a">
          <h1 class="title">研究動機</h1>
          <p class="txt">
            「熱斑效應」對於太陽光電模組來說是一種不可避免的問題，形成的原因有些是太陽光電模組「本身」品質就存在缺陷、也有些是因「環境」所造成局部遮蔽而形成的。本組打算透過<span style="color:#cc0000">無人機</span>拍攝的<span style="color:#cc0000">熱層像圖</span>搭配<span style="color:#cc0000">深度學習</span>的方式，有效率的找太陽光電模組中出現熱斑的位置，降低整體營運成本，提高人們建置太陽光電模組的意願。
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="a">
          <h1 class="title">研究方法</h1>
          <p class="txt">
            在本次專題中，我們將採用一台裝有<span style="color:#cc0000">IR鏡頭與可見光鏡頭</span>的無人機來拍攝太陽光電模組的現場情況，並將拍攝下來的影像快速傳回到電腦後，利用<span style="color:#cc0000">U-Net、SegNet、FCN</span>擷取影像特徵點，將<span style="color:#cc0000">IR熱影像圖</span>與一般影像圖進行辨識比對，最終找出太陽光電模組中熱斑的位置。
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="a">
          <h1 class="title">電網架構圖</h1>
          <img src="https://upload.cc/i1/2022/04/26/7GYQUA.png" class="img" @click="imgDialog=true">
          
        </div>
      </swiper-slide>
    </swiper>
    <el-dialog v-model="imgDialog" title=" " width="70%" top="40px">
            <div class="dialogImg">
              <img src="https://upload.cc/i1/2022/04/26/7GYQUA.png" @click="imgDialog = false" />
            </div>
          </el-dialog>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip"
import SwiperCore, { Navigation, Pagination, EffectFlip } from "swiper";
import { ref, reactive, computed } from 'vue';

SwiperCore.use([Navigation, Pagination, EffectFlip]);

const imgDialog = ref(false);

</script>

<style scoped>
.container {
  width: 100%;
}
.container .swiper {
  width: 75vw;
  height: 75vh;
  padding: 0 55px 40px;
  margin-top: 20px;
}

.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 30px;
  background: linear-gradient(
    to left bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
}
.a {
  width: 85%;
  height: 100%;
  overflow: auto;
}
.title {
  font-size: 2rem;
  text-align: center;
}
.txt {
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: left;
  margin-top: 10%;
}
.img{
  width: 90%;
  height: 80%;
  cursor: zoom-in;
}

.dialogImg img {
  height: 100%;
  width: 100%;
  cursor: zoom-out;
}

@media (max-width: 600px) {
  .container .swiper {
    width: 100vw;
    height: 98%;
    padding: 0 25px 40px;
  }
  .title {
    font-size: 1.8rem;
  }
  .txt {
    font-size: 1.2rem;
    line-height: 1.7;
  }
  .img{
  height: 70%;
  width: auto;
}
}
</style>