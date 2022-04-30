<template>
  <div class="bg">
    <el-container class="common-layout">
      <el-header>
        <router-link to="/home">
          <img src="@/assets/img/logo.png" class="logo" width="150" />
        </router-link>
        <span class="title">深度學習在太陽光電模組的熱影像缺陷自動識別系統</span>
        <!-- 小版畫面的導航欄 -->
        <div class="toggle" @click="menutoggle = !menutoggle" :class="{ active: menutoggle }">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <el-drawer v-model="menutoggle" :with-header="false" :open-delay="200" :close-delay="200" :size="300">
          <div class="nav-list">
            <router-link to="/home" active-class="is-active" @click="menutoggle = !menutoggle">
              <span>首 頁</span>
            </router-link>
            <router-link to="/introduce" active-class="is-active" @click="menutoggle = !menutoggle">
              <span>介 紹</span>
            </router-link>
            <router-link to="/process" active-class="is-active" @click="menutoggle = !menutoggle">
              <span>程 式</span>
            </router-link>
            <router-link to="/result" active-class="is-active" @click="menutoggle = !menutoggle">
              <span>結 果</span>
            </router-link>
          </div>

        </el-drawer>

      </el-header>

      <el-container>
        <!-- 左側導航欄 -->
        <el-aside width="230px">
          <nav>
            <el-tooltip class="item" effect="light" content="首頁" placement="top-end">
              <router-link to="/home" active-class="is-active">
                <li>
                  <el-icon size="25px">
                    <house />
                  </el-icon>
                  <span>首頁</span>
                </li>
              </router-link>
            </el-tooltip>

            <el-tooltip class="item" effect="light" content="介紹" placement="top-end">
              <router-link to="/introduce" active-class="is-active">
                <li>
                  <el-icon size="25px">
                    <chat-round />
                  </el-icon>
                  <span>介紹</span>
                </li>
              </router-link>
            </el-tooltip>

            <el-tooltip class="item" effect="light" content="程式" placement="top-end">
              <router-link to="/process" active-class="is-active">
                <li>
                  <el-icon size="25px">
                    <tickets />
                  </el-icon>
                  <span>程式</span>
                </li>
              </router-link>
            </el-tooltip>

            <el-tooltip class="item" effect="light" content="結果" placement="top-end">
              <router-link to="/result" active-class="is-active">
                <li>
                  <el-icon size="25px">
                    <data-board />
                  </el-icon>
                  <span>結果</span>
                </li>
              </router-link>
            </el-tooltip>
          </nav>
        </el-aside>

        <el-main>
          <router-view v-slot="{ Component, route }">
            <transition name="fade" appear mode="out-in">
              <keep-alive exclude="detail">
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { House, ChatRound, Tickets, DataBoard } from "@element-plus/icons"
import { ref } from "vue"

const menutoggle = ref(false)
</script>

<style scoped lang="scss">
@import "@/assets/css/layout.scss";
</style>
<style>
@import "@/assets/base.scss";
</style>
