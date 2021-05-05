<template>
  <div id="app">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=K2D">

    <div v-if="$route.fullPath != '/' && $route.fullPath != '/forgotPassword' && $route.fullPath != '/forbidden'  && $route.fullPath != '/notFound'">
      <div id="home" class="hero is-fullheight">
       <div class="hero-body pl-0 pt-2 mb-2 pb-1">
          <div class="container is-fluid px-0 ">
        <div class="columns">
            <div class="column is-3">
        <aside class="menu">
                <ul class="menu-list ">
                    <li class="mb-6">
                    <div class="columns is-vcentered" @click="pushRouter('editProfile')">
                        <div class="column mt-4" id="pro">
                          <img class="mt-5" id="imgPro" src="@/assets/user.png">
                        <span id="pro-text" class="f">{{prosthesisAccount['Staff.fname']}} {{prosthesisAccount['Staff.lname']}}</span>
                        <p id="role">prosthesis</p>
                        </div>
                    </div>
                    </li>
                    <a style="hover" @click="pushRouter('dashboard')">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/dashboard.png">
                    <p class="menu-text">Dashboard</p>
                    </li></a>
                    <a @click="pushRouter('manageCase')">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/pen.png">
                    <p class="menu-text">Manage Case</p>
                    </li></a>
                    <a @click="pushRouter('managePatient')">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/patient.png">
                    <p class="menu-text">Manage Patient</p>
                    </li></a>
                    <a @click="pushRouter('community')">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/communities.png">
                    <p class="menu-text">Community</p>
                    </li></a>
                </ul>
                <ul class="menu-list" id="menu-bottom">
                    <a @click="pushRouter('editProfile')">
                    <li class="mb-3 columns is-vcentered">
                    <img class="menu-img mx-3 " src="@/assets/edituser.png">
                    <p class="menu-text">Edit Profile</p>
                    </li></a>
                    <a @click="pushRouter('changePassword')">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/padlock.png">
                    <p class="menu-text">Change Password</p>
                    </li></a>
                    <a @click="modalLogout = true">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/exit.png">
                    <p class="menu-text">Log out</p>
                    </li></a>
                </ul>
                </aside>
                </div>
                <div class="column is-9 mt-2">
                  <router-view :key="$route.fullPath" />
                </div>
        </div>
    </div>
  </div>
  </div>
</div>

  <div v-else><router-view :key="$route.fullPath" /></div>

  <div class="modal" :class="{'is-active': modalLogout}">
          <div class="modal-background"></div>
          <div class="modal-card">
            <section class="modal-card-body">
              <!-- Content ... -->
              <div class="columns is-vcentered">
                <div class="column has-text-centered modal-text">
                  <p>Are you sure</p>
                  <p>you want to logout ?</p>
                </div>
              </div>
              <div class="columns">
                <div class="column has-text-centered">
                <button class="button is-rounded mr-4" @click="$router.replace({ name: 'login' }); modalLogout = false;" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
                <button class="button is-rounded ml-4" @click="modalLogout = false" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">No</button>
                </div>
              </div>
              </section>
            
          </div>
        </div>

  </div>
  
</template>
<script>
import axios from "axios";
export default {
  
    name: 'home',
    data() {
      return {
        prosthesisAccount:{},
        modalLogout: false,
    }
  },
  created(){
            axios
            .get('http://localhost:3000/user/current', {
                                headers: {
                                    'Authorization': 'Bearer '+ this.getLocal()
                                            }
                                })
            .then((response) => {
                        console.log(response)
                        if(response.status == 200){
                            this.prosthesisAccount = response.data
                        }
                    })
            .catch((err) => {
                        if(err.request.status === 403){
                                    this.$router.replace({ name: "forbidden" })
                                }
                        if(err.request.status === 404){
                                    this.$router.replace({ name: "notFound" })
                                }
                        console.log(err)
                    }); 
  },
  methods: {
          plusPage(){
            if(this.page >= 1 && this.page < 10){
              this.page++
            }
          },
          minusPage(){
            if(this.page <= 10 && this.page > 1){
              this.page--
            } 
          },
          pushRouter(nameRouter){
            this.$router.replace({ name: nameRouter })
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
#home{
    font-family: 'K2D' , serif;
    background-color:#385B56;
  }
  #imgPro{
    position: absolute;
    top: -29px;
    left: 0.5%;
    max-width: 80px;
    height:80px;
  }
  #pro-text{
    margin-left: 15px;
    font-size: 16px;
    color: #E2D8C9;
  }
  #role{
    margin-left: 15px;
    font-size: 13px;
    color: #E2D8C9;
  }
  #pro{
    margin-left: 22%;
    max-width: 70%;
    background-color: #253D39;
    border-radius: 0px 50px 50px 0px;
  }
  .menu-text{
    margin-top: 8%;
    font-size: 18px;
    color: #E2D8C9;
  }
  .menu-img{
    margin-top: 8%;
    width: 18px;
    height: 18px;
  }
  a:hover {
    background-color: #253D39 !important;
    border-radius: 0px 50px 50px 0px;
    }
  .modal-card-body
  {
      background-color: #385B56;
      color: #E2D8C9;
  }
  .modal-text{
    font-weight: 500;
    font-size: 25px;
    line-height: 35px;
    text-align: center;
    color: #E2D8C9;
  }
</style>