<script setup>
import { ref } from "vue";
const randomValue = ref(0);
//뷰에서는 이벤트 객체 거의 사용안함
const onClickFunc = () => {
  randomValue.value = parseInt(Math.random() * 100);
};
const selectTag = (selectedTag) => {
  alert(`Tag:${selectedTag}`);
};
</script>
<template>
  <h3>On디렉티브 기본</h3>
  <button
    type="button"
    v-on:click="onClickFunc"
    @mouseover="randomValue = '멀티이벤트'"
  >
    클릭
  </button>
  <p>결과:{{ randomValue }}</p>
  <br />
  <div v-on:click="selectTag('div')">
    div
    <form v-on:click.stop.self="selectTag('form')">
      form
      <a
        href="http://www.naver.com"
        style="display: block"
        v-on:click.prevent="selectTag('a')"
      >
        a태그
        <!-- once는 핸들러가 작동하는걸 1번만 하는거지 클릭자체가 안되는게 아님 -->
        <p v-on:click.once="selectTag('p')">p태그</p>
      </a>
    </form>
  </div>
  <input @keyup.ctrl.enter="selectTag('input')" />
</template>
<style scoped>
div,
div * {
  border: 1px solid burlywood;
}
a {
  background-color: aliceblue;
}
</style>
