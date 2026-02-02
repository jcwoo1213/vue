<!-- ref reactive 비교 -->
<script setup>
import { reactive } from "vue";

// reactive :crud가능한 반응형 객체 만드는 함수
// ref와의 차이 1)객체,배열만 가능 , 2)재할당불가
const today = new Date();
let timeStr = today.toLocaleTimeString();
const timeStrReactive = reactive({ time: timeStr });

function changeTime() {
  const newDate = new Date();
  const newTimeStr = newDate.toLocaleTimeString();
  timeStrReactive.time = newTimeStr;
}
setInterval(changeTime, 1000);
</script>
<template>
  <p>현재시간:{{ timeStr }}</p>
  <p>현재시간(reactive):{{ timeStrReactive.time }}</p>
</template>
<style></style>
