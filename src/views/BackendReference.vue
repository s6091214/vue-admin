<template>
  <div class="w-full h-full text-cyan-50">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <a
        v-for="(backend, index) in backends"
        :key="index"
        :href="backend.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <el-card class="flex flex-col h-full">
          <template #header>{{ backend.name }}</template>
          <img
            :src="backend.imgSrc"
            class="flex-grow object-cover"
            style="width: 100%"
          />
        </el-card>
      </a>
    </div>
  </div>
</template>

<script setup>
const backends = [
  {
    name: "vue-element-admin",
    imgSrc:
      "https://repository-images.githubusercontent.com/88464704/5279d680-7e0a-11e9-9dfb-76463086bda3",
    url: "https://panjiachen.github.io/vue-element-admin/#/login?redirect=%2Fdashboard",
  },
  {
    name: "SAKAI",
    imgSrc: "https://i.ytimg.com/vi/AHeSjJFR3ZE/sddefault.jpg",
    url: "https://sakai.primevue.org/",
  },
  {
    name: "RuoYi",
    imgSrc:
      "https://www.lihaiblog.cn/zb_users/upload/2023/03/202303261679838560586440.jpg",
    url: "https://vue.ruoyi.vip/index",
  },
  {
    name: "iview-admin",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVpN6jZAyLoHWHN2nUsYHG1xwDCgWsxInxw&s",
    url: "https://admin.iviewui.com/home",
  },
  {
    name: "D2Admin",
    imgSrc:
      "https://raw.githubusercontent.com/d2-projects/d2-admin/master/docs/image/d2-admin@2x.png",
    url: "https://d2-admin-start-kit.netlify.app/#/index",
  },
  {
    name: "el-admin",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3K6o4w7u0QC7cxFuJdlPUjzW29spmGtBb7Ww0CHAxNEQBlHpojRAUgJvmDNxPwPy5Vs&usqp=CAU",
    url: "https://eladmin.vip/demo/#/dashboard",
  },
  // 可以再增加更多項目
];
</script>

<style scoped>
/* 可根據需要自定義更多樣式 */
</style>
