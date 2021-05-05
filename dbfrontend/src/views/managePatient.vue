<template>
                <div id="detail" class="box">
              <div class="columns">
                <div class="column is-4">
                  <input id="search" class="input is-rounded is-small" type="text" placeholder="Search" v-model="searchTxt" v-on:keyup.enter="onEnter">
              </div>
              <div class="column is-1">
                  <span class="mr-4 textHeader">Filter</span>
                  </div>
                <div class="column is-4">
                  <div class="select is-rounded is-small" style="width: 280px">
                    <select style="width: 280px" v-model="selectFilter">
                      <option value="hn">HN</option>
                      <option value="fname">Firstname</option>
                      <option value="lname">Lastname</option>
                      <option value="address">Address</option>
                      <option value="birth_date">DateOfBirth</option>
                      <option value="age">Age</option>
                      <option value="person_id">ID Card</option>
                      <option value="nationlity">Nationality</option>
                      <option value="religion">Religion</option>
                      <option value="occupation">Occupation</option>
                      <option value="office_name">Office Name</option>
                    </select>
                  </div>
                </div>
                <div class="column is-3 ">
                  <a @click="minusPage()"><img :src="require('../assets/left.png')" style="display: inline-block" class="arrow mr-4"></a>
                  <h1 class="has-text-centered textHeader" style="display: inline-block">PAGE {{page+1}}/{{countPage}}</h1>
                  <a @click="plusPage()"><img :src="require('../assets/right.png')" style="display: inline-block" class="arrow ml-4"></a>
                </div>
            </div>
                <div class="scroll">
                     <table class="table is-fullwidth fixed"  >
               <thead style="background-color:#BA9657;">
                  <tr>
                     <th class="has-text-white px-5">HN</th>
                     <th class="has-text-white px-5">Firstname</th>
                     <th class="has-text-white px-5">Lastname</th>
                     <th class="has-text-white px-5">Address</th>
                     <th class="has-text-white px-5">DateOfBirth</th>
                     <th class="has-text-white px-5">Age</th>
                     <th class="has-text-white px-5">ID Card</th>
                     <th class="has-text-white px-5">Nationality</th>
                     <th class="has-text-white px-5">Religion</th>
                     <th class="has-text-white px-5">Occupation</th>
                     <th class="has-text-white px-5">Office Name</th>
                  </tr>
               </thead>
               <tbody>
                  <tr style="border-bottom: 1px solid #BA9657;" v-for="(patient, key) in visiblePage" :key="key" @click="$router.push({ name: 'editPatient',  params: { hn: patient.hn }})">
                     <td>{{patient.hn}}</td>
                     <td>{{patient.fname}}</td>
                     <td>{{patient.lname}}</td>
                     <td>{{patient.address}}</td>
                     <td>{{patient.birth_date.slice(0, 10)}}</td>
                     <td>{{patient.age}}</td>
                     <td>{{patient.person_id}}</td>
                     <td>{{patient.nationlity}}</td>
                     <td>{{patient.religion}}</td>
                     <td>{{patient.occupation}}</td>
                     <td>{{patient.office_name}}</td>
                  </tr>
                  
               </tbody>
            </table>
            </div>
                  <div class="columns mr-5 go-botton">
                    <div class="column go-botton go-right">
                      <button class="button is-rounded mr-3"  style="background-color: #BA9657;font-size: 20px;line-height: 24px; color: #E2D8C9; border-color: #BA9657" @click="pushRouter('addPatient')">Add Patient</button>
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
        page: 0,
        countPage: 2,
        nextID: 9,
        pageSize: 8,
        prosthesisAccount:{},
        patients:[],
        selectFilter: 'hn',
        searchTxt: '',
        visiblePage: [],
        }
      }, mounted() {
          this.getpatients()
          this.updateShowPage()
        },
        methods: {
          getpatients() {
            axios
            .get('http://localhost:3000/patient/read')
            .then((response) => {
                        console.log(response)
                        if(response.status == 200){
                            this.patients = response.data
                            this.countPage = Math.ceil(this.patients.length/this.pageSize)
                            this.updateShowPage();
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
          plusPage(){
           if(this.page >= 0 && this.page < this.countPage-1){
              this.page++
              this.updateShowPage();
            }
            
          },
          minusPage(){
            if(this.page <= this.countPage-1 && this.page > 0){
              this.page--
              this.updateShowPage();
            } 
          },
          updateShowPage() {
            this.visiblePage = this.patients.slice(this.page * this.pageSize, (this.page * this.pageSize) + this.pageSize);
          },
           getLocal() {
                var txt = localStorage.getItem("user");
                var obj = JSON.parse(txt);
                return obj
            },
          pushRouter(nameRouter){
            this.$router.replace({ name: nameRouter })
          },
          onEnter: function() {
            axios
            .get('http://localhost:3000/patient/filter?search='+this.searchTxt+'&column='+this.selectFilter)
                              .then((response) => {
                                                  if(response.status == 200){
                                                      this.patients = response.data
                                                      this.countPage = Math.ceil(this.patients.length/this.pageSize)
                                                      this.updateShowPage();
                                                      console.log(this.patients)
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
            this.updateShowPage()
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