<template>
  <div class="flex items-center">
    <el-button @click="$emit('toggle-aside')" class="mr-4">
      <el-icon v-if="!isCollapse"><Menu /></el-icon>
      <el-icon v-else><Close /></el-icon>
    </el-button>

    <!-- 麵包屑 -->
    <Breadcrumb />
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
          <el-dropdown-item @click="handleLogout">{{
            $t("logout")
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ElButton, ElIcon } from "element-plus";
import { Menu, Close } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

import Breadcrumb from "@/components/Breadcrumb.vue";

const { locale } = useI18n();

const props = defineProps({
  isCollapse: Boolean,
});

const emits = defineEmits(["toggle-aside"]);

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

const handleLogout = () => {
  router.push("/login");
};
</script>

<style scoped></style>
