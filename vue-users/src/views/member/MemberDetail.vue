<script setup>
import { useRoute, RouterLink } from "vue-router";
import { onBeforeMount, ref } from "vue";
const route = useRoute(); // 호출당한 정보
const server = "https://jsonplaceholder.typicode.com";
const userId = route.params.id;
const member = ref({});

onBeforeMount(async () => {
  const info = await fetch(`${server}/users/${userId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  member.value = info;
  console.log(member.value);
});
</script>
<template>
  <h1>회원관리</h1>
  <p>
    <RouterLink :to="{ name: 'main' }">TOP</RouterLink>
    ><RouterLink :to="{ name: 'memberList' }">회원리스트</RouterLink>
    >회원 상세 정보
  </p>
  <h2>회원상세정보</h2>
  <div>
    <div><span>ID:</span>{{ member.id }}</div>
    <div><span>이름:</span>{{ member.name }}</div>
    <div><span>이메일:</span>{{ member.email }}</div>
    <div><span>연락처:</span>{{ member.phone }}</div>
  </div>
</template>
<style scoped>
span {
  font-weight: bold;
}
</style>
