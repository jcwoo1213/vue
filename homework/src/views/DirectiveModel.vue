<script setup>
import { ref } from "vue";
const inputNameModel = ref("양방향");
const rCount = ref(5);
const textAReaInput = ref("입력하세요");
const inputNumberModel = ref(0);
const memberType = ref("일반");
const isSelected = ref(null);
const gender = ref(null);
const selectOS = ref(["Mac", "Linux"]);
const choiceOS = ref("Mac");
</script>
<template>
  <!-- v-model:기본적으로 value 속성에 자동 연결(바인딩)
  input textarea select
  양방향 바인딩 ref 함수 기반의 반응형객체만 가능-->
  <h3>input 태그의 type 속성</h3>
  <input type="text" v-model.lazy="inputNameModel" />
  <p>{{ inputNameModel }}</p>
  <input type="number" v-model="inputNumberModel" id="num" />
  <p>{{ inputNumberModel + 1000 }}</p>
  <h3>textarea태그</h3>
  <textarea v-bind:rows="rCount" v-model="textAReaInput"></textarea>
  <p v-html="textAReaInput.replace(/\n/g, '<br')"></p>
  <p>{{ rCount }}</p>
  <h3>select 태그</h3>
  <select v-model="memberType">
    <option value="일반">일반</option>
    <option value="우수">우수</option>
    <option value="특별">특별</option>
  </select>
  <p>{{ memberType }}</p>
  <!-- Checkbox -->
  <hr />

  <h2>checkbox1개</h2>
  <label><input type="checkbox" v-model="isSelected" />동의합니다</label
  ><!--checkbox1개인경우 의미없음 -->
  <p>{{ isSelected }}</p>
  <label
    ><input
      type="checkbox"
      v-model="gender"
      true-value="여"
      false-value="남"
    />성별</label
  >
  <p>{{ gender }}</p>
  <hr />
  <!-- select 여러개인경우 value 들어감 -->
  <h2>checkbox 여러개</h2>
  <label><input type="checkbox" v-model="selectOS" value="Mac" />Mac</label>
  <label><input type="checkbox" v-model="selectOS" value="Win" />Win</label>
  <label><input type="checkbox" v-model="selectOS" value="Linux" />Linux</label>
  <p>{{ selectOS }}</p>
  <!-- radio -->
  <h2>radio 여러개</h2>
  <label><input type="radio" v-model="choiceOS" value="Mac" />Mac</label>
  <label><input type="radio" v-model="choiceOS" value="Win" />Win</label>
  <label><input type="radio" v-model="choiceOS" value="Linux" />Linux</label>
  <p>{{ choiceOS }}</p>
</template>
<style scoped></style>
