<template>
  <div class="w-full h-full">
    <h1 class="mb-4 text-2xl font-bold text-shadow-md">VUE</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <a
        v-for="(item, index) in vueItems"
        :key="index"
        :href="item.route"
        target="_blank"
        rel="noopener noreferrer"
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

    <h1 class="mb-4 mt-8 text-2xl font-bold text-shadow-md">React</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <a
        v-for="(item, index) in reactItems"
        :key="index"
        :href="item.route"
        target="_blank"
        rel="noopener noreferrer"
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

    <h1 class="mb-4 mt-8 text-2xl font-bold text-shadow-md">開發工具</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <a
        v-for="(item, index) in devToolsItems"
        :key="index"
        :href="item.route"
        target="_blank"
        rel="noopener noreferrer"
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

    <h1 class="mb-4 mt-8 text-2xl font-bold text-shadow-md">UI 框架</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <a
        v-for="(item, index) in uiFrameworksItems"
        :key="index"
        :href="item.route"
        target="_blank"
        rel="noopener noreferrer"
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
const vueItems = [
  {
    title: "VUE",
    imgSrc:
      "https://truth.bahamut.com.tw/s01/202402/5617ebaf4c0863996ce40c9743be55ef.JPG",
    route: "https://zh-hk.vuejs.org",
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
    title: "Vue I18n",
    imgSrc:
      "https://truth.bahamut.com.tw/s01/202402/5617ebaf4c0863996ce40c9743be55ef.JPG",
    route: "https://vue-i18n.intlify.dev/",
  },
  {
    title: "Vue CLI",
    imgSrc:
      "https://truth.bahamut.com.tw/s01/202402/5617ebaf4c0863996ce40c9743be55ef.JPG",
    route: "https://cli.vuejs.org/zh/",
  },
  {
    title: "Nuxt",
    imgSrc:
      "https://ivanlu.dev/content/images/2023/04/1_qJppTMduXXhjgU2tZt9SfQ.png",
    route: "https://nuxt.com/",
  },
  {
    title: "Vue Devtools",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdIW00XVNPWHZbLiaplXann7wWy4va7tzXzg&s",
    route: "https://devtools.vuejs.org/",
  },
  {
    title: "Quasar Framework",
    imgSrc: "https://cdn.quasar.dev/logo/svg/quasar-logo-awesome.svg",
    route: "https://www.quasar-cn.cn/",
  },
  {
    title: "Vue Test Utils",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRId9SEfmxEWWiQ8yqC0jnEEAq-kmHB9NwYQw&s",
    route: "https://v1.test-utils.vuejs.org/",
  },
  {
    title: "Pinia",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8El1hQOiQ9sL7wGQfDlIPg1ELAhjTeRZFfA&s",
    route: "https://pinia.vuejs.org/",
  },
  {
    title: "VueUse",
    imgSrc:
      "https://raw.githubusercontent.com/vueuse/vueuse/main/packages/public/logo-vertical.png",
    route: "https://vueuse.org/",
  },
];

const reactItems = [
  {
    title: "React",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    route: "https://react.dev",
  },
  {
    title: "React Router",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    route: "https://reactrouter.com/",
  },
  {
    title: "Redux",
    imgSrc: "https://redux.js.org/img/redux-logo-landscape.png",
    route: "https://redux.js.org/",
  },
  {
    title: "Next.js",
    imgSrc:
      "https://media.licdn.com/dms/image/D4D12AQHkAIoj7ROhDQ/article-cover_image-shrink_600_2000/0/1689615704540?e=2147483647&v=beta&t=DsnBjRH0KSZYIObFg-qjNx_otiGvxObhFpXGZTHyIDk",
    route: "https://nextjs.org/",
  },
];

