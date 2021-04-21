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
        <div class="columns ml-5">
          <div class="column pl-0">
            <div class="columns">
              <div class="column is-one-third">
                <label class="profile-text" style="font-size: 24px;">Old Password :</label>
              </div>
              <div class="column">
                <input class="input profile-text is-password" type="text">
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-third">
                <label class="profile-text" style="font-size: 24px;">New Password :</label>
              </div>
              <div class="column">
                <input class="input profile-text is-password" type="text">
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-third">
                <label class="profile-text" style="font-size: 24px;">Confirm New Password :</label>
              </div>
              <div class="column">
                <input class="input profile-text is-password" type="text">
              </div>
            </div>
          </div>
        </div>
        <div id="btn">
          <button class="button is-rounded mr-3"  style="background: #BA9657; color: #FFFFFF; font-weight: bold">Cancel</button>
          <button class="button is-rounded" style="background: #385B56; color: #FFFFFF; font-weight: bold">Comfirm</button>
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
#btn{
  position: absolute;
  bottom: 2%;
  right: 1%;
}
.is-password{
  width: 50%;
}
</style>