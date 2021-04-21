<template>
  <div id="detail" class="box">
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
      

      <div class="column" id="btn">
        <button class="button is-rounded mr-3"  style="background: #BA9657; color: #FFFFFF">Cancel</button>
        <button class="button is-rounded" style="background: #385B56; color: #FFFFFF">Comfirm</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
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
#btn{
  position: absolute;
  bottom: 2%;
  right: 4%;
}
</style>