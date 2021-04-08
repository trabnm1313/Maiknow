<template>
    <div id="login" class="hero is-fullheight" :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }">
        <div class="wrapper">
            <div class="wave1"></div>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-10 is-offset-1">
                    <div class="box">
                        <div class="columns">
                             <div class="column is-three-fifths">
                                    <div class="title" id="welcome-text">Welcome to <br> Prosthetic & Orthotic Manage System</div>
                                    <img id="img-column" :src="require('../assets/new.png')">
                            </div>
                            <div class="column" id="textbox">
                                <form >
                                    <div class="title" id="user-text">USER LOGIN</div>
                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-large" type="text" name="username" v-model="input.username" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-large" type="password" name="password" v-model="input.password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <button type="button" class="button is-block is-danger is-large is-fullwidth" @click="login()">Login</button>
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

// import axios from "axios";
export default {
    name: 'Login',
    data() {
      return {
          input: {
                    username: "",
                    password: ""
                }
      }
    },
    methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == 'it62070019' && this.input.password == 123456){
                        alert('correct')
                        this.$router.replace({ name: "home" });
                    } else {
                        alert("username และ password ไม่ตรงกัน");
                    }
                } else {
                    alert("กรุณากรอก username และ password ");
                }
            }
        }
  }
</script>

<style scoped>
    #login{
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
        font-family: 'K2D' , serif;;
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
        width: 630px;
        height: 408px;
    }
</style>