<template>
  <div id="detail" class="box pb-6">
    <div class="columns mx-3 my-3" style="border-bottom: 1px solid #385B56">
      <div class="columns is-one-quarter pt-1">
        <div class="column">
          <label class="text-add">Case Infomation</label>
        </div>
      </div>
      <div class="column pt-0 ml-6">

        <div class="field is-horizontal">
          <div class="field-label is-normal mr-3">
            <label class="label text-add">Case ID : </label>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-3 pl-0 pt-2">
            <div class="control">
                <input class="input case-non-dis case-text" type="text" v-model="data.case_ID">
              </div>
            </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal mr-3 pt-0">
            <label class="label text-add mr-4">Detail : </label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea case-non-dis case-text" v-model="data.detail"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add mr-4">Claim : </label>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-6 pl-0">
            <div class="control">
              <div class="select ml-2 patient-text">
                    <select v-model="data.claim_ID" style="background-color:#FFF8EE">
                      <option value="000001">ข้าราชการ</option>
                      <option value="000002">ประกันสังคม</option>
                      <option value="000003">ท.74</option>
                      <option value="000004">UC</option>
                      <option value="000005">สวัสดิการท้องถิ่น</option>
                      <option value="000006">จ่ายตรง</option>
                    </select>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        

      </div>

    </div>
    <div class="columns mx-3 my-3 mt-5" style="border-bottom: 1px solid #385B56">
      <div class="columns is-one-quarter mt-1">
        <div class="column">
          <label class="text-add">Patient Information</label>
        </div>
      </div>
      <div class="column">
        
        <div class="field is-horizontal">
          <div class="field is-normal mt-2 ml-5 mr-3">
            <label class="label text-add has-text-justified ml-5 pl-2">HN : </label>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-2 pl-0 pt-1">
            <div class="control">
                <input class="input case-non-dis case-text" type="text" v-model="data.hn">
              </div>
            </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>

    <div class="columns mx-4 my-5 pb-5">
      <div class="columns is-one-third mt-0">
        <div class="column">
          <label class="text-add">Prosthesis Information</label>
        </div>
      </div>

    <div class="field is-horizontal">
          <div class="field is-normal mr-3 mt-4">
            <label class="label text-add pl-5 ml-4">ID :  </label>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column mt-1 pr-0 pl-0">
            <div class="control">
                <input class="input case-non-dis case-text" type="text" v-model="data.staff_ID">
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
    <div class="column p-0 ">
      <div class="columns is-pulled-right">
      <button @click="modalCancel = true" class="button is-rounded mr-3"  style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Cancel</button>
      <button @click="modalComfirm = true" class="button is-rounded" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">Comfirm</button>
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
              <p>you want to cancel adding case ?</p>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <button class="button is-rounded mr-4" @click="$router.replace({ name: 'manageCase' });" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
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
              <p>you want to add case ?</p>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <button class="button is-rounded mr-4" @click="addCase()" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
              <button class="button is-rounded ml-4" @click="modalComfirm = false" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">No</button>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>


</template>
<script>
import moment from 'moment'
import axios from "axios";
export default {
  name: 'home',
  data() {
    return {
      modalCancel: false,
      modalComfirm: false,
      data: {
        case_ID: '',
        detail: '',
        claim_ID: '000001',
        staff_ID: '',
        hn: ''
      },
    }
  },methods: {
    addCase() {
      let newCase = {
        case_ID: this.data.case_ID,
        detail: this.data.detail,
        date: moment(new Date(), 'YYYY-MM-DD').format('YYYY-MM-DD'),
        cost: 0,
        type: 'new',
        claim_ID: this.data.claim_ID,
        staff_ID: this.data.staff_ID,
        hn: this.data.hn,
        share: '0'
      }
        axios
          .post("http://localhost:3000/case/create", newCase)
          .then((response) => {
                        console.log(response)
                        if(response.status == 200){
                            console.log(response)
                            this.$router.replace({ name: "manageCase" })
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
    }
}
</script>
<style scoped>
.text-add{
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #385B56;
}
.box{
  background-color: #E2D8C9;
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
.case-dis{
  background: #D1C9BC;
  border-color: #D1C9BC;
}
.case-non-dis{
  background: #FFF8EE;
}

.case-text{
  color: #385B56;
  font-size: 18px;
  font-weight: bold;
}
.select:not(.is-multiple):not(.is-loading)::after {
    border-color: #cfcfcf;
  }
</style>