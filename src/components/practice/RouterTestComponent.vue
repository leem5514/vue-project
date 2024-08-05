<template>
    <h1>화면 라우팅 테스트</h1>
    <div><button @click="spaMove1">modeling 페이지로 이동(url)</button></div>
    <div><button @click="spaMove2">modeling 페이지로 이동(name)</button></div>
    <div><button @click="hrefMove">modeling 페이지로 이동(href)</button></div>
    <div><button @click="reloadPage">전체화면 reload</button></div>
</template>

<script>
export default{
    data(){
        return{
            
        }
    },
    methods:{
        // router을 통한 spa 방식은 created 함수가 실행 x
        spaMove1(){
            this.$router.push("/practice/modeling");
        },
        spaMove2(){
            this.$router.push({name:"ModelingComponent"});
        },
        hrefMove(){
            window.location.href="/practice/modeling";
        },
        reloadPage(){
            window.location.reload();
        },
    },
}
</script>