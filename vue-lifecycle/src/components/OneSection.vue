<!-- components/OneSection -->
<script setup>
import { ref } from "vue";
const twoVal = ref("");
</script>
<template>
  <section class="box">
    <h4>한개의 컴포넌트</h4>
    <p>{{ twoVal }}</p>
    <input type="text" v-model="twoVal" />
    <p>컴포넌트</p>
  </section>
</template>
<style>
.box {
  border: 1px dotted green;
  margin: 10px;
}
</style>
