<!-- oneComponentApp -->
<script setup>
//자식 컴포넌트는 template 안에서 태그로 인식
import OneSection from "@/components/OneSection.vue";
</script>
<template>
  <h1>컴포넌트 기초</h1>
  <section>
    <h2>컴포넌트 1개</h2>
    <!-- 자식 컴포넌트는 부모 컴포넌트의 화면 구성 일부 -->
    <OneSection />
  </section>
  <section>
    <h1>여러개의 컴포넌트</h1>
    <section class="box">
      <h4>한개의 컴포넌트</h4>
      <OneSection />
    </section>
    <section class="box">
      <h4>한개의 컴포넌트</h4>
      <OneSection />
    </section>
    <section class="box">
      <h4>한개의 컴포넌트</h4>
      <OneSection />
    </section>
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
