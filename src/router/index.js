import {createRouter, createWebHistory} from 'vue-router'; 
// @ 는 src(루트폴더 목록) 을 의미
// 파일 내부에 export default 가 있는 경우는 {} 필요 없음 , 없는 경우 {} ,필요
// import 요소가 여러개 있는 경우 {} 사용
// import HomeComponent from '@/components/HomeComponent.vue';
// import TestComponent from '@/components/TestComponent.vue';

import { practiceRouter } from './practiceRouter';
const routes = [
    // {
    //     // path 으로도 라우팅이 가능하고, name으로도 라우팅이 가능
    //     // name 으로 라우팅 하는 경우는 js 코드 내에서 라우팅 하는 경우

    //     path: '/home',
    //     name: 'HOME',
    //     component: HomeComponent
    // },
    // {
    //     path: '/test',
    //     name: 'Test',
    //     component: TestComponent
    // },
    ...practiceRouter
]

const router = createRouter({
    // vue router 는 내부적으로 두가지 방식의 히스토리 관리를 제공
    // 1) createWebHistory, 2) createHashHistory: /#/home
    // 대부분 WebHistroy 사용
    history: createWebHistory(),
    routes
});

export default router;