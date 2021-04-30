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
                <option value="Case ID">Case ID</option>
                <option value="Firstname">Firstname</option>
                <option value="Lastname">Lastname</option>
                <option value="Details">Details</option>
                <option value="Claim">Claim</option>
                <option value="Status">Status</option>
                <option value="Prosthesis">Prosthesis</option>
                <option value="Hospital">Hospital</option>
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
        <th v-show="isAdd"></th>
        <th class="has-text-white">Case ID</th>
        <th class="has-text-white">Firstname</th>
        <th class="has-text-white">Lastname</th>
        <th class="has-text-white">Details</th>
        <th class="has-text-white">Claim</th>
        <th class="has-text-white">Status</th>
        <th class="has-text-white">Prosthesis</th>
        <th class="has-text-white">Hospital</th>
      </tr>
      </thead>
      <template v-for="(caseInfo, key) in caseInfo" >
      <tbody v-if="caseInfo.isShare" :key="key">
        <tr style="border-bottom: 1px solid #BA9657;">
        <td  v-show="isAdd"><input v-model="caseInfo.isShare" class="checkbox" type="checkbox"></td>
        <td>{{caseInfo.caseID}} </td>
        <td>{{caseInfo.fname}}</td>
        <td>{{caseInfo.lname}}</td>
        <td>{{caseInfo.details}}</td>
        <td>{{caseInfo.claim}}</td>
        <td>{{caseInfo.status}}</td>
        <td>{{caseInfo.prosthesis}}</td>
        <td>{{caseInfo.hospital}}</td>
      </tr>
      </tbody>
      </template>
      
    </table>
    <div class="columns mr-5 mb-1 go-botton"  v-show="isAdd == false">
      <div class="column go-botton go-right">
        <button @click="isAdd = true" class="button is-rounded"  style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Add Case</button>
      </div>
    </div>
    <div class="columns mb-0 go-botton" v-show="isAdd">
      <div class="column go-botton go-right">
        <button @click="modalCancel = true" class="button is-rounded mr-5" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Cancel</button>
        <button @click="modalCancel = true" class="button is-rounded"  style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">Comfirm</button>
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
              <button class="button is-rounded mr-4" @click="modalCancel = false; isAdd = false" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
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
              <button class="button is-rounded mr-4" @click="modalComfirm = false; isAdd = false" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
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
      page: 1,
      countPage: 10,
      isAdd: false,
      modalCancel: false,
      modalComfirm: false,
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
      caseInfoAll:[
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
      selectFilter: 'Case ID',
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