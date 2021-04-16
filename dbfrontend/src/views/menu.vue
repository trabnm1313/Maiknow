<template>
    <aside class="menu">
                <ul class="menu-list ml-5">
                    <li class="mb-6">
                    <div class="columns is-vcentered">
                        <div class="column mt-4" id="pro">
                          <img class="mt-5" id="imgPro" :src="require('../assets/user.png')">
                        <span id="pro-text" class="f">{{prosthesisAccount.fname}} {{prosthesisAccount.lname}}</span>
                        <p id="role">{{prosthesisAccount.role}}</p>
                        </div>
                    </div>
                    </li>
                    <a @click="$router.replace({ name: 'dashboard' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" :src="require('../assets/dashboard.png')">
                    <lable class="menu-text">Dashboard</lable>
                    </li></a>
                    <a @click="$router.replace({ name: 'manageCase' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" :src="require('../assets/pen.png')">
                    <label class="menu-text">Manage Case</label>
                    </li></a>
                    <a @click="$router.replace({ name: 'managePatient' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" :src="require('../assets/patient.png')">
                    <label class="menu-text">Manage Patient</label>
                    </li></a>
                    <a @click="$router.replace({ name: 'community' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" :src="require('../assets/communities.png')">
                    <label class="menu-text">Community</label>
                    </li></a>
                </ul>
                <ul class="menu-list ml-5" style="margin-top: 40%">
                    <a @click="$router.replace({ name: 'editProfile' });">
                    <li class="mb-3 columns is-vcentered">
                    <img class="menu-img mx-3 " :src="require('../assets/edituser.png')">
                    <label class="menu-text">Edit Profile</label>
                    </li></a>
                    <a @click="$router.replace({ name: 'changePassword' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" :src="require('../assets/padlock.png')">
                    <label class="menu-text">Change Password</label>
                    </li></a>
                    <a @click="$router.replace({ name: 'login' });">
                    <li class="mb-3 columns is-vcentered" >
                    <img class="menu-img mx-3" :src="require('../assets/exit.png')">
                    <label class="menu-text">Log out</label>
                    </li></a>
                </ul>
                </aside>
</template>
<script>
export default {
    name: 'home',
    data() {
      return {
        prosthesisAccount:{id:'1', fname:'ReVue', lname:'Vizz', role:'WebFrontend'}
    }
  }
}
</script>

<style scoped>
  aside{
    font-family: 'K2D' , serif;
    background-color:#385B56;
  }
  #imgPro{
    position: absolute;
    bottom: 88.6%;
    left: 1.5%;
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
    background-color: #253D39;
    border-radius: 15px 50px 50px 15px;
    }
</style>