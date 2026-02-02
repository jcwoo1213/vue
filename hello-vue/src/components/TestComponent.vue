<!-- TestComponent.vue -->
<!-- component :html+css+js  -->
<script setup>
import { ref } from "vue";
let message = ref("메세지를 입력해주세요"); //ref=> 반응형객체
</script>
<!-- body대신 template -->
<template>
  <div>
    <!-- {{ 변수명} } = html에서 변수명 그대로 사용 -->
    <h1>{{ message }}</h1>
    <!-- v-model => 쿼리셀렉터  -->
    <input type="text" v-model="message" />
  </div>
</template>
<style></style>
