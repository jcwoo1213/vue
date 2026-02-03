<script setup>
import { ref, computed, reactive } from "vue";
/*
  사용할 데이터 참고
  프로필 이미지 : https://picsum.photos/200
  공식사이트    : https://ko.vuejs.org/tutorial/#step-1
*/
const profile_img = reactive({
  src: "https://picsum.photos/200",
});
const name = ref("홍길동");
const link = ref("https://ko.vuejs.org/tutorial/#step-1");
const content = ref("반갑습니다! Vue.js 1일차 학습 중 입니다");
let counter = ref(0);
const accessTime = computed(() => {
  return new Date().toLocaleTimeString();
});

const now = ref(new Date().toLocaleTimeString());
function changeTime() {
  const newDate = new Date();
  const newTimeStr = newDate.toLocaleTimeString();
  now.value = newTimeStr;
}
function count() {
  counter.value++;
}
const getTime = computed(() => {
  const time = Number(counter.value);
  const HH = Math.floor(time / 3600);
  const temp = time % 3600;
  const MM = Math.floor(temp / 60);
  const SS = temp % 60;
  return `${HH}:${MM}:${SS}`;
});
const time = new Date();
time.set;
setInterval(changeTime, 1000);
setInterval(count, 1000);
</script>

<template>
  <div class="card">
    <img alt="프로필 사진" class="profile-img" v-bind="profile_img" />
    <h1>{{ name }}</h1>
    <p>{{ content }}</p>
    <a target="_blank" class="link-btn" v-bind:href="link"
      >공식 문서 방문하기</a
    >
    <p>접속시각:{{ accessTime }}</p>
    <p>현재시각:{{ now }}</p>
    <p>접속시간:{{ getTime }}</p>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: sans-serif;
  background-color: #f9f9f9;
}
.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #42b883;
}
.link-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
