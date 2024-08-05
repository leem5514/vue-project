<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="2" md="4">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        로그인
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="doLogin">
                            
                            <v-text-field
                                label="email"
                                v-model="email"
                                prepend-icon="mdi-email"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                label="password"
                                v-model="password"
                                prepend-icon="mdi-lock"
                                required
                            >
                            </v-text-field>
                            <v-row>
                                <v-col cols="6">
                                    <v-btn type="" color="red" block>비밀번호 변경</v-btn>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn type="submit" color="primary" block>로그인</v-btn>
                                </v-col>
                            </v-row>
                            
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
    export default{
        data() {
            return{
                email:"",
                password:""
            }  
        },
        methods:{
            async doLogin(){

                try {
                    const loginData = {email: this.email, password: this.password };
                    console.log(`${process.env.VUE_APP_API_BASE_URL}`);
                    const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/doLogin`, loginData);
                    const token = response.data.result.token;
                    const refreshToken = response.data.result.refreshToken;

                    console.log(jwtDecode(token));
                    const role = jwtDecode(token).role;

                    localStorage.setItem('token', token);
                    localStorage.setItem('refreshToken', refreshToken);

                    localStorage.setItem('role', role);
                    // this.$router.push("/");
                    window.location.href = "/";

                } catch(e) {
                    console.log(e)
                }
            }
            

            // try catch 으로 묶어서 login 성공 시 token을 console.log 으로 출력
        }
    }
</script>
