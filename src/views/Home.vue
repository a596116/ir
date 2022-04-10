<template>
  <div class="aa">
    <span class="sch">靜宜大學</span>
    <span class="department">資料科學暨大數據分析與應用學系</span>
    <p class="topic">深度學習在太陽光電模組的熱影像缺陷自動識別系統</p>
    <p class="name">指導老師：黃秋杰 郭珈妤</p>
    <p class="name">組員：張偉政 楊迪奇 王教勛 陳峻浩 王泊諺 張湧毅 馬浩洋</p>
    <div class="order">
      <span style="white-space: pre"> </span><span class="line1"></span>
      <span style="white-space: pre"> </span><span class="txt"> 摘要 </span>
      <span style="white-space: pre"> </span><span class="line2"></span>
    </div>
    <div class="summary">
      「<span style="color:#cc0000">能源</span>」已然成為驅使人類科技文明前進的動力之一，也因為如此有不少國家因為有限的資源而引發戰爭，這也勢必會成為未來戰爭的一個導火索。再生能源不僅能夠彌補有限資源的浩劫，也能以<span style="color:#cc0000">綠色環保</span>的方式保護我們的家園， 「<span style="color:#cc0000">地球</span>」得以永續共存。
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.aa {
  position: relative;
  width: 65vw;
  text-align: left;
  padding-top: 7%;
}
.sch {
  font-size: 4rem;
  color: aliceblue;
  position: relative;
  margin: 0 20px 0 0;
  width: 280px;
  display: inline;
}
.department {
  width: 400px;
  font-size: 1.8rem;
  color: rgb(255, 255, 255);
}
.topic {
  font-size: 2.4rem;
  color: #ffffff;
  font-weight: 700;
}
.name {
  font-size: 1.7rem;
  color: rgb(248, 235, 219);
  margin-top: 15px;
  margin-bottom: 20px;
}
.order {
  position: relative;
  margin-top: 15px;
  height: 60px;
  width: 100%;
  overflow: hidden;
}
.order .line1 {
  display: inline-block;
  width: 5vw;
  border-top: 3px solid #82b3d5;
}
.order .line2 {
  display: inline-block;
  width: 100%;
  border-top: 3px solid #82b3d5;
  position: absolute;
  top: 35%;
}
.order .txt {
  color: rgb(255, 255, 255);
  font-size: 1.7rem;
  vertical-align: middle;
  text-align: center;
  margin: 0 15px;
  border: 3px solid #82b3d5;
  display: inline-block;
  width: 80px;
  padding: 3px;
}

.summary {
  margin-top: 15px;
  font-size: 1.5rem;
  color: rgb(248, 235, 219);
}

@media (max-width: 1100px) {
  .aa {
    width: 90vw;
    padding-top: 10px;
  }
}
@media (max-width: 900px) {
  .sch {
    font-size: 2.5rem;
  }
  .department {
    font-size: 1.5rem;
  }
  .topic {
    font-size: 1.7rem;
  }
  .name {
    font-size: 1.3rem;
  }
}
@media (max-width: 500px) {
  .sch {
    font-size: 2.3rem;
    display: block;
    width: auto;
    letter-spacing: 10px;
  }
  .department {
    font-size: 1.5rem;
    display: block;
    width: auto;
  }
  .topic {
    font-size: 1.5rem;
  }
  .name {
    font-size: 1.3rem;
  }
  .order .txt {
    font-size: 1.3rem;
  }
  .order .line2 {
    top: 30%;
  }
}
</style>
