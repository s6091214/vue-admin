<template>
  <div class="flex items-center">
    <el-button @click="$emit('toggle-aside')" class="mr-4">
      <el-icon v-if="!isCollapse"><Menu /></el-icon>
      <el-icon v-else><Close /></el-icon>
    </el-button>

    <!-- 動態顯示麵包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index">
        <span v-if="index === breadcrumbs.length - 1">{{
          item.meta.title
        }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="relative flex items-center">
    <el-dropdown>
      <span class="cursor-pointer"> {{ $t("selectLanguage") }} </span>
      <template #dropdown>
        <el-dropdown-item
          v-for="lang in languages"
          :key="lang.value"
          @click="changeLanguage(lang.value)"
        >
          {{ lang.label }}
        </el-dropdown-item>
      </template>
    </el-dropdown>

    <el-dropdown class="ml-4">
      <el-avatar
        class="cursor-pointer"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>{{ $t("personalCenter") }}</el-dropdown-item>
          <el-dropdown-item>{{ $t("settings") }}</el-dropdown-item>
          <el-dropdown-item>{{ $t("help") }}</el-dropdown-item>
          <el-dropdown-item>{{ $t("logout") }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ElButton, ElIcon } from "element-plus";
import { Menu, Close } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { ref, watch, onMounted } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";

const { locale } = useI18n();

const props = defineProps({
  isCollapse: Boolean,
});

const emits = defineEmits(["toggle-aside"]);

const route = useRoute();
const router = useRouter();

/** 語言列表 */
const languages = [
  { label: "中文", value: "zhTW" },
  { label: "English", value: "en" },
];

/** 切換語言 */
const changeLanguage = (val) => {
  locale.value = val;
};

const breadcrumbs = ref([]);

// 更新麵包屑
const updateBreadcrumbs = (route) => {
  breadcrumbs.value = route.matched
    .filter((item) => item.meta && item.meta.title)
    .map((item) => ({
      title: item.meta.title,
      meta: item.meta,
    }));
};

// 監聽路由變化以更新麵包屑
watch(route, (newRoute) => {
  updateBreadcrumbs(newRoute);
});

onMounted(() => {
  updateBreadcrumbs(route);
});

const handleLink = (item) => {
  router.push(item.path);
};
</script>

<style scoped></style>
