<template>
  <div id="detail" class="box">
    <div class="columns">
      <div class="column pb-0">
        <div class="columns">
          <div class="column is-one-third">
            <img :src="require('../assets/user.png')" style="width: 234px; height: 234px;">
          </div>
<!--          Profile-->
          <div class="column">
<!--            name-->
            <div v-if="!isEdit" class="columns mt-6">
              <input class="input is-name-de is-large profile-text profile-dis" type="text" :value="prosthesisAccount.fname+' '+prosthesisAccount.lname" disabled>
            </div>
            <div v-else class="columns mt-6">
              <input class="input is-name-de is-large profile-text profile-non-dis" type="text" :value="prosthesisAccount.fname+' '+prosthesisAccount.lname">
            </div>
<!--            ID-->
            <div class="columns mt-3">
              <label class="profile-text" style="font-size: 24px;">ID :</label>
              <input id="id" class="input profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount.id" disabled>
            </div>
<!--            hospital-->
            <div v-if="!isEdit" class="columns mt-3">
              <input class="input profile-text is-name-de profile-dis" type="text" style="font-size: 20px;"  v-model="prosthesisAccount.hospital" disabled>
            </div>
            <div v-else class="columns mt-3">
              <input class="input profile-text is-name-de profile-non-dis" type="text" style="font-size: 20px;"  v-model="prosthesisAccount.hospital">
            </div>
          </div>
        </div>
        <div class="columns">
<!--          email-->
          <div v-if="!isEdit" class="column is-half ml-5">
            <label class="profile-text" style="font-size: 24px;">E-mail :</label>
            <input class="input is-email-ph profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount.email" disabled>
          </div>
          <div v-else class="column is-half ml-5">
            <label class="profile-text" style="font-size: 24px;">E-mail :</label>
            <input class="input is-email-ph profile-text profile-non-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount.email">
          </div>
<!--          phonenumber-->
          <div v-if="!isEdit" class="column">
            <label class="profile-text" style="font-size: 24px;">Phone Number :</label>
            <input class="input is-email-ph profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount.phone" disabled>
          </div>
          <div v-else class="column">
            <label class="profile-text" style="font-size: 24px;">Phone Number :</label>
            <input class="input is-email-ph profile-text profile-non-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount.phone">
          </div>
        </div>
        <div class="columns">
<!--          address-->
          <div v-if="!isEdit" class="column ml-5">
            <label class="profile-text" style="font-size: 24px;">Address :</label>
            <input class="address input profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount.address" disabled>
          </div>
          <div v-else class="column ml-5">
            <label class="profile-text" style="font-size: 24px;">Address :</label>
            <textarea class="textarea-handmake profile-text profile-non-dis ml-2" style="font-weight: bold; vertical-align: top;" v-model="prosthesisAccount.address">
            </textarea>
          </div>
        </div>
        <div class="columns">
<!--          dob-->
          <div v-if="!isEdit" class="column is-half ml-5">
            <label class="profile-text" style="font-size: 24px;">D.O.B :</label>
            <input class="dob input profile-text profile-dis ml-2"  type="date" style="font-weight: bold;" v-model="prosthesisAccount.dob" disabled>
          </div>
          <div v-else class="column is-half ml-5">
            <label class="profile-text" style="font-size: 24px;">D.O.B :</label>
            <input class="dob input profile-text profile-non-dis ml-2"  type="date" style="font-weight: bold;" v-model="prosthesisAccount.dob">
          </div>
<!--          age-->
          <div class="column">
            <label class="profile-text" style="font-size: 24px;">Age :</label>
            <input  class="is-age-count input profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount.age" disabled>
          </div>
        </div>
        <div class="columns">
<!--          gender-->
          <div class="column ml-5 is-half">
            <label class="profile-text" style="font-size: 24px;">Gender :</label>
            <input id="gender" class="input profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" v-model="prosthesisAccount.gender" disabled>
          </div>
