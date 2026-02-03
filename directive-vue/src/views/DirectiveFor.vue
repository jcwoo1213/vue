<script setup>
import { ref } from "vue";
const ary = ["마우스", "키보드", "USB", "마우스패드"];
const itemList = ref(ary);
const friends = ref(["홍길동", "김명선"]);
let newFriend = ref("박우석");
//함수
const addFriend = () => {
  friends.value.push(newFriend.value);
  newFriend.value = "";
};
</script>
<template>
  <h2>전자기기 목록</h2>
  <ul>
    <li v-for="value in itemList">{{ value }}</li>
  </ul>
  <hr />
  새로운친구:
  <input type="text" v-model="newFriend" v-on:change="addFriend" />
  <ul>
    <li v-for="(value, idx) in friends">{{ `${idx}: ${value}` }}</li>
  </ul>
</template>
<style scoped></style>
