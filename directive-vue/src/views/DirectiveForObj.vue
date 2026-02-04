<script setup>
import { ref } from "vue";
const friends = ref([
  { id: "01", name: "홍길동", age: 22 },
  { id: "02", name: "김민식", age: 25 },
]);
</script>
<template>
  <h2>친구목록</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>나이</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="friend in friends" v-bind:key="friend.id">
        <td>{{ friend.id }}</td>
        <td>{{ friend.name }}</td>
        <td>{{ friend.age }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style>
table,
th,
td {
  border: 2px solid;
  border-collapse: collapse;
}
</style>
