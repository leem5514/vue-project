<template>
    <h1>hollo world {{language}}</h1>

    <!-- :value 모델은 단방향 데이터 바인딩 -->
    <input type="text" :model="value1">
    <!-- v-model문법은 양방향 데이터 바인딩 -->
    <input type="text" v-model="value2">
    <button @click="showValue">변수변경사항확인</button>
    
    <h1>{{count}}</h1>
    <button @click="increment">increment</button>

    <!-- doubleCount : 함수 -->
    <h1>{{doubleCount}}</h1>

    <br>
    <input type="number" v-model="count2">
    <button @click="increment2">increment2</button>
</template>

<script>
export default {
    data() {
        return {
            language: "python",
            value1: "python",
            value2: "java",
            count: 0,
            count2: 0
        } 
    },
    // 종속된 반응형 데이터가 변경될 때의 함수를 다시 실행하여 값을 계산 하는 함수
    computed: {
        doubleCount() {
            return this.count * 2;
        }
    },
    methods: {
        showValue(){
            alert(this.value2);
        },
        increment(){
            this.count += 1;
        },
        increment2() {
            this.count2++;
        }
    }
}    
</script>
