<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const member = ref({ id: "", name: "", email: "", phone: "" });
const server = "https://jsonplaceholder.typicode.com";

const addMember = async () => {
  console.log(member.value);
  const result = await fetch(`${server}/users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(member.value),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
  console.log(result);
  router.push({ name: "memberDetail", params: { id: result.id } });
};
</script>
<template>
  <h1>회원관리</h1>
  <p>
    <RouterLink :to="{ name: 'main' }">TOP</RouterLink> >
    <RouterLink :to="{ name: 'memberList' }">회원리스트</RouterLink>
    >회원 정보 추가
  </p>
  <h3>회원 정보 추가</h3>
  <div>
    <h4>정보를 입력하고 등록 버튼을 클릭해주세요</h4>
    <div><span>ID</span><input type="text" v-model="member.id" /></div>
    <div><span>이름</span><input type="text" v-model="member.name" /></div>
    <div><span>이메일</span><input type="email" v-model="member.email" /></div>
    <div><span>연락처</span><input type="text" v-model="member.phone" /></div>
    {{ member }}
    <button type="button" v-on:click="addMember">등록</button>
  </div>
</template>
<style scoped></style>
