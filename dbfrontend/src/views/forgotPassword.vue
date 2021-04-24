<template>
    <div id="forgotPassword" class="hero is-fullheight" :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                    <div class="box">
                        <div class="columns is-centered is-vcentered is-mobil">
                             <div class="column">
                                    <img id="img-column" :src="require('../assets/forgot.png')">
                                    <div class="title" id="head-text">Forgot your password?</div>
                                    <p>Enter your e-mail address below to recieve your password reset instruction</p>
                                    <div class="field my-4 mx-6">
                                        <div class="control">
                                    <input class="input" type="email" placeholder="e-mail address">
                                        </div>
                                    </div>
                                     <button type="button" class="button has-text-white is-rounded is-centered is-medium" @click="Recover()">Recover Password</button>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    }
  }
</script>

<style scoped>
    #forgotPassword{
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
        font-family: 'K2D' , serif;
        position: relative;
    }
    .button{
        background-color: #385B56;
    }
    
    .box{
        background: linear-gradient(180deg, #E2D8C9 57.55%, #FFFFFF 99.65%);
        box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.4);
    }
    #head-text{
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        color: #385B56;
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
</style>