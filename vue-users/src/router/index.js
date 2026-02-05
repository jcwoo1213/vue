import { createRouter, createWebHistory } from "vue-router";
import AppTop from "@/views/AppTop.vue";
const router = createRouter({
  //history 모드를 사용 =>js의 history 객체와 vue router 연동
  history: createWebHistory(import.meta.env.BASE_URL),
  //경로 이용해서 컴포넌트 실행 설정
  routes: [
    {
      path: "/",
      name: "main",
      component: AppTop,
    },
    {
      path: "/member/list",
      name: "memberList",
      component: () => import("../views/member/MemberList.vue"),
    },
    {
      path: "/member/detail",
      name: "memberDetail",
      component: () => import("../views/member/MemberDetail.vue"),
    },

    {
      path: "/member/detail/:id",
      name: "memberDetail",
      component: () => import("../views/member/MemberDetail.vue"),
    },
    {
      path: "/member/add",
      name: "MemberAdd",
      component: () => import("../views/member/MemberAdd.vue"),
    },
  ],
});

export default router;
