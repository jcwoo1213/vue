<script setup>
// 디렉티브 html제어 명령어
// v-bind:html tag의 속성에 데이터를 바인드하는 디렉티크
// 단방향 바인딩만 가능 변수=>html
// 반응형 객체이기만 하면 아무거나 가능
import { ref, reactive, computed } from "vue";
const info = ref("<a>https://vuejs.org</a>");
const url = ref("https://vuejs.org");
const isDisabled = ref(true);
const isAttributes = reactive({
  src: "./src/assets/logo.svg",
  alt: "vue 기본 로고",
  width: "150px",
});
</script>
<template>
  <h2>특정속성의 경우</h2>
  <!-- v-html =>innerhtml -->
  <p v-html="info"></p>
  <!-- v-text =>innertext(덮어씌우기) -->
  <p v-text="info"></p>
  <!-- text에만 반응 -->
  <p>공식사이트:{{ info }}</p>
  <hr />
  <h2>일반속성</h2>
  <p><a href="https://vuejs.org">공식사이트</a></p>
  <p><a v-bind:href="url">vue공식사이트</a></p>
  <!-- bind: 하면 js영역 -->
  <a v-bind:href="url + '/guide/introdution.html'">가이드페이지</a>
  <p><button v-bind:disabled="isDisabled">동의합니다</button></p>
  <!-- 한번에 제어 대신 명칭일치 -->
  <img v-bind="isAttributes" />
</template>
<style></style>
