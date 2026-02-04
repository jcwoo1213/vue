<script setup>
import { ref, computed } from "vue";
const score = ref(80);
const getRandmoValue = () => {
  score.value = Math.round(Math.random() * 60) + 40;
};
const point = ref(100); //포인트
const checked = ref(false);
</script>
<template>
  <!-- <input type="number" v-model="score" min="0" max="100" /> -->
  <button v-on:click="getRandmoValue">랜덤</button>
  <p>{{ score }}</p>
  <p v-if="score >= 90">A학점</p>
  <!-- <p></p> 끊어지면안됨-->
  <p v-else-if="score >= 80">B학점</p>
  <p v-else-if="score >= 70">C학점</p>
  <p v-else-if="score >= 60">D학점</p>
  <p v-else>F학점</p>
  <hr />
  <input type="number" v-model="point" />
  <p name="VVIP" v-if="point >= 300">점수 {{ point }}은 우수 고객 입니다.</p>
  <p name="SVIP" v-else-if="point >= 200">
    점수 {{ point }}은 일반 고객 입니다.
  </p>
  <p name="VIP" v-else>점수 {{ point }}은 신규 고객입니다.</p>
  <hr />
  <label><input type="checkbox" v-model="checked" />동의합니다</label>
  <!-- false면 없애버림 -->
  <p v-if="checked">if</p>
  <!-- show는 true시 보여주고 false면 display:none else사용불가 -->
  <p v-show="checked">체크됨</p>
  <p v-show="!checked">체크되지않음</p>
</template>
