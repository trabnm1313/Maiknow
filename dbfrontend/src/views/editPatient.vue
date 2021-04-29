<template>
  <div id="detail" class="box">
    <div class="columns mx-3 my-3" >
      <div class="columns is-one-fifth pt-4">
        <div class="column">
          <label class="text-add">Patient Information</label>
        </div>
      </div>
      <div class="column pt-0">
<!--          HN-->
        <div class="field is-horizontal mb-0">
          <div class="column is-2 ml-4">
          <div class="field-label is-normal">
            <label class="label text-add has-text-left pl-1">HN : </label>
          </div>
           </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-4 pl-4 pt-4">
            <div class="control">
                <input class="input ml-5 patient-dis patient-text" type="text" value="12345" disabled>
            </div>
            </div>
          </div>
          </div>
        </div>
<!--            Firstname-->
        <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-1">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add has-text-left pl-3">Firstname : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0 mt-3">
            <div v-if="!isEdit" class="control">
                <input class="input patient-dis patient-text" type="text" disabled>
              </div>
              <div v-else class="control">
                <input class="input patient-non-dis patient-text" type="text">
              </div>
            </div>
            </div>
          </div>
        </div>
<!--                  Lastname-->
        <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-0">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add has-text-left pl-4" >Lastname : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0  mt-3">
            <div v-if="!isEdit" class="control">
                <input class="input patient-text patient-dis" type="text" disabled>
              </div>
              <div v-else class="control">
                <input class="input patient-non-dis patient-text" type="text">
              </div>
            </div>
            </div>
          </div>
        </div>
      
<!--              ID Card-->
      <div class="field is-horizontal">
          <div class="column is-3 ml-0">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add mr-4 has-text-left pl-4">ID Card : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0 mt-3">
            <div class="control">
                <input class="input patient-text patient-dis" type="text" disabled>
              </div>
            </div>
            </div>
          </div>
        </div>
<!--              Address-->
        <div class="field is-horizontal">
          <div class="column is-3 pl-4">
          <div class="field-label is-normal mr-3 pt-0">
            <label class="label text-add mr-3 has-text-left pl-2">Address : </label>
          </div>
          </div>
          <div class="field-body">
            <div class="field">
              <div v-if="!isEdit" class="control">
                <textarea class="textarea patient-dis patient-text" disabled></textarea>
              </div>
              <div v-else class="control">
                <textarea class="textarea patient-non-dis patient-text"></textarea>
              </div>
            </div>
          </div>
        </div>
<!--                  DOB-->
        <div class="field is-horizontal mb-0">
          <div class="field-label is-normal ml-2">
            <label class="label text-add mt-3 has-text-left pl-4">D.O.B : </label>
           </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-4 pl-3 pt-4 pr-0">
            <div v-if="!isEdit" class="control">
                <input class="input ml-5 patient-text patient-dis" type="date" disabled>
            </div>
              <div v-else class="control">
                <input class="input ml-5 patient-non-dis patient-text" type="date">
              </div>
            </div>
          </div>
          </div>
        </div>
<!--              Age-->
        <div class="field is-horizontal mb-0">
          <div class="column is-2 ml-4">
          <div class="field-label is-normal pl-0">
            <label class="label text-add has-text-left">Age : </label>
          </div>
           </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-4 pl-5 pt-4 pr-6">
            <div class="control pl-4">
                <input class="input ml-2 patient-dis patient-text" type="text" value="19" disabled>
            </div>
            </div>
          </div>
          </div>
        </div>
<!--              Gender-->
        <div class="field is-horizontal mb-0">
          <div class="column is-2 ml-4">
            <div class="field-label is-normal pl-0">
              <label class="label text-add has-text-left">Gender : </label>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="column is-4 pl-5 pt-4 pr-6">
                <div class="control pl-4">
                  <input class="input ml-2 patient-dis patient-text" type="text" value="Male" disabled>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--            Phone number-->
        <div class="field is-horizontal mb-0">
          <div class="column is-2 ml-4">
            <div class="field-label is-normal pl-0">
              <label class="label text-add has-text-left">Phone Number: </label>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="column is-4 pl-5 pt-4 pr-6">
                <div v-if="!isEdit" class="control pl-4">
                  <input class="input ml-2 patient-dis patient-text" type="text" value="" disabled>
                </div>
                <div v-else class="control pl-4">
                  <input class="input ml-2 patient-non-dis patient-text" type="text" value="">
                </div>
              </div>
            </div>
          </div>
        </div>
<!--        Nationality-->
        <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-1">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add has-text-left pl-2">Nationality : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0 mt-3">
            <div v-if="!isEdit" class="control">
                <input class="input patient-dis patient-text" type="text" disabled>
              </div>
              <div v-else class="control">
                <input class="input patient-non-dis patient-text" type="text">
              </div>
            </div>
            </div>
          </div>
        </div>
<!--        Religion-->
        <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-1">
          <div class="field-label is-normal mr-3 mt-2 ml-2">
            <label class="label text-add has-text-left pl-0">Religion : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0 mt-3">
            <div v-if="!isEdit" class="control">
                <input class="input patient-dis patient-text" type="text" disabled>
              </div>
              <div v-else class="control">
                <input class="input patient-non-dis patient-text" type="text">
              </div>
            </div>
            </div>
          </div>
        </div>
<!--        Occupation-->
        <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-1">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add has-text-left pl-2">Occupation : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0 mt-3">
            <div v-if="!isEdit" class="control">
                <input class="input patient-dis patient-text" type="text" disabled>
              </div>
              <div v-else class="control">
                <input class="input patient-non-dis patient-text" type="text">
              </div>
            </div>
            </div>
          </div>
        </div>
<!--        Office Name-->
            <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-1">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add has-text-left pl-2">Office Name : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0 mt-3">
            <div v-if="!isEdit" class="control">
                <input class="input patient-dis patient-text" type="text" disabled>
              </div>
              <div v-else class="control">
                <input class="input patient-non-dis patient-text" type="text">
              </div>
            </div>
            </div>
          </div>
        </div>
<!--              button-->
        <div v-if="!isEdit" class="columns mt-5 is-pulled-right">
          <button @click="isEdit = true" class="button is-rounded" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">Edit</button>
        </div>
        <div v-else class="columns mt-5 is-pulled-right">
          <button @click="modalCancel = true" class="button is-rounded mr-3"  style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Cancel</button>
          <button @click="modalComfirm = true" class="button is-rounded" style="background-color: #253D39;font-size: 20px;line-height: 25px; color: #E2D8C9;border-color: #253D39">Comfirm</button>
        </div>
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
              <p>you want to cancel editing</p>
              <p>patient information ?</p>
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
              <p>you want to edit patient information ?</p>
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
      modalComfirm: false
    }
  }
}
</script>
<style scoped>
.text-add{
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
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
.patient-dis{
  background: #D1C9BC;
  border-color: #D1C9BC;
}
.patient-non-dis{
  background: #FFF8EE;
}

.patient-text{
  color: #385B56;
  font-size: 18px;
  font-weight: bold;
}

</style>