const devToolsItems = [
  {
    title: "VITE",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:708/1*H21jmBDu0AmjMUR1Swy7rw.png",
    route: "https://cn.vitejs.dev/",
  },
  {
    title: "Vite Plugins",
    imgSrc:
      "https://truth.bahamut.com.tw/s01/202402/5617ebaf4c0863996ce40c9743be55ef.JPG",
    route: "https://vitejs.dev/plugins/",
  },
  {
    title: "ESLint",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0TUwkF8pP229NtBJhentJjeVfoFDkR6M6A&s",
    route: "https://eslint.org/",
  },
  {
    title: "Prettier",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJMr6dtB-rxlXjRhBmVvrdb-026KcDA2Mhw&s",
    route: "https://prettier.io/",
  },
  {
    title: "Webpack",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbX0i4MPhvuxjxXTiud5Ztvb5hrNJQ7I9PA&s",
    route: "https://webpack.docschina.org/",
  },
  {
    title: "Babel",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRFluegESjxxPtuuUKKz3tobQyHV2-xuVhA&s",
    route: "https://babeljs.io/",
  },
  {
    title: "TypeScript",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:1358/1*moJeTvW97yShLB7URRj5Kg.png",
    route: "https://www.typescriptlang.org/zh/",
  },
  {
    title: "Git",
    imgSrc: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    route: "https://git-scm.com/",
  },
  {
    title: "Postman",
    imgSrc: "https://miro.medium.com/v2/resize:fit:1200/0*I4NCYLypU87Z7WcB.jpg",
    route: "https://www.postman.com/",
  },
  {
    title: "Docker",
    imgSrc: "https://www.capdio.com/wp-content/uploads/2024/07/Docker-Logo.png",
    route: "https://www.docker.com/",
  },
  {
    title: "pnpm",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOw4seN3xvWVeFOX_gxEoNS_QgDPPWlI02Q&s",
    route: "https://pnpm.io/",
  },
  {
    title: "Yarn",
    imgSrc: "https://classic.yarnpkg.com/assets/og_image.png",
    route: "https://yarnpkg.com/",
  },
  {
    title: "Visual Studio Code",
    imgSrc: "https://code.visualstudio.com/assets/images/code-stable.png",
    route: "https://code.visualstudio.com/",
  },
  {
    title: "Jest",
    imgSrc: "https://jestjs.io/img/opengraph.png",
    route: "https://jestjs.io/",
  },
  {
    title: "Nginx",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/1200px-Nginx_logo.svg.png",
    route: "https://www.f5.com/go/product/welcome-to-nginx",
  },
  {
    title: "Notion",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1200px-Notion-logo.svg.png",
    route: "https://www.notion.so/",
  },
  {
    title: "Cypress",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_i6c0vnucPu4drKdFrOBZxaJiMd4w2z_0Q&s",
    route: "https://www.cypress.io/",
  },
  {
    title: "GitHub",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:1125/1*wotzQboYWAfaj-7bvGNIkQ.png",
    route: "https://github.com/",
  },
  {
    title: "Figma",
    imgSrc:
      "https://wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png",
    route: "https://www.figma.com/",
  },
  {
    title: "Npm",
    imgSrc:
      "https://i0.wp.com/tw.alphacamp.co/wp-content/uploads/2022/12/60e828da0bc046a440de20c3_5da9591e04d284c9bdf8784e_npm.jpeg?fit=750%2C500&ssl=1",
    route: "https://www.npmjs.com/",
  },
  {
    title: "Gulp",
    imgSrc:
      "https://resources.simular.co/assets/images/resources/frontend-tools/gulp.jpg",
    route: "https://gulpjs.com/",
  },
  {
    title: "Grunt",
    imgSrc:
      "https://resources.simular.co/assets/images/resources/frontend-tools/grunt.jpg",
    route: "https://gruntjs.com/",
  },
  {
    title: "Sass",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01L6Jq6BvPIjmhTliTvigg2nAADj_Z-cfPw&s",
    route: "https://sass-lang.com/",
  },
  {
    title: "Less",
    imgSrc: "https://less.bootcss.com/public/img/less_logo.png",
    route: "https://lesscss.org/",
  },
];

const uiFrameworksItems = [
  {
    title: "Element Plus",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVW53HDUcGu34wZJjNmZw9NIowmjX5L8Cfqg&s",
    route: "https://element-plus.org/#/zh-CN",
  },
  {
    title: "Tailwind CSS",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:512/1*JEHLmWo6_SrpHPiP4AimIw.png",
    route: "https://tailwindcss.com/docs",
  },
];
</script>

<style></style>
