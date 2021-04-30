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
                     <table class="table is-fullwidth" >
               <thead style="background-color:#BA9657;">
                  <tr>
                     <th class="has-text-white">Case ID</th>
                     <th class="has-text-white">Firstname</th>
                     <th class="has-text-white">Lastname</th>
                     <th class="has-text-white">Detail</th>
                     <th class="has-text-white">Claim</th>
                     <th class="has-text-white">Status</th>
                     <th class="has-text-white">Prosthesis</th>
                  </tr>
               </thead>
               <tbody>
                  <tr style="border-bottom: 1px solid #BA9657;" v-for="(caseInfo, key) in caseInfo" :key="key">
                     <td>{{caseInfo.caseID}}</td>
                     <td>{{caseInfo.fname}}</td>
                     <td>{{caseInfo.lname}}</td>
                     <td>{{caseInfo.detail}}</td>
                     <td>{{caseInfo.claim}}</td>
                     <td>{{caseInfo.status}}</td>
                     <td>{{caseInfo.prosthesis}}</td>
                  </tr>
                  
               </tbody>
            </table>
                  <div class="columns mr-5 go-botton">
                    <div class="column go-botton go-right">
                      <button class="button is-rounded mr-3"  style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657" @click="pushRouter('addCase')">Add Case</button>
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
        page: 1,
        countPage: 10,
        prosthesisAccount:{id:'1', fname:'ReVue', lname:'Vizz', role:'WebFrontend'},
        patients:[{hn:'1', fname:'Review', lname:'Vizz', lastAppointment:'01-01-2020', claim:'none', status:'none', prosthesis:'Mai'},
                  {hn:'2', fname:'Big', lname:'Boss', lastAppointment:'05-05-2020', claim:'none', status:'none', prosthesis:'Mai'}
                ],
        caseInfo:[
            {caseID:'000001', fname:'ก้อน', lname:'เหินเวหา', detail:'เปลี่ยนรัด BK ข้างซ้าย', claim:'จ่ายตรง', status:'old', prosthesis:'พาณินี'},
        {caseID:'000002', fname:'พจน์', lname:'มีเท', detail:'จับแบบ AK ข้างซ้าย', claim:'ประกันสังคม', status:'old', prosthesis:'พาณินี'},
        {caseID:'000003', fname:'แปลก', lname:'แต่จริง', detail:'TCO', claim:'ข้าราชการ', status:'old', prosthesis:'พาณินี'},
        {caseID:'000004', fname:'ปลา', lname:'กระป๋อง', detail:'ลองBK ขวา', claim:'ท.47', status:'new', prosthesis:'พาณินี'},
        {caseID:'000005', fname:'ประกัน', lname:'สูญสิ้นภัย', detail:'ลอง BK', claim:'ท.47', status:'new', prosthesis:'พาณินี'},
        {caseID:'000006', fname:'สายใจ', lname:'สายไหม', detail:'นัดนำรองเท้ามาเสริม', claim:'ท.47', status:'new', prosthesis:'พาณินี'},
        {caseID:'000007', fname:'ลาย', lname:'ไทย', detail:'นัดรับ SMO', claim:'UC', status:'new', prosthesis:'พาณินี'},
        {caseID:'000008', fname:'ส่อ', lname:'ใช้ปืน', detail:'ซ่อมเท้า BK ขวา', claim:'ท.47', status:'old', prosthesis:'พาณินี'},
        {caseID:'000009', fname:'ออมตัง', lname:'ไม่มีกิน', detail:'TCO', claim:'สวัสดิการท้องถิ่น', status:'new', prosthesis:'พาณินี'},
        {caseID:'000010', fname:'พัดลม', lname:'ไม่มีใช้', detail:'จับแบบ BK แกนในข้างขวา', claim:'ท.47', status:'old', prosthesis:'พาณินี'}
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
  .go-botton{
    margin-top: auto;
  }
  .go-right{
    text-align: right;
  }
  .arrow{
    width: 19px;
    height: 19px;
  }
  td{
    border-bottom: 1px solid #BA9657;
  }
</style>