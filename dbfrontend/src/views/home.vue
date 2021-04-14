<template>
  <div id="home" class="hero is-fullheight">
      <div class="hero-body mr-0 pt-3">
          <div class="container">
        <div class="columns">
            <div class="column is-3">
                <aside class="menu">
                <ul class="menu-list ml-5">
                    <li class="mb-6">
                    <div class="columns is-vcentered">
                        <div class="column is-3 p-0">
                        <img class="mt-5" id="imgPro" :src="require('../assets/user.png')">
                        </div>
                        <div class="column">
                        <span id="pro-text" class="f">Punpetch Prakongpak</span>
                        <p id="role">Prosthesis </p>
                        </div>
                    </div>
                    </li>
                    <li class="mb-6 columns is-vcentered">
                    <img class="menu-img mx-3" :src="require('../assets/dashboard.png')">
                    <label class="menu-text">Dashboard</label>
                    </li>
                    <li class="mb-6 columns is-vcentered">
                    <img class="menu-img mx-3" :src="require('../assets/pen.png')">
                    <label class="menu-text">Manage Case</label>
                    </li>
                    <li class="mb-6 columns is-vcentered">
                    <img class="menu-img mx-3" :src="require('../assets/patient.png')">
                    <label class="menu-text">Manage Patient</label>
                    </li>
                    <li class="columns is-vcentered">
                    <img class="menu-img mx-3" :src="require('../assets/communities.png')">
                    <label class="menu-text">Community</label>
                    </li>
                </ul>
                <ul class="menu-list ml-5" style="margin-top: 65%">
                    <li class="mb-6 columns is-vcentered">
                    <img class="menu-img mx-3 " :src="require('../assets/edituser.png')">
                    <label class="menu-text">Edit Profile</label>
                    </li>
                    <li class="mb-6 columns is-vcentered">
                    <img class="menu-img mx-3" :src="require('../assets/padlock.png')">
                    <label class="menu-text">Change Password</label>
                    </li>
                    <li class="columns is-vcentered">
                    <img class="menu-img mx-3" :src="require('../assets/exit.png')">
                    <label class="menu-text">Log out</label>
                    </li>
                </ul>
                </aside>

            </div>
            <div class="column is-9 mt-3">
                <div id="detail" class="box">
              <div class="columns">
                <div class="column">
                  <input id="search" class="input is-rounded is-small" type="text" placeholder="Search">
              </div>
                <div class="column">
                  <span class="mr-4 textHeader">Filter</span>
                  <div class="select is-rounded is-small" style="width: 220px">
                    <select style="width: 220px">
                      <option>Patient Name</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
                <div class="column">
                  <h1 class="has-text-centered textHeader">PAGE 1/10</h1>
                </div>
            </div>
                     <table class="table is-fullwidth" >
               <thead style="background-color:#BA9657;">
                  <tr>
                     <th class="has-text-white">HN</th>
                     <th class="has-text-white">Firstname</th>
                     <th class="has-text-white">Lastname</th>
                     <th class="has-text-white">Last Appointment</th>
                     <th class="has-text-white">Claim</th>
                     <th class="has-text-white">Status</th>
                     <th class="has-text-white">Prosthesis</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>1</td>
                     <td>Sachin</td>
                     <td>India</td>
                     <td>2</td>
                     <td>Smith</td>
                     <td>Australia</td>
                     <td>3</td>
                  </tr>

               </tbody>
            </table>
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
      return {}
    }
  }
</script>

<style scoped>
  #home{
    font-family: 'K2D' , serif;
    background-color:#385B56;
  }
  #imgPro{
    max-width: 100%;
    height: auto;
  }
  #pro-text{
    font-size: 16px;
    color: #E2D8C9;
  }
  #role{
    font-size: 14px;
    color: #E2D8C9;
  }
  .menu-text{
    font-size: 18px;
    color: #E2D8C9;
  }
  .menu-img{
    width: 18px;
    height: 18px;
  }
  .box{
      background-color: #E2D8C9;
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
</style>