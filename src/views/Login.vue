<template>
  <div class="Login">
    <div class="content">
      <el-form>
        <h1 class="title">{{ $t("welcomeBack") }}</h1>
        <el-form-item>
          <el-input v-model="username" :placeholder="$t('username')">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="password"
            type="password"
            :placeholder="$t('password')"
            @keyup.enter="login"
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="w-full" @click="handleLogin">
            {{ $t("login") }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n";
import { login, getUser } from "@/services/api";

const { t } = useI18n();
const router = useRouter();
const username = ref("admin");
const password = ref("123456");

const handleLogin = async () => {
  if (username.value && password.value) {
    try {
      // const res = await getUser();

      const response = await fetch("http://localhost:3456/api/user");
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }

    // try {
    //   // const response = await login({
    //   //   username: username.value,
    //   //   password: password.value,
    //   // });
    //   // console.log(response);
    //   // ElMessage.success(t("loginSuccess"));
    //   // router.push("/documentation");
    // } catch (error) {
    //   ElMessage.error(t("loginError"));
    // }
  } else {
    ElMessage.warning(t("fillCredentials"));
  }
};
</script>

<style scoped>
.Login {
  @apply w-full h-screen flex justify-center items-center bg-gray-100;
}

.content {
  @apply bg-white p-10 rounded shadow-md w-80;
}

.title {
  @apply text-center mb-4;
}
</style>
