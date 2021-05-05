<template>
  <div id="detail" class="box">
    <div class="columns">
      <div class="column pb-0">
        <div class="columns">
          <div class="column is-3 ml-6 mt-5">
            <img :src="require('../assets/user.png')" style="width: 234px; height: 234px;">
          </div>
          <div class="column">
            <div class="columns mt-6">
              <input class="input is-name-de is-large profile-text profile-dis" type="text" v-model="fullname" disabled>
            </div>
            <div class="columns mt-3">
              <label class="profile-text" style="font-size: 24px;">ID :</label>
              <input id="id" class="input profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount.staff_ID" disabled>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half ml-5">
            <label class="profile-text" style="font-size: 24px;">E-mail :</label>
            <input class="input is-email-ph profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount['Staff.email']" disabled>
          </div>
          <div class="column">
            <label class="profile-text" style="font-size: 24px;">Phone Number :</label>
            <input class="input is-email-ph profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount['Staff.phone_number']" disabled>
          </div>
        </div>
        <div class="columns ml-5">
          <div class="column pl-0">
            <div class="columns">
              <div class="column is-one-third">
                <label class="profile-text" style="font-size: 24px;">Old Password :</label>
              </div>
              <div class="column">
                <input class="input profile-text is-password" type="password"  v-model="password">
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-third">
                <label class="profile-text" style="font-size: 24px;">New Password :</label>
              </div>
              <div class="column">
                <input class="input profile-text is-password" type="password"  v-model="newPassword">
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-third">
                <label class="profile-text" style="font-size: 24px;">Confirm New Password :</label>
              </div>
              <div class="column">
                <input class="input profile-text is-password" type="password"  v-model="confirmNewPassword">
              </div>
            </div>
          </div>
        </div>
        <div class="columns mb-0 go-botton">
          <div class="column pb-0 go-botton go-right">
            <button @click="modalCancel = true" class="button is-rounded mr-3"  style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Cancel</button>
            <button @click="modalComfirm = true" class="button is-rounded" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">Update</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" :class="{'is-active': modalCancel}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <!-- Content ... -->
          <div class="columns is-vcentered">
            <div class="column has-text-centered modal-text">
              <p>Are you sure</p>
              <p>you want to cancel changing password ?</p>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <button class="button is-rounded mr-4" @click="$router.replace({ name: 'editProfile' });" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
              <button class="button is-rounded ml-4" @click="modalCancel = false" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">No</button>
            </div>
          </div>
        </section>

      </div>
    </div>
    <div class="modal" :class="{'is-active': modalComfirm}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <!-- Content ... -->
          <div class="columns is-vcentered">
            <div class="column has-text-centered modal-text">
              <p>Are you sure</p>
              <p>you want to change password ?</p>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <button class="button is-rounded mr-4" @click="confirmUpdate()" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
              <button class="button is-rounded ml-4" @click="modalComfirm = false" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">No</button>
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
      modalCancel: false,
      modalComfirm: false,
      password:'',
      newPassword:'',
      confirmNewPassword:'',
      page: 1,
      prosthesisAccount:{},
      patients:[],
      caseInfo:[],
      prosthesis:{},
      selectFilter: '0',
      searchTxt: '',
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
computed:{
  fullname: function () {
    return this.prosthesisAccount['Staff.fname']+' '+this.prosthesisAccount['Staff.lname']
  }
},
  methods: {
          pushRouter(nameRouter){
            this.$router.replace({ name: nameRouter })
          },
          getLocal() {
                var txt = localStorage.getItem("user");
                var obj = JSON.parse(txt);
                return obj
            },
            confirmUpdate(){
              if ((this.prosthesisAccount.password === this.password) && (this.newPassword === this.confirmNewPassword)){
                  let changeData = 
                {
                    user_ID: this.prosthesisAccount.user_ID,
                    username: this.prosthesisAccount.username,
                    password: this.newPassword,
                    staff_ID: this.prosthesisAccount.staff_ID
                }
                axios
                  .patch('http://localhost:3000/user/update/'+this.prosthesisAccount.user_ID, changeData, {
                                headers: {
                                    'Authorization': 'Bearer '+ this.getLocal()
                                            }
                                })
                  .then((response) => {
                      if(response.status == 200){
                        this.modalComfirm = false
                        this.isEdit = false;
                        this.password = ''
                        this.newPassword = ''
                        this.confirmNewPassword = ''
                        console.log(this.caseInfo)
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
              }
              
      }
  }
}
</script>

<style scoped>
.box{
  height: 100%;
}
#detail{
  background-color: #ded7c8;
  display: flex;
  flex-direction: column;
  flex: auto;
}
.is-name-de{
  width: 80%;
}
#id{
  width: 30%;
}
.is-email-ph{
  width: 50%;
}
.profile-dis{
  background: #D1C9BC;
  border-color: #D1C9BC;
}
.profile-text{
  color: #385B56;
}
.go-botton{
  margin-top: auto;
}
.go-right{
  text-align: right;
}
.is-password{
  width: 50%;
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