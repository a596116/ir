<template>
  <div class="home">
    <img src="/pu.png" class="logo1">
    <img src="/puds.png" class="logo2">
    <span class="name">指導老師：黃秋杰 郭珈妤</span>
    <span class="name">組員：張偉政 楊迪奇 王教勛 陳峻浩 王泊諺 張湧毅 馬浩洋</span>
    <div class="hr">
      <span class="line1"></span>
      <span class="txt"> 摘要 </span>
      <span class="line2"></span>
    </div>
    <div class="summary">
      「<span
        style="color:#cc0000">能源</span>」已然成為驅使人類科技文明前進的動力之一，也因為如此有不少國家因為有限的資源而引發戰爭，這也勢必會成為未來戰爭的一個導火索。再生能源不僅能夠彌補有限資源的浩劫，也能以<span
        style="color:#cc0000">綠色環保</span>的方式保護我們的家園，「<span style="color:#cc0000">地球</span>」得以永續共存。
    </div>
  </div>
</template>


<style scoped lang="scss">
.home {
  width: 80%;
  text-align: left;
  display: flex;
  flex-direction: column;

  .logo1 {
    width: 50%;
  }

  .logo2 {
    width: 60%;
    margin: 30px 0;
  }

  .name {
    font-size: 1.8em;
    color: rgb(248, 235, 219);
    margin: 10px 0;
    letter-spacing: 2px;
  }

  .hr {
    position: relative;
    margin-top: 15px;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .line1 {
      width: calc((100% - 80px) * 0.1);
      border-top: 3px solid #82b3d5;
    }

    .line2 {
      width: calc((100% - 80px) * 0.9);
      border-top: 3px solid #82b3d5;
    }

    .txt {
      width: 80px;
      font-size: 1.7rem;
      color: rgb(255, 255, 255);
      margin: 0 15px;
      padding: 3px;
      border: 3px solid #82b3d5;
      text-align: center;
    }
  }

  .summary {
    margin-top: 15px;
    font-size: 1.5em;
    color: rgb(248, 235, 219);
    letter-spacing: 3px;
  }
}









@media (max-width: 1100px) {
  .home {
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
  .logo1 {
    height: 100px;
  }

  .logo2 {
    height: 65px;
  }

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

  .hr .txt {
    font-size: 1.3rem;
  }

  .hr .line2 {
    top: 30%;
  }
}
</style>
