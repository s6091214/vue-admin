<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <span v-if="index === breadcrumbs.length - 1" :key="item.path">
          {{ $t(item.title) }}
        </span>
        <a
          v-else
          :key="item.path + '-link'"
          @click.prevent="navigateTo(item.path)"
        >
          {{ $t(item.title) }}
        </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ArrowRight } from "@element-plus/icons-vue";

const breadcrumbs = ref([]);
const route = useRoute();
const router = useRouter();

// 更新麵包屑方法
const updateBreadcrumbs = () => {
  breadcrumbs.value = route.meta.breadcrumb || [];
};

// 監聽路由變化，自動更新麵包屑
watch(route, updateBreadcrumbs, { immediate: true });

// 用於導航的方法
const navigateTo = (path) => {
  console.log(path);
  if (path) {
    router.push(path);
  }
};

onMounted(() => {
  updateBreadcrumbs();
});
</script>

<style scoped>
/* 面包屑过渡动画 */
.breadcrumb-enter-active {
  transition: all 0.4s;
}

.breadcrumb-leave-active {
  transition: all 0.3s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
