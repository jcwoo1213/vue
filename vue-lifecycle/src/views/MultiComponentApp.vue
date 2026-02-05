<!-- oneComponentApp -->
<script setup>
//자식 컴포넌트는 template 안에서 태그로 인식
import OneSection from "@/components/OneSection.vue";
import { ref } from "vue";
const propList = ref([
  { name: "김민교", message: "Hello" },
  { name: "김상우", message: "good morning" },
  { name: "이한나", message: "Today is" },
]);
// 이벤트 핸들러
const msgHandler = () => {
  alert("자식 컴포넌트의 메세지 처리");
};
const starName = ref("부모");
const startPoint = ref(0);
const createStarPoint = (target, name) => {
  console.log(target, name);
  starName.value = name;
  startPoint.value = Math.ceil(Math.random() * 5);
};
</script>
<template>
  <h1>컴포넌트 기초</h1>
  <section>
    <h2>컴포넌트 1개</h2>
    <!-- 자식 컴포넌트는 부모 컴포넌트의 화면 구성 일부 -->
    <OneSection v-bind:content="'Hello,world'" />
  </section>
  <p>{{ starName }}/별점:{{ startPoint }}</p>
  <section>
    <h1>여러개의 컴포넌트</h1>
    <!-- 핸들러 필요 -->
    <OneSection
      v-for="prop in propList"
      v-bind:content="prop.message"
      v-on:sendMsg="msgHandler"
      v-on:callStarPoint="createStarPoint"
    />
  </section>
</template>
<style scoped>
section {
  border: 1px solid blue;
  margin: 10px;
}
.box {
  border: 1px dotted green;
  margin: 10px;
}
</style>