<!--          count-->
          <div class="column">
            <label class="profile-text" style="font-size: 24px;">Amount of Patients :</label>
            <input class="is-age-count input profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" value="999" disabled>
          </div>
        </div>
          <!--    button    -->
        <div class="columns mb-0 go-botton">
          <div class="column pb-0 go-botton go-right">
            <div v-if="!isEdit">
              <button @click="isEdit = true" class="button is-rounded mr-3"  style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Edit Profile</button>
              <button @click="pushRouter('changePassword')" class="button is-rounded" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">Change Password</button>
            </div>
            <div v-else>
              <button @click="modalComfirm = true" class="button is-rounded mr-3"  style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
              <button @click="modalCancel = true" class="button is-rounded" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">No</button>
            </div>
          </div>
        </div>
      </div>
      </div>
<!--    modal-->
    <div class="modal" :class="{'is-active': modalCancel}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <!-- Content ... -->
          <div class="columns is-vcentered">
            <div class="column has-text-centered modal-text">
              <p>Are you sure</p>
              <p>you want to cancel updating profile ?</p>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <button class="button is-rounded mr-4" @click="modalCancel = false; isEdit = false;" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
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
              <p>you want to update profile ?</p>
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
      isEdit: false,
      page: 1,
      prosthesisAccount:{id:'62070019', fname:'Ketsarapron', lname:'Dhetboon', role:'WebFrontend', hospital:'Prosthesis at ABC Hospital, Bangkok', email:'62070019@gmail.com',phone:'000000000',address:'kmitl',dob:'2001-05-14', age:19,gender:'Female'},
      patients:[{hn:'1', fname:'Review', lname:'Vizz', lastAppointment:'01-01-2020', claim:'none', status:'none', prosthesis:'Mai'},
        {hn:'2', fname:'Big', lname:'Boss', lastAppointment:'05-05-2020', claim:'none', status:'none', prosthesis:'Mai'}
      ],
      caseInfo:[
        {
          caseID:'1',
          fname:'Big',
          lname:'Boss',
          details:'Breakup',
          claim:'IDK',
          status:'It\'s ok',
          prosthesis:'Mai',
          hospital:'KMITL',
          isShare: true
        },
        {
          caseID:'2',
          fname:'Review',
          lname:'Vizz',
          details:'none',
          claim:'none',
          status:'none',
          prosthesis:'Mai',
          hospital:'KMITL',
          isShare: true
        }
      ],
      prosthesis:{
        id:'62070136',
        fname:'Punpetch',
        lname:'Prakongpak',
        department:'Prosthesis at ABC Hospital, Bangkok',
        email:'62070136@it.kmitl.ac.th',
        phoneNumber:'0639518133',
        address:'KMITL',
        dob:'2001-08-14',
        age:'19',
        gender:'male'
      },
      selectFilter: '0',
      searchTxt: '',
      confirmUpdate(){
          this.modalComfirm = false
          this.isEdit = false;
        },
          pushRouter(nameRouter){
          axios.get("http://localhost:3000/",
                            {
                                headers: {
                                    'Authorization': 'Bearer '+ this.getLocal()
                                            }
                                })
                            .then((res) => {
                                console.log(res)
                                if(res.status == 200){
                                    this.$router.replace({ name: nameRouter })
                                }
                            })
                            .catch((err) => {
                                if(err.request.status === 403 || err.request.status === 400){
                                    this.$router.replace({ name: "forbidden" })
                                }
                                if(err.request.status === 400){
                                    this.$router.replace({ name: "notFound" })
                                }
                            })
        },
            getLocal() {
                var txt = localStorage.getItem("user");
                var obj = JSON.parse(txt);
                return obj
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
  width: 537.88px;
}
#id{
  width: 201.7px;
}
.dob{
  width: 192.09px;
}
#gender{
  width: 89.09px;
}
.is-age-count{
  width: 55px;
}
.is-email-ph{
  width: 204.13px;
}
.address{
  width: 709px;
}
.profile-dis{
  background: #D1C9BC;
  border-color: #D1C9BC;
}
.profile-non-dis{
  background: #FFF8EE;
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
.textarea-handmake{
  border-color: #dbdbdb;
  border-radius: 4px;
  resize: none;
  width: 709px;
  height: 186px;
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  outline: none;
}
.textarea-handmake:focus{
  border-color: #3273dc;
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}
.textarea-handmake:hover{
  border-color: #b5b5b5;
}
</style>