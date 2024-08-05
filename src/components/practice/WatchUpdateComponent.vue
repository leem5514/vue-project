<template>
    <div>watch 함수 예제</div>
    <div>count : {{ count }}</div>
    <button @click="incrementCount">증가버튼</button>
    <br>

    <h1>업데이트 함수 예제</h1>
    <div>message : {{ message }}</div>
    <button @click="updateMessage">업데이트 메세지</button>
</template>
<script>
export default{
    data() {
        return{
            count : 0,
            message: "hello java"
        }
    },
    // 특정 변수값의 변경사항을 인지하는 hook 함수
    watch:{
        // 인지하고자 하는 변수값과 일치하는 함수명
        count(){
            alert("count 변경값")
        }
    },
    // dom 객체(화면)의 변경사항을 인지하는 hook 함수
    updated(){
        alert("dom 요소 변경")
    },
    methods:{
    // 내가 정의한 함수 작성 / 내장함수인경우는 밖 가능
        incrementCount() {
            this.count ++;
        },
        updateMessage() {
            this.message = "hello python"
        }
    }
}
</script>