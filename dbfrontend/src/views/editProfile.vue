<template>
  <div id="detail" class="box">
    <div class="columns">
      <div class="column">
        <div class="columns">
          <div class="column is-one-third">
            <img :src="require('../assets/user.png')" style="width: 234px; height: 234px;">
          </div>
          <div class="column">
            <div class="columns mt-6">
              <input class="input is-name-de is-large profile-text profile-dis" type="text" value="Punpetch Prakongpak" disabled>
            </div>
            <div class="columns mt-3">
              <label class="profile-text" style="font-size: 24px;">ID :</label>
              <input id="id" class="input profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" value="62070136" disabled>
            </div>
            <div class="columns mt-3">
              <input class="input profile-text is-name-de profile-dis" type="text" style="font-size: 20px;"  value="Prosthesis at ABC Hospital, Bangkok" disabled>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half ml-5">
            <label class="profile-text" style="font-size: 24px;">E-mail :</label>
            <input class="input is-email-ph profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" value="62070136@kmitl.it.kmitl.ac.th" disabled>
          </div>
          <div class="column">
            <label class="profile-text" style="font-size: 24px;">Phone Number :</label>
            <input class="input is-email-ph profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" value="0639518133" disabled>
          </div>
        </div>
        <div class="columns">
          <div class="column ml-5">
            <label class="profile-text" style="font-size: 24px;">Address :</label>
            <input id="add" class="input profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" value="KMITL" disabled>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half ml-5">
            <label class="profile-text" style="font-size: 24px;">D.O.B :</label>
            <input id="dob" class="input profile-text profile-dis ml-2"  type="date" style="font-weight: bold;" value="2001-08-14">
          </div>
          <div class="column">
            <label class="profile-text" style="font-size: 24px;">Age :</label>
            <input id="age" class="input profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" value="19" disabled>
          </div>
        </div>
        <div class="columns">
          <div class="column ml-5">
            <label class="profile-text" style="font-size: 24px;">Gender :</label>
            <input id="gender" class="input profile-text profile-dis ml-2"  type="text" style="font-weight: bold;" value="Male" disabled>
          </div>
        </div>
        <div id="btn">
          <button @click="modalCancel = true" class="button is-rounded mr-3"  style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Cancel</button>
          <button @click="modalComfirm = true" class="button is-rounded" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">Update</button>
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
              <p>you want to cancel updating profile ?</p>
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
              <p>you want to update profile ?</p>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <button class="button is-rounded mr-4" @click="$router.replace({ name: 'editProfile' });" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
              <button class="button is-rounded ml-4" @click="modalComfirm = false" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">No</button>
            </div>
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
      modalCancel: false,
      modalComfirm: false,
      page: 1,
      prosthesisAccount:{id:'1', fname:'ReVue', lname:'Vizz', role:'WebFrontend'},
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
.box{
  height: 100%;
}
#detail{
  background-color: #ded7c8;
}
.is-name-de{
  width: 80%;
}
#id{
  width: 30%;
}
#dob{
  width: 40%;
}
#gender{
  width: 10%;
}
#age{
  width: 10%;
}
.is-email-ph{
  width: 50%;
}
#add{
  width: 80%;
}
.profile-dis{
  background: #D1C9BC;
  border-color: #D1C9BC;
}
.profile-text{
  color: #385B56;
}
#btn{
  position: absolute;
  bottom: 2%;
  right: 1%;
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