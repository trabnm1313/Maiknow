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
                <option value="Patient.fname">Firstname</option>
                <option value="Patient.lname">Lastname</option>
                <option value="detail">Details</option>
                <option value="Claim_Type.claim">Claim</option>
                <option value="type">Status</option>
                <option value="Staff.fname">Prosthesis</option>
                <option value="Hospital_community.name">Hospital</option>
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
        <th v-show="isAdd"></th>
        <th class="has-text-white">Case ID</th>
        <th class="has-text-white">Firstname</th>
        <th class="has-text-white">Lastname</th>
        <th class="has-text-white">Details</th>
        <th class="has-text-white">Claim</th>
        <th class="has-text-white">Status</th>
        <th class="has-text-white">Prosthesis</th>
        <th v-show="!isAdd" class="has-text-white">Community</th>
      </tr>
      </thead>
      <template v-for="(caseInfo, key) in visiblePage" >
      <tbody  :key="key">
        <tr style="border-bottom: 1px solid #BA9657;">
        <td  v-show="isAdd"><input class="checkbox" type="checkbox" v-model="caseInfo.share"></td>
        <td>{{caseInfo.case_ID}} </td>
        <td>{{caseInfo['Patient.fname']}}</td>
        <td>{{caseInfo['Patient.lname']}}</td>
        <td>{{caseInfo.detail}}</td>
        <td>{{caseInfo['Claim_Type.claim']}}</td>
        <td>{{caseInfo.type}}</td>
        <td>{{caseInfo['Staff.fname']}}</td>
        <td v-show="!isAdd">{{caseInfo['Hospital_community.name']}}</td>
      </tr>
      </tbody>
      </template>
      
    </table>
    <div class="columns mr-5 mb-1 go-botton"  v-show="isAdd == false">
      <div class="column go-botton go-right">
        <button @click="isAdd = true; getCase()" class="button is-rounded"  style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Add Case</button>
      </div>
    </div>
    <div class="columns mb-0 go-botton" v-show="isAdd">
      <div class="column go-botton go-right">
        <button @click="modalCancel = true" class="button is-rounded mr-5" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Cancel</button>
        <button @click="modalComfirm = true" class="button is-rounded"  style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">Comfirm</button>
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
              <p>you want to cancel sharing case ?</p>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <button class="button is-rounded mr-4" @click="modalCancel = false; isAdd = false; updateShowPageCommu()" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
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
              <p>you want to share case ?</p>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <button class="button is-rounded mr-4" @click="addCommunity()" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
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
      page: 0,
      countPage: 2,
      nextID: 9,
      pageSize: 8,
      isAdd: false,
      modalCancel: false,
      modalComfirm: false,
      prosthesisAccount:{},
      patients:[],
      caseCommunity:[],
      caseInfoAll:[],
      selectFilter: 'case_ID',
      searchTxt: '',
      visiblePage: [],
      arryOfShare:[]
    }
  }, mounted() {
          this.getCommunity()
        },
        methods: {
          getCommunity() {
            axios
            .get('http://localhost:3000/community/read')
            .then((response) => {
                        console.log(response)
                        if(response.status == 200){
                            this.caseCommunity = response.data
                            this.updateShowPageCommu();
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
          getCase() {
            console.log(this.arryOfShare)
            axios
            .get('http://localhost:3000/case/read')
            .then((response) => {
                        console.log(response)
                        if(response.status == 200){
                            this.caseInfoAll = response.data
                            
                            this.updateShowPageCase();
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
          addCommunity() {
            let list = []
            this.caseInfoAll.forEach((add) => {
                if (add.share === true){
                  list.push({
                    case_ID: add.case_ID,
                    community_ID: "000002",
                    detail: add.detail,
                    date: add.date,
                    cost: "0",
                    type: add.type,
                    share: "1",
                    hn: add.hn,
                    claim_ID: add.claim_ID,
                    staff_ID: add.staff_ID
                  })
                }
              })
              console.log('test')
              console.log(list)
            axios
            .post('http://localhost:3000/community/load', {
              communities: list
            })
            .then((response) => {
                        console.log(response)
                        if(response.status == 200){
                            this.isAdd = false
                            this.modalComfirm = false
                            this.caseInfo = response.data
                            this.getCommunity()
                            axios
                                .post('http://localhost:3000/community/load', {
                                  communities: list
                                })
                                .then((response) => {
                                            console.log(response)
                                            if(response.status == 200){
                                                this.isAdd = false
                                                this.modalComfirm = false
                                                this.caseInfo = response.data
                                                this.getCommunity()       
                                            }
                                        })
                                .catch((err) => {
                                            console.log(err)
                                        });   
                        }
                    })
            .catch((err) => {
                        console.log(err)
                    }); 
          },
          plusPage(){
           if(this.page >= 0 && this.page < this.countPage-1){
              this.page++
              if(this.isAdd){
                this.updateShowPageCase()
              }
              else{
                this.updateShowPageCommu()
              }
            }
            
          },
          minusPage(){
            if(this.page <= this.countPage-1 && this.page > 0){
              this.page--
              if(this.isAdd){
                this.updateShowPageCase()
              }
              else{
                this.updateShowPageCommu()
              }
            } 
          },
          updateShowPageCommu() {
            this.countPage = Math.ceil(this.caseCommunity.length/this.pageSize)
            this.visiblePage = this.caseCommunity.slice(this.page * this.pageSize, (this.page * this.pageSize) + this.pageSize);
          },
          updateShowPageCase() {
            this.countPage = Math.ceil(this.caseInfoAll.length/this.pageSize)
            this.visiblePage = this.caseInfoAll.slice(this.page * this.pageSize, (this.page * this.pageSize) + this.pageSize);
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
            if(!this.isAdd){
            axios
            .get('http://localhost:3000/community/filter?search='+this.searchTxt+'&column='+this.selectFilter)
                              .then((response) => {
                                                  if(response.status == 200){
                                                      this.caseCommunity = response.data
                                                      this.countPage = Math.ceil(this.caseCommunity.length/this.pageSize)
                                                      this.updateShowPageCommu();
                                                      console.log(this.caseCommunity)
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
            else{
              axios
            .get('http://localhost:3000/case/filter?search='+this.searchTxt+'&column='+this.selectFilter)
                              .then((response) => {
                                                  if(response.status == 200){
                                                      this.caseInfoAll = response.data
                                                      this.countPage = Math.ceil(this.caseInfoAll.length/this.pageSize)
                                                      this.updateShowPageCase();
                                                      console.log(this.caseInfoAll)
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
            },
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