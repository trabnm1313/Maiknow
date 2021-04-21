<template>
                <div id="detail" class="box">
              <div class="columns">
                <div class="column is-4">
                  <input id="search" class="input is-rounded is-small" type="text" placeholder="Search" v-model="searchTxt">
              </div>
              <div class="column is-1">
                  <span class="mr-4 textHeader">Filter</span>
                  </div>
                <div class="column is-4">
                  <div class="select is-rounded is-small" style="width: 280px">
                    <select style="width: 280px" v-model="selectFilter">
                      <option value="0">Patient Name</option>
                      <option value="1">With options</option>
                    </select>
                  </div>
                </div>
                <div class="column is-2">
                  <h1 class="has-text-centered textHeader">PAGE {{page}}/10</h1>
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
                  <tr v-for="(patient, key) in patients" :key="key">
                     <td>{{patient.hn}}</td>
                     <td>{{patient.fname}}</td>
                     <td>{{patient.lname}}</td>
                     <td>{{patient.lastAppointment}}</td>
                     <td>{{patient.claim}}</td>
                     <td>{{patient.status}}</td>
                     <td>{{patient.prosthesis}}</td>
                  </tr>
                  
               </tbody>
            </table>
            <button id="btn" class="button is-rounded mr-3"  style="background: #BA9657; color: #FFFFFF" @click="$router.replace({ name: 'addCase' });">Add Case</button>
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
  .box{
    height: 100%;
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
#btn{
  position: absolute;
  bottom: 2%;
  right: 2%;
}
</style>