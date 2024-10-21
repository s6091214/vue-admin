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
          <el-button type="primary" class="w-full" @click="login">
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

const { t } = useI18n();
const router = useRouter();
const username = ref("admin");
const password = ref("123456");

const login = () => {
  if (username.value && password.value) {
    if (username.value === "admin" && password.value === "123456") {
      ElMessage.success(t("loginSuccess"));
      router.push("/documentation");
    } else {
      ElMessage.error(t("loginError"));
    }
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
