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
                      <option value="Address">Address</option>
                      <option value="DateOfBirth">DateOfBirth</option>
                      <option value="Age">Age</option>
                      <option value="ID Card">ID Card</option>
                      <option value="Nationality">Nationality</option>
                      <option value="Religion">Religion</option>
                      <option value="Occupation">Occupation</option>
                      <option value="Office Name">Office Name</option>
                    </select>
                  </div>
                </div>
                <div class="column is-3 ">
                  <a @click="minusPage()"><img :src="require('../assets/left.png')" style="display: inline-block" class="arrow mr-4"></a>
                  <h1 class="has-text-centered textHeader" style="display: inline-block">PAGE {{page}}/{{countPage}}</h1>
                  <a @click="plusPage()"><img :src="require('../assets/right.png')" style="display: inline-block" class="arrow ml-4"></a>
                </div>
            </div>
                <div class="scroll">
                     <table class="table is-fullwidth fixed"  >
               <thead style="background-color:#BA9657;">
                  <tr>
                     <th class="has-text-white">HN</th>
                     <th class="has-text-white">Firstname</th>
                     <th class="has-text-white">Lastname</th>
                     <th class="has-text-white">Address</th>
                     <th class="has-text-white">DateOfBirth</th>
                     <th class="has-text-white">Age</th>
                     <th class="has-text-white">ID Card</th>
                     <th class="has-text-white">Nationality</th>
                     <th class="has-text-white">Religion</th>
                     <th class="has-text-white">Occupation</th>
                     <th class="has-text-white">Office Name</th>
                  </tr>
               </thead>
               <tbody>
                  <tr style="border-bottom: 1px solid #BA9657;" v-for="(patient, key) in patients" :key="key">
                     <td>{{patient.hn}}</td>
                     <td>{{patient.fname}}</td>
                     <td>{{patient.lname}}</td>
                     <td>{{patient.address}}</td>
                     <td>{{patient.dob}}</td>
                     <td>{{patient.age}}</td>
                     <td>{{patient.idCard}}</td>
                     <td>{{patient.nationality}}</td>
                     <td>{{patient.religion}}</td>
                     <td>{{patient.occupation}}</td>
                     <td>{{patient.office}}</td>
                  </tr>
                  
               </tbody>
            </table>
            </div>
                  <div class="columns mr-5 go-botton">
                    <div class="column go-botton go-right">
                      <button class="button is-rounded mr-3"  style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657" @click="pushRouter('addPatient')">Add Patient</button>
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
        patients:[
        {hn:'000001', fname:'ก้อน', lname:'เหินเวหา', address:'มกส.', dob:'04-05-44', age:'20', idCard:'4523900950236',nationality:'thai',religion:'thai',occupation:'KSU',office:'KSU'},
        {hn:'000002', fname:'พจน์', lname:'มีเท', address:'มนพ.', dob:'01-08-44', age:'19', idCard:'1229975350236',nationality:'thai',religion:'thai',occupation:'NPU',office:'NPU'},
        {hn:'000003', fname:'แปลก', lname:'แต่จริง', address:'มนร.', dob:'18-01-44', age:'20', idCard:'8459900950236',nationality:'thai',religion:'thai',occupation:'PNU',office:'PNU'},
        {hn:'000004', fname:'ปลา', lname:'กระป๋อง', address:'มน.', dob:'26-05-44', age:'19', idCard:'1229900995136',nationality:'thai',religion:'thai',occupation:'NU',office:'NU'},
        {hn:'000005', fname:'ประกัน', lname:'สูญสิ้นภัย', address:'มมส.', dob:'29-07-44', age:'20', idCard:'1229900974136',nationality:'thai',religion:'thai',occupation:'MSU',office:'MSU'},
        {hn:'000006', fname:'สายใจ', lname:'สายไหม', address:'จุฬาฯ', dob:'16-03-44', age:'20', idCard:'9549900950236',nationality:'thai',religion:'thai',occupation:'CU',office:'CU'},
        {hn:'000007', fname:'ลาย', lname:'ไทย', address:'มก.', dob:'30-05-44', age:'19', idCard:'121229900006',nationality:'thai',religion:'thai',occupation:'KU',office:'KU'},
        {hn:'000008', fname:'ส่อ', lname:'ใช้ปืน', address:'มข.', dob:'11-12-44', age:'19', idCard:'1229789650236',nationality:'thai',religion:'thai',occupation:'KKU',office:'KKU'},
        {hn:'000009', fname:'ออมตัง', lname:'ไม่มีกิน', address:'มช.', dob:'14-09-44', age:'19', idCard:'1229900950584',nationality:'thai',religion:'thai',occupation:'CMU',office:'CMU'},
        {hn:'000010', fname:'พัดลม', lname:'ไม่มีใช้', address:'มทษ.', dob:'15-02-44', age:'20', idCard:'1229900635236',nationality:'thai',religion:'thai',occupation:'TSU',office:'TSU'}
        ],
        selectFilter: 'HN',
        searchTxt: '',
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

.scroll {
    overflow-y: auto;
    
        }
/* width */
::-webkit-scrollbar {
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 15px #BA9657; 
  border-radius: 5px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #BA9657; 
  border-radius: 5px;
}
  .arrow{
    width: 19px;
    height: 19px;
  }
  td{
    border-bottom: 1px solid #BA9657;
  }

</style>