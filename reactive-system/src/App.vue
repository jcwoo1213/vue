<script setup>
//composition api =>script setup 추가
// => 적절한 함수 사용
//ref:CRUD가능한 반응형 객체 만드는 함수 중 하나
// computed =>읽기전용
import { ref, reactive, computed, watch, onBeforeMount } from "vue";
//변경필요 없으면 그냥 사용
const msg = "Hello,World";
const now = new Date();
const nowStr = now.toLocaleTimeString();
let timeStr = nowStr;
//객체로 안에 값 들어있음
const timeStrRef = ref(nowStr);
function changeTime() {
  const newTime = new Date();
  const newTimeStr = newTime.toLocaleTimeString();
  //값 변경
  timeStrRef.value = newTimeStr;
}
setInterval(changeTime, 1000);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>처음 시간:{{ nowStr }}</p>
  <p>현재 시간:{{ timeStrRef }}</p>
</template>

<style scoped></style>
