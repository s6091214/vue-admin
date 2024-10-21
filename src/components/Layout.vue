<template>
  <el-container class="h-screen">
    <Sidebar :isCollapse="isCollapse" />

    <el-container>
      <el-header
        class="bg-white shadow w-full flex items-center justify-between p-4"
      >
        <Header :isCollapse="isCollapse" @toggle-aside="toggleAside" />
      </el-header>

      <!-- 主要內容區域 -->
      <el-main class="p-4 h-full w-full">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";

const isCollapse = ref(false);

const toggleAside = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style scoped>
/* 可根據需要自定義更多樣式 */
</style>
