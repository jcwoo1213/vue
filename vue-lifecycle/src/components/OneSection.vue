<!-- components/OneSection -->
<script setup>
import { ref, defineProps, defineEmits } from "vue";
//props =>readonly
// defineProps(["content"]);
//template에서 사용할경우 그냥 사용가능하지만
// 다른곳에서 사용할 경우 다른곳에 저장해야함
const props = defineProps({
  title: {
    type: String,
    default: "No title",
  },
  content: {
    type: [String, Object], //이중에 하나
    required: true, //필수지만 에러를 발생시키지는않음
  },
});
//emit : 자식=>부모 ,메세지 혹은 데이터
// 1) event정의
const emit = defineEmits(["sendMsg", "callStarPoint"]);
// 2)emit함수 이용해서 이벤트 발생
const emitTest = () => {
  emit("sendMsg");
};

const randomVal = () => {
  // 메시지,자식명,값
  emit("callStarPoint", "자식", props.title); //부모에게 전달할 데이터도 포함
};
// const content = ref("");
</script>
<template>
  <section class="box">
    <h4>한개의 컴포넌트</h4>
    <p>{{ ` title:${title}` }}</p>
    <p>{{ ` content:${content}` }}</p>
    <input type="text" />
    <p>컴포넌트</p>
    <button v-on:click="randomVal" v-on:mouseover="emitTest">클릭</button>
  </section>
</template>
<style>
.box {
  border: 1px dotted green;
  margin: 10px;
}
</style>
