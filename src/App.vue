<template>
  <div class="bg">
    <el-container class="common-layout">
      <el-header>
        <router-link to="/home">
          <img src="@/assets/img/logo.png" class="logo" width="150" />
        </router-link>

        <!-- <div class="title">
          <span class="sch">靜宜大學</span>
        <span class="department">資料科學暨大數據分析與應用學系</span>
        </div> -->
        <div
          class="toggle"
          @click="menutoggle = !menutoggle"
          :class="{ active: menutoggle }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <el-drawer
          v-model="menutoggle"
          :with-header="false"
          :open-delay="200"
          :close-delay="200"
          :size="350"
        >
          <div class="nav-list">
            <router-link to="/home" active-class="is-active" @click="menutoggle = !menutoggle">
              <span>首頁</span>
          </router-link>
          <router-link to="/introduce" active-class="is-active" @click="menutoggle = !menutoggle">
              <span>介紹</span>
          </router-link>
          <router-link to="/process" active-class="is-active" @click="menutoggle = !menutoggle">
              <span>程式</span>
          </router-link>
          <router-link to="/result" active-class="is-active" @click="menutoggle = !menutoggle">
              <span>結果</span>
          </router-link>
          </div>

        </el-drawer>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <nav class="nav">
            <ul class="ul-nav">
              <el-tooltip
                class="item"
                effect="light"
                content="首頁"
                placement="top-end"
              >
                <router-link to="/home" active-class="is-active">
                  <li>
                    <el-icon size="25px"> <house /> </el-icon>
                    <span>首頁</span>
                  </li>
                </router-link>
              </el-tooltip>

              <el-tooltip
                class="item"
                effect="light"
                content="介紹"
                placement="top-end"
              >
                <router-link to="/introduce" active-class="is-active">
                  <li>
                    <el-icon size="25px"> <chat-round /> </el-icon>
                    <span>介紹</span>
                  </li>
                </router-link>
              </el-tooltip>

              <el-tooltip
                class="item"
                effect="light"
                content="程式"
                placement="top-end"
              >
                <router-link to="/process" active-class="is-active">
                  <li>
                    <el-icon size="25px"> <tickets /> </el-icon>
                    <span>程式</span>
                  </li>
                </router-link>
              </el-tooltip>

              <el-tooltip
                class="item"
                effect="light"
                content="結果"
                placement="top-end"
              >
                <router-link to="/result" active-class="is-active">
                  <li>
                    <el-icon size="25px"> <data-board /> </el-icon>
                    <span>結果</span>
                  </li>
                </router-link>
              </el-tooltip>
            </ul>
          </nav>
        </el-aside>

        <el-main>
          <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition" appear>
              <keep-alive exclude="detail">
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
          <!-- <router-view></router-view> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { House, ChatRound, Tickets, DataBoard } from "@element-plus/icons";
import { ref } from "vue";

const menutoggle = ref(false);
</script>

<style scoped>
@import "@/assets/css/app.css";
</style>
<style>
@import "@/assets/base.css";
</style>
