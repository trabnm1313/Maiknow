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
                <input class="input" type="text" style="color: #385B56; background: #D1C9BC; border: #D1C9BC;" value="10230" disabled>
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
                <textarea class="textarea" style="resize: none; background: #FFF8EE; color: #385B56;"></textarea>
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
                <input class="input" style="color: #385B56; background: #FFF8EE;" type="text">
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
          <div class="field is-normal mt-2 mr-3">
            <label class="label text-add has-text-justified ml-5 pl-2">HN : </label>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-2 pl-0 pt-1">
            <div class="control">
                <input class="input" type="text" style="color: #385B56; background: #FFF8EE;">
              </div>
            </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="column is-3">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add">Firstname : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0 mt-3">
            <div class="control">
                <input class="input" type="text" style="color: #385B56; background: #FFF8EE;">
              </div>
            </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="column is-3">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add" >Lastname : </label>
          </div>
          </div>
        <div class="field-body">
          <div class="field">
            <div class="column pl-0  mt-3">
            <div class="control">
                <input class="input" type="text" style="color: #385B56; background: #FFF8EE;">
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
          <label class="text-add">Patient Information</label>
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
                <input class="input" style="color: #385B56; background: #FFF8EE;" type="text" value="123">
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
              <button class="button is-rounded mr-4" @click="$router.replace({ name: 'manageCase' });" style="background-color: #BA9657;font-size: 20px;line-height: 25px; color: #E2D8C9; border-color: #BA9657">Yes</button>
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
      modalCancel: false,
      modalComfirm: false,
      created () {
        document.title = this.$route.meta.title;
      },
      methods: {

      }
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
</style>