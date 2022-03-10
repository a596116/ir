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
            <br />&emsp;&emsp;近幾年來全球暖化日益嚴重，氣候也越發異常，各國為了
            <span style="color:#cc0000">防止全球性的能源浩劫和所引發的災難</span>，開始推動
            <span style="color:#cc0000">綠色保護以及再生能源</span>。
            <br />
            <span style="color:#cc0000">‧健康的危害</span>
            <br />&emsp;&emsp;火電廠是以化石燃料發電，其中
            <span style="color:#cc0000">燃煤</span>對人體的影響最大，在使用燃煤發電的過程中會排放大量
            <span style="color:#cc0000">提高對人體死亡的有害物質</span>，包括氮氧化物（Nox)、硫氧化物（SOx）、細懸浮微粒（PM2.5）等。
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="a">
          <h1 class="title">研究動機</h1>
          <p class="txt">
            太陽光電模組本身需要受到太陽直射來產生能量，因此增加了許多內、外部組件損壞的機率，為了能更快速的了解太陽光電模組的損壞程度，本組透過
            <span style="color:#cc0000">深度學習</span>的方式以
            <span style="color:#cc0000">無人機</span>拍攝後的
            <span style="color:#cc0000">熱層圖像</span>直接分析所壞的部件，提高產能，也能
            <span style="color:#cc0000">省去許多的人力、時間的消耗</span>。
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="a">
          <h1 class="title">研究方法</h1>
          <p class="txt">
            在本次專題中，我們將採用一台裝有
            <span style="color:#cc0000">IR鏡頭與可見光鏡頭</span>的無人機來拍攝太陽光電模組的現場情況，並將拍攝下來的影像快速傳回到電腦後，利用
            <span style="color:#cc0000">U-Net、SegNet</span>擷取影像特徵點，將
            <span style="color:#cc0000">IR熱影像圖</span>與一般影像圖進行辨識比對，最終找出太陽光電模組的故障位置。
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip"
import SwiperCore, { Navigation, Pagination, EffectFlip } from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFlip]);

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
  height: 85%;
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

@media (max-width: 600px) {
  .container .swiper {
    width: 100vw;
    height: auto;
    padding: 0 25px 40px;
  }
  .title {
    font-size: 1.8rem;
  }
  .txt {
    font-size: 1.2rem;
    line-height: 1.7;
  }
}
</style>