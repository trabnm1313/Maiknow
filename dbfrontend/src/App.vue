<template>
  <div id="app">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=K2D">

    <div v-if="$route.fullPath != '/login' && $route.fullPath != '/forgotPassword' && $route.fullPath != '/forbiden'  && $route.fullPath != '/notFound'">
      <div id="home" class="hero is-fullheight">
       <div class="hero-body pl-0 pt-2 mb-2 pb-1">
          <div class="container is-fluid px-0 ">
        <div class="columns">
            <div class="column is-3">
        <aside class="menu">
                <ul class="menu-list ">
                    <li class="mb-6">
                    <div class="columns is-vcentered">
                        <div class="column mt-4" id="pro">
                          <img class="mt-5" id="imgPro" src="@/assets/user.png">
                        <span id="pro-text" class="f">{{prosthesisAccount.fname}} {{prosthesisAccount.lname}}</span>
                        <p id="role">{{prosthesisAccount.role}}</p>
                        </div>
                    </div>
                    </li>
                    <a style="hover" @click="$router.replace({ name: 'dashboard' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/dashboard.png">
                    <lable class="menu-text">Dashboard</lable>
                    </li></a>
                    <a @click="$router.replace({ name: 'manageCase' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/pen.png">
                    <label class="menu-text">Manage Case</label>
                    </li></a>
                    <a @click="$router.replace({ name: 'managePatient' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/patient.png">
                    <label class="menu-text">Manage Patient</label>
                    </li></a>
                    <a @click="$router.replace({ name: 'community' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/communities.png">
                    <label class="menu-text">Community</label>
                    </li></a>
                </ul>
                <div style="height: 80vh"></div>
                <ul class="menu-list" id="menu-bottom">
                    <a @click="$router.replace({ name: 'editProfile' });">
                    <li class="mb-3 columns is-vcentered">
                    <img class="menu-img mx-3 " src="@/assets/edituser.png">
                    <label class="menu-text">Edit Profile</label>
                    </li></a>
                    <a @click="$router.replace({ name: 'changePassword' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/padlock.png">
                    <label class="menu-text">Change Password</label>
                    </li></a>
                    <a @click="modalLogout = true">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" src="@/assets/exit.png">
                    <label class="menu-text">Log out</label>
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
              Are you sure you want to logout ?
              <div>
              <button class="button is-rounded" @click="$router.replace({ name: 'login' });" style="background-color: #BA9657; color: #E2D8C9;">Yes</button>
              <button class="button is-rounded" @click="modalLogout = false" style="background-color: #253D39; color: #E2D8C9;">No</button>
            </div>
              </section>
            
          </div>
        </div>

  </div>
  
</template>
<script>
export default {
  
    name: 'home',
    data() {
      return {
        prosthesisAccount:{id:'1', fname:'ReVue', lname:'Vizz', role:'WebFrontend'},
        modalLogout: false,
        
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
      background-color: #253D39;
      color: #E2D8C9;
  }
</style>