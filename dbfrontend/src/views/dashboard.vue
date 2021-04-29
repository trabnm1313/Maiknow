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
                      <option value="HN">HN</option>
                      <option value="Firstname">Firstname</option>
                      <option value="Lastname">Lastname</option>
                      <option value="Last Appointment">Last Appointment</option>
                      <option value="Patient Name">Patient Name</option>
                      <option value="Claim">Claim</option>
                      <option value="Status">Status</option>
                      <option value="Prosthesis">Prosthesis</option>
                    </select>
                  </div>
                </div>
                <div class="column is-3">
                  <a @click="minusPage()"><img :src="require('../assets/left.png')" style="display: inline-block" class="arrow mr-4"></a>
                  <h1 class="has-text-centered textHeader" style="display: inline-block">PAGE {{page}}/{{countPage}}</h1>
                  <a @click="plusPage()"><img :src="require('../assets/right.png')" style="display: inline-block" class="arrow ml-4"></a>
                </div>
            </div>
                     <table class="table is-fullwidth">
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
                  <tr style="border-bottom: 1px solid #BA9657;" v-for="(patient, key) in patients" :key="key">
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
                  <div class="columns mr-5 go-botton">
                    <div class="column go-botton go-right">
                      <span class="" style="font-size: 20px;line-height: 20px;color: #BA9657;">Total : {{ patients.length }}</span>
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
        countPage: 10,
        prosthesisAccount:{id:'1', fname:'ReVue', lname:'Vizz', role:'WebFrontend'},
        patients:[{hn:'000001', fname:'ก้อน', lname:'เหินเวหา', lastAppointment:'26-06-2020', claim:'จ่ายตรง', status:'old', prosthesis:'พาณินี'},
                  {hn:'000002', fname:'พจน์', lname:'มีเท', lastAppointment:'21-06-2020', claim:'ประกันสังคม', status:'old', prosthesis:'พาณินี'},
                  {hn:'000003', fname:'แปลก', lname:'แต่จริง', lastAppointment:'05-05-2020', claim:'ข้าราชการ', status:'old', prosthesis:'พาณินี'},
                  {hn:'000004', fname:'ปลา', lname:'กระป๋อง', lastAppointment:'15-02-2020', claim:'ท.47', status:'new', prosthesis:'พาณินี'},
          {hn:'000005', fname:'ประกัน', lname:'สูญสิ้นภัย', lastAppointment:'11-11-2020', claim:'ท.47', status:'new', prosthesis:'พาณินี'},
          {hn:'000006', fname:'สายใจ', lname:'สายไหม', lastAppointment:'14-02-2020', claim:'ท.47', status:'new', prosthesis:'พาณินี'},
          {hn:'000007', fname:'ลาย', lname:'ไทย', lastAppointment:'1-07-2020', claim:'UC', status:'new', prosthesis:'พาณินี'},
          {hn:'000008', fname:'ส่อ', lname:'ใช้ปืน', lastAppointment:'19-09-2020', claim:'ท.47', status:'old', prosthesis:'พาณินี'},
          {hn:'000009', fname:'ออมตัง', lname:'ไม่มีกิน', lastAppointment:'5-12-2020', claim:'สวัสดิการท้องถิ่น', status:'new', prosthesis:'พาณินี'},
          {hn:'000010', fname:'พัดลม', lname:'ไม่มีใช้', lastAppointment:'1-10-2020', claim:'ท.47', status:'old', prosthesis:'พาณินี'},
                ],
        selectFilter: 'HN',
        searchTxt: '',
    methods: {

          },
          plusPage(){
            if(this.page >= 1 && this.page < 10){
              this.page++
            }
          },
          minusPage(){
            if(this.page <= 10 && this.page > 1){
              this.page--
            }
            
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
    display: flex;
    flex-direction: column;
    flex: auto;
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
  .arrow{
    width: 19px;
    height: 19px;
  }
  td{
    border-bottom: 1px solid #BA9657;
  }
  .go-botton{
    margin-top: auto;
  }
  .go-right{
    text-align: right;
  }

</style>