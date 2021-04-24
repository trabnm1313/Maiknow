<template>
    <div id="forgotPassword" class="hero is-fullheight" :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                    <div class="box">
                        <div class="columns is-centered is-vcentered is-mobil">
                             <div class="column is-9 mb-6 pt-6">
                                    <img id="img-column" :src="require('../assets/forbiden.png')">
                                    <div class="title" id="head-text">ERROR</div>
                                    <div class="title" id="head-text">403 NOT FOUND</div>
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
        font-weight: bold;
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