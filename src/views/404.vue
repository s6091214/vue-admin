<template>
  <div>
    <el-result
      icon="warning"
      title="404"
      sub-title="Please follow the instructions"
    >
      <template #extra>
        <el-button type="primary" @click="$router.push('/')">Home</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
