<!-- views/member/MemberList.vue -->
<script setup>
import { RouterLink, useRouter } from "vue-router";
import { onBeforeMount, ref } from "vue";
const router = useRouter();
const members = ref([]);
const server = "https://jsonplaceholder.typicode.com";
const findMemberList = async () => {
  const list = await fetch(`${server}/users`)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  members.value = list;
};
const goToDetail = (memberId) => {
  router.push({ name: "memberDetail", params: { id: memberId } });
};
//가장 밑에
//실행할 메소드
onBeforeMount(() => {
  findMemberList();
});
</script>
<template>
  <h1>회원관리</h1>
  <!-- bind이용시 name 이나 path로 접근가능  -->
  <p><RouterLink v-bind:to="{ name: 'main' }">Top</RouterLink> > 회원리스트</p>
  <h3>회원 리스트</h3>
  <p>
    신규 등록은
    <RouterLink v-bind:to="{ path: '/member/add' }">여기</RouterLink>를 클릭
  </p>
  <ul>
    <li v-for="member in members" v-on:click="goToDetail(member.id)">
      ID가{{ member.id }}인 {{ member.name }}
    </li>
  </ul>
</template>
<style scoped></style>
