<template>
  <div class="w-full h-full text-cyan-50">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <a
        v-for="(item, index) in items"
        :key="index"
        :href="item.route"
        target="_blank"
        rel="noopener noreferrer"
      >
        >
        <el-card class="flex flex-col h-full">
          <template #header>{{ item.title }}</template>
          <img
            :src="item.imgSrc"
            class="flex-grow object-cover"
            style="width: 100%"
          />
        </el-card>
      </a>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    title: "VUE",
    imgSrc:
      "https://truth.bahamut.com.tw/s01/202402/5617ebaf4c0863996ce40c9743be55ef.JPG",
    route: "https://zh-hk.vuejs.org",
  },
  {
    title: "VITE",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:708/1*H21jmBDu0AmjMUR1Swy7rw.png",
    route: "https://cn.vitejs.dev/",
  },
  {
    title: "Vue Router",
    imgSrc: "https://kanboo.github.io/2018/08/06/VueRouter/vuerouter.jpg",
    route: "https://router.vuejs.org/zh/",
  },
  {
    title: "Vuex",
    imgSrc:
      "https://truth.bahamut.com.tw/s01/202402/5617ebaf4c0863996ce40c9743be55ef.JPG",
    route: "https://vuex.vuejs.org/zh/",
  },
  {
    title: "Element Plus",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVW53HDUcGu34wZJjNmZw9NIowmjX5L8Cfqg&s",
    route: "https://element-plus.org/#/zh-CN",
  },
  {
    title: "Vue I18n",
    imgSrc:
      "https://truth.bahamut.com.tw/s01/202402/5617ebaf4c0863996ce40c9743be55ef.JPG",
    route: "https://vue-i18n.intlify.dev/",
  },
  {
    title: "Vite Plugins",
    imgSrc:
      "https://truth.bahamut.com.tw/s01/202402/5617ebaf4c0863996ce40c9743be55ef.JPG",
    route: "https://vitejs.dev/plugins/",
  },
  {
    title: "Tailwind CSS",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:512/1*JEHLmWo6_SrpHPiP4AimIw.png",
    route: "https://tailwindcss.com/docs",
  },
  {
    title: "Vue CLI",
    imgSrc:
      "https://truth.bahamut.com.tw/s01/202402/5617ebaf4c0863996ce40c9743be55ef.JPG",
    route: "https://cli.vuejs.org/zh/",
  },
];
</script>

<style scoped>
/* 可根據需要自定義更多樣式 */
</style>
