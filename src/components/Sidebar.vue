<template>
  <el-aside
    :style="asideStyle"
    class="bg-gray-200 p-4 transition-all duration-300 z-10 top-[60px]"
  >
    <el-menu :default-active="activeMenu" :collapse="isCollapse">
      <router-link to="/dashboard">
        <el-menu-item index="1">
          <el-icon><HomeFilled /></el-icon>
          <span v-if="!isCollapse"> {{ $t("home") }}</span>
        </el-menu-item>
      </router-link>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span v-if="!isCollapse">{{ $t("example") }}</span>
        </template>
        <router-link to="/documentation">
          <el-menu-item index="1-1">{{ $t("documentation") }} </el-menu-item>
        </router-link>
        <router-link to="/backendReference">
          <el-menu-item index="1-2">{{ $t("backendReference") }}</el-menu-item>
        </router-link>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  isCollapse: Boolean,
});

const route = useRoute();
const activeMenu = ref(route.path);

// 用於存儲視窗寬度
const windowWidth = ref(window.innerWidth);

// 監聽視窗調整大小事件
const updateWindowSize = () => {
  windowWidth.value = window.innerWidth;
};

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
});

onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
});

// 計算側邊欄樣式
const asideStyle = computed(() => {
  if (windowWidth.value <= 1024) {
    // 手機版
    return {
      left: props.isCollapse ? "-200px" : "0px",
      width: "200px",
      position: "absolute",
    };
  } else {
    // 桌面版
    return {
      left: "0px",
      width: props.isCollapse ? "64px" : "200px",
      position: "static",
    };
  }
});
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
