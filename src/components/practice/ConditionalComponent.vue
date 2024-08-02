<template>
    <h1>Conditional Component</h1>
    
    <button @click="login">로그인하기</button>
    <div v-if="isLoginded">환영합니다 땡규님</div>
    <div v-else>로그인이 후 이용가능</div>

    <h1>상품목록조회</h1>
    <ul>
        <!-- v-for 에서는 반드시 key 값을 지정. key 을 지정 함으로 각 요소마다의 고유식별 -->
        <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul>
</template>

<script>
export default{
    data(){
        return{
            isLogined:false,
            products:[
                {id:1, name:"banana"},
                {id:2, name:"apple"},
                {id:3, name:"strawberry"}
            ],
        }
    },
    methods: {
        click() {
            this.isLogined = true
        }
    },
}
</script>