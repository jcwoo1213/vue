<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <h1>Vue 라우터 샘플</h1>

  <br />
  <main>
    <!-- 라우터 통해 컴포넌트 출력 -->
    <RouterView />
  </main>
</template>

<style scoped>
main {
  border: 2px solid black;
}
</style>
