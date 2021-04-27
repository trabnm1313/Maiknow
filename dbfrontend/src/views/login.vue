<template>
    <div id="login" class="hero is-fullheight" :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-10 is-offset-1">
                    <div class="box">
                        <div class="columns is-centered is-vcentered is-mobil">
                             <div class="column is-three-fifths">
                                    <div class="title" id="welcome-text">Welcome to <br> Prosthetic & Orthotic Manage System</div>
                                    <img id="img-column" :src="require('../assets/new.png')">
                            </div>
                            <div class="column">
                                <form>
                                    <div class="title" id="user-text">USER LOGIN</div>
                                    <div class="field my-6">
                                        <div class="control">
                                            <input :class="{'is-danger' : error}" class="input is-medium" type="text" name="username" v-model="input.username" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div class="field my-4">
                                        <div class="control">
                                            <input :class="{'is-danger' : error}" class="input is-medium" type="password" name="password" v-model="input.password" placeholder="Password" />
                                        </div>
                                    </div>
                                    
                                        <p class="help is-danger" v-if="error">{{errorMsgUser}}</p>
                                    
                                    <div class="field my-5 has-text-right" id="forgot">
                                        <div class="control">
                                            <a @click="$router.replace({ name: 'forgotPassword' })" style="color:#385B56;">Forgot your password?</a>
                                        </div>
                                    </div>
                                    
                                    <button type="button" class="button has-text-white is-rounded is-centered is-medium" @click="login()">LOGIN</button>
                                </form>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
export default {
    name: 'Login',
    data() {
      return {
          input: {
                    username: "",
                    password: ""
                },
            errorMsgUser: '',
            error: false,
      }
    },
    methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    axios
                    .post("http://localhost:3000/login", this.input)
                    .then((response) => {
                        console.log(response)
                        if(response.status == 200){
                            this.saveLocal(response.data.accessToken)
                            this.error = false
                            axios.get("http://localhost:3000/",
                            {
                                headers: {
                                    'Authorization': 'Bearer '+ this.getLocal()
                                            }
                                })
                            .then((res) => {
                                console.log(res)
                                if(res.status == 200){
                                    this.$router.replace({ name: "dashboard" })
                                }
                            })
                            .catch((err) => {
                                if(err.request.status === 403){
                                    this.$router.replace({ name: "forbidden" })
                                }
                                if(err.request.status === 404){
                                    this.$router.replace({ name: "notFound" })
                                }
                            })
                        }
                    })
                    .catch((err) => {
                        if(err.request.status === 404){
                            this.error = true
                            this.errorMsgUser = "username และ password ไม่ตรงกัน"
                        }
                        console.log(err)
                        console.log('ERROR2: ', err.request.status)
                    }); 
                } else {
                    this.error = true
                    this.errorMsgUser = "กรุณากรอก username และ password "
                }
            },
            saveLocal(auth) {
                const user = auth
                var myJ = JSON.stringify(user);
                localStorage.setItem("user", myJ)
            },
            getLocal() {
                var txt = localStorage.getItem("user");
                var obj = JSON.parse(txt);
                return obj
            }
    }
  }
</script>

<style scoped>
    #login{
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
        font-family: 'K2D' , serif;
        position: relative;
    }
    .button{
        background-color: #385B56;
    }
    #user-text{
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        text-align: center;
        color: #BA9657;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
    }
    .box{
        background: linear-gradient(90.41deg, #E2D8C9 57.55%, #FFFFFF 99.65%);
        box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.4);
    }
    #welcome-text{
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        color: #BA9657;
    }
    #img-column{
        max-width: 100%;
         height: auto;
    }
    .field{
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    }
    button{
        width: 200px;
    }
    #forgot{
        box-shadow: none;
        color: #385B56;
    }
</style>