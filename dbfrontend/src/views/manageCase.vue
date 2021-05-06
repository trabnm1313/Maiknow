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
                      <option value="case_ID">Case ID</option>
                      <option value="detail">Detail</option>
                      <option value="Claim_Type.claim">Claim</option>
                      <option value="type">Status</option>
                      <option value="Staff.fname">Prosthesis</option>
                    </select>
                  </div>
                </div>
                <div class="column is-3">
                  <a @click="minusPage()"><img :src="require('../assets/left.png')" style="display: inline-block" class="arrow mr-4"></a>
                  <h1 class="has-text-centered textHeader" style="display: inline-block">PAGE {{page+1}}/{{countPage}}</h1>
                  <a @click="plusPage()"><img :src="require('../assets/right.png')" style="display: inline-block" class="arrow ml-4"></a>
                </div>
            </div>
                     <table class="table is-fullwidth" >
               <thead style="background-color:#BA9657;">
                  <tr>
                     <th class="has-text-white">Case ID</th>
                     <th class="has-text-white">Detail</th>
                     <th class="has-text-white">Claim</th>
                     <th class="has-text-white">Status</th>
                     <th class="has-text-white">Prosthesis</th>
                  </tr>
               </thead>
               <tbody>
                  <tr class="text-select" style="border-bottom: 1px solid #BA9657;" v-for="(caseInfo, key) in visiblePage" :key="key" @click="$router.push({ name: 'editCase',  params: { case_ID: caseInfo.case_ID, staff_ID: caseInfo['Staff.staff_ID']}})">
                     <td>{{caseInfo.case_ID}}</td>
                     <td>{{caseInfo.detail}}</td>
                     <td>{{caseInfo['Claim_Type.claim']}}</td>
                     <td>{{caseInfo.type}}</td>
                     <td>{{caseInfo['Staff.fname']}}</td>
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
        page: 0,
        countPage: 2,
        nextID: 9,
        pageSize: 8,
        prosthesisAccount:{},
        patients:[],
        caseInfo:[],
        selectFilter: 'case_ID',
        searchTxt: '',
        visiblePage: [],
      }
        }, mounted() {
          this.getCase()
          this.updateShowPage()
        },
        methods: {
          getCase() {
            console.log("case")
            axios
            .get('http://localhost:3000/case/read', 
                              {
                                headers: {
                                    'Authorization': 'Bearer '+ this.getLocal()
                                            }
                                })
            .then((response) => {
                        console.log(response)
                        if(response.status == 200){
                            this.caseInfo = response.data
                            this.countPage = Math.ceil(this.caseInfo.length/this.pageSize)
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
            this.visiblePage = this.caseInfo.slice(this.page * this.pageSize, (this.page * this.pageSize) + this.pageSize);
          },
          pushRouter(nameRouter){
            this.$router.replace({ name: nameRouter })
          },
          getLocal() {
                var txt = localStorage.getItem("user");
                var obj = JSON.parse(txt);
                return obj
            },
          onEnter: function() {
            axios
            .get('http://localhost:3000/case/filter?search='+this.searchTxt+'&column='+this.selectFilter)
                              .then((response) => {
                                                  if(response.status == 200){
                                                      this.caseInfo = response.data
                                                      this.countPage = Math.ceil(this.caseInfo.length/this.pageSize)
                                                      this.updateShowPage();
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
  .arrow{
    width: 19px;
    height: 19px;
  }
  td{
    border-bottom: 1px solid #BA9657;
  }
  .text-select:hover{
    color: #385B56;
    background: #dbc499;
    transition-duration: .3s;
  }
</style>