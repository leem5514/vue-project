<template> 
  <!-- router-view 을 통해서 app.vue 에서 화면 라우팅 -->
  <!-- <HeaderComponent /> -->
  <v-app>
    <v-main>
      <router-view /> <!-- 이름 무결성 router-view-->
    </v-main>
    
  </v-app>
  <!-- <FooterComponent /> -->
  
</template>
<!-- template 에는 html 코드가 들어가고, script안에는 js 코드가 들어감, 디자인은 style태그 안 삽입 -->
<!-- vue 파일 안에는 head 태그가 없고, head에 공통 import 사항은 main.js에 구성 -->

<script>
// App.vue는 Vue 애플리케이션의 루트 컴포넌트(재활용이 가능한 화면)

// import 하고 사용하지 않으면 오류 발생
//import HelloWorld from './components/HelloWorld.vue'
// import HeaderComponent from './components/HeaderComponent.vue'
// import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
    // HeaderComponent, FooterComponent
  }
}
</script>


<style>
</style>
