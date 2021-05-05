<template>
  <div id="detail" class="box pb-6">
    <div class="columns mx-3 my-3" style="border-bottom: 1px solid #385B56">
      <div class="columns is-one-quarter pt-1">
        <div class="column">
          <label class="text-add">Case Infomation</label>
        </div>
      </div>
      <div class="column pt-0 ml-6">
          <!--Case ID-->
        <div class="field is-horizontal">
          <div class="field-label is-normal mr-3">
            <label class="label text-add">Case ID : </label>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-3 pl-0 pt-2">
            <div class="control">
                <input class="input case-dis case-text" type="text"  disabled v-model="caseInfo.caseID">
              </div>
            </div>
            </div>
          </div>
        </div>
<!--          Detail-->
        <div class="field is-horizontal">
          <div class="field-label is-normal mr-3 pt-0">
            <label class="label text-add mr-4">Detail : </label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea case-dis case-text has-fixed-size" v-model="caseInfo.detail" disabled></textarea>
              </div>
            </div>
          </div>
        </div>
<!--            Claim-->
        <div class="field is-horizontal">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add mr-4">Claim : </label>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-6 pl-0">
              <div class="control">
                <input class="input case-dis case-text" type="text" v-model="caseInfo.claim" disabled>
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
<!--        HN-->
        <div class="field is-horizontal">
          <div class="field is-normal mt-2 ml-5 mr-3">
            <label class="label text-add has-text-justified ml-5 pl-2">HN : </label>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-2 pl-0 pt-1">
            <div class="control">
                <input class="input case-text case-dis" type="text" v-model="patients.hn"  disabled>
              </div>
            </div>
            </div>
          </div>
        </div>
<!--          First Name-->
        <div class="field is-horizontal">
          <div class="column is-3">
          <div class="field-label is-normal mr-3 mt-2 mx-5">
            <label class="label text-add">Firstname : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0 mt-3">
            <div class="control">
                <input class="input case-dis case-text" type="text" v-model="patients.fname" disabled>
              </div>
            </div>
            </div>
          </div>
        </div>
<!--              Last Name-->
        <div class="field is-horizontal">
          <div class="column is-3">
          <div class="field-label is-normal mr-3 mt-2 mx-5">
            <label class="label text-add" >Lastname : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0  mt-3">
              <div  class="control">
                <input class="input case-dis case-text" type="text" disabled v-model="patients.lname" >
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
<!--      Prosthesis ID-->
    <div class="field is-horizontal">
          <div class="field is-normal mr-3 mt-4">
            <label class="label text-add pl-5 ml-4">ID :  </label>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column mt-1 pr-0 pl-0">
            <div  class="control">
                <input class="input case-text case-dis" type="text" value="123" v-model="prosthesisAccount.id" disabled>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
<!--    button-->
    <div class="column p-0 ">
      <div class="columns is-pulled-right">
      <button @click="isEdit = true" class="button is-rounded" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">Edit</button>
      </div>
    </div>
<!--    modal-->
    <div class="modal" :class="{'is-active': modalCancel}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <!-- Content ... -->
          <div class="columns is-vcentered">
            <div class="column has-text-centered modal-text">
              <p>Are you sure</p>
              <p>you want to cancel editing case ?</p>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <button class="button is-rounded mr-4" @click="modalCancel = false; isEdit = false" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
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
              <p>you want to edit case ?</p>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <button class="button is-rounded mr-4" @click="modalComfirm = false; isEdit = false" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
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
      isEdit: false,
      modalCancel: false,
      modalComfirm: false,
      prosthesisAccount:{id:'620700137', fname:'พาณินี', lname:'ไชยวรณ์', role:'Prosthesis', hospital:'KMITL Hospital', email:'620700137@gmail.com',phone:'0980176332',address:'kmitl',dob:'2001-05-14', age:20,gender:'Female'},
      patients:
        {hn:'000001', fname:'ก้อน', lname:'เหินเวหา', address:'มกส.', dob:'2000-05-14', age:'20', gender:"male", phone:"099025012", idCard:'4523900950236',nationality:'thai',religion:'thai',occupation:'KSU',office:'KSU'},
     caseInfo:
            {caseID:'000001', fname:'ก้อน', lname:'เหินเวหา', detail:'เปลี่ยนรัด BK ข้างซ้าย', claim:'จ่ายตรง', status:'old', prosthesis:'พาณินี'},
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
</style>