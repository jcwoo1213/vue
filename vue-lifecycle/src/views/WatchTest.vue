<!-- views/watchTest -->
<script setup>
import { ref, computed, watch } from "vue";
const forbiddenInput = ref("바보,멍청이");
const memoContent = ref("");
//알림 메세지
const message = ref("");
//비활성화 제어
const isBlocked = ref(false);
//배열로 변환
// return 필수
const forbiddenWords = computed(() => {
  return forbiddenInput.value.split(",");
});

//이전값과 현재값을 가져올수있음
// return 불가
watch(memoContent, (newValue, oldValue) => {
  console.log("감시자", newValue, oldValue);
  for (const word of forbiddenWords.value) {
    if (newValue.includes(word)) {
      message.value = `경고:[${word}]는 금지어입니다, 입력이 차단되었습니다.`;
      isBlocked.value = true;
    }
  }
});
const resetAll = () => {
  forbiddenInput.value = "바보,멍청이";
  memoContent.value = "";
  message.value = "";
  isBlocked.value = false;
};
</script>
<template>
  <h3>콘텐츠 보안 적용</h3>
  <div>
    <label>금지어 설정:</label>
    <input
      type="text"
      name=""
      id=""
      v-model="forbiddenInput"
      placeholder="금지어는 , 로 구분"
    />
    <div>
      <!-- 바인드 디렉티브 생략 가능 -->
      <textarea
        v-model="memoContent"
        :disabled="isBlocked"
        placeholder="내용을 입력하세요"
        rows="10"
        cols="50"
      ></textarea>
    </div>
    <p>{{ forbiddenWords }}</p>
    <p v-if="message" style="color: red; font-weight: bold">{{ message }}</p>
    <button v-show="isBlocked" @click="resetAll">시스템 초기화</button>
  </div>
</template>
