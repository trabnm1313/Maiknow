<template>
  <div id="home" class="hero is-fullheight">
    <div class="hero-body py-5 pr-6">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
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

          </div>
          <div class="column is-9 mt-2">
            <div id="detail" class="box">
              <div class="columns">
                <div class="column is-one-third">
                  <div class="columns">
                    <label class="text-add">Patient Information</label>
                  </div>
                </div>
                <div class="column">
                  <div class="columns mb-5">
                    <label class="text-add">HN : </label>
                    <input style="color: #385B56; background: #D1C9BC;" type="text" value="10230" disabled>
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Firstname : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="Punpetch">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Lastname : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="Prakongpak">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">ID Card : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="ไม่บอก">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Address : </label>
                    <textarea style="width: 511px; height: 203px; resize: none; background: #FFF8EE; color: #385B56;"></textarea>
                  </div>
                  <div class="columns mt-5 mb-5">
                    <label class="text-add">D.O.B : </label>
                    <input style="background: #FFF8EE; color: #385B56" type="date">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Age : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="19" disabled>
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Nationality : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="Thai">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Religion : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="Asian">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Occupation : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="นศ.">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Office Name : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="KMITL">
                  </div>
                  <div class="columns mt-5 is-pulled-right">
                    <button class="button is-rounded mr-3"  style="background: #BA9657; color: #FFFFFF">Cancel</button>
                    <button class="button is-rounded" style="background: #385B56; color: #FFFFFF">Comfirm</button>
                  </div>
                </div>
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
  name: 'home',
  data() {
    return {
      page: 1,
      prosthesisAccount:{id:'1', fname:'ReVue', lname:'Vizz', role:'WebFrontend'},
      patients:[{hn:'1', fname:'Review', lname:'Vizz', lastAppointment:'01-01-2020', claim:'none', status:'none', prosthesis:'Mai'},
        {hn:'2', fname:'Big', lname:'Boss', lastAppointment:'05-05-2020', claim:'none', status:'none', prosthesis:'Mai'}
      ],
      selectFilter: '0',
      searchTxt: '',
      created () {
        document.title = this.$route.meta.title;
      },
      methods: {

      }
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

.table{
  background-color: #E2D8C9;
}
#detail{
  background-color: #ded7c8;
}
input#search{
  background-position: 8%;
  background-image: url("../assets/search.png");
  background-size:7%;
  background-repeat: no-repeat;
  text-indent: 13%;
}
input::placeholder{
  font-size: 16px;
}
.textHeader{
  font-weight: 500;
  font-size: 22px;
  color: #385B56;
}
.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #cfcfcf;
}
a:hover {
  background-color: #253D39;
  border-radius: 15px 50px 50px 15px;
}


/*add case*/
.text-add{
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #385B56;
}
</style>