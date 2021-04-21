<template>
  <div id="detail" class="box">
    <div class="columns mx-3 my-3" >
      <div class="columns is-one-fifth pt-4">
        <div class="column">
          <label class="text-add">Patient Information</label>
        </div>
      </div>
      <div class="column pt-0">

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
                <input class="input ml-5" type="text" style="color: #385B56; background: #D1C9BC; border: #D1C9BC;" value="12345" disabled>
            </div>
            </div>
          </div>
          </div>
        </div>

        <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-1">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add has-text-left pl-3">Firstname : </label>
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

        <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-0">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add has-text-left pl-4" >Lastname : </label>
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
                <input class="input" type="text" style="color: #385B56; background: #FFF8EE;">
              </div>
            </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="column is-3 pl-4">
          <div class="field-label is-normal mr-3 pt-0">
            <label class="label text-add mr-3 has-text-left pl-2">Address : </label>
          </div>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea" style="resize: none; background: #FFF8EE; color: #385B56;"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal mb-0">
          <div class="field-label is-normal ml-2">
            <label class="label text-add mt-3 has-text-left pl-4">D.O.B : </label>
           </div>
        <div class="field-body">
          <div class="field">
            <div class="column is-4 pl-3 pt-4 pr-0">
            <div class="control">
                <input class="input ml-5" style="background: #FFF8EE; color: #385B56" type="date">
            </div>
            </div>
          </div>
          </div>
        </div>

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
                <input class="input ml-2" style="color: #385B56; background: #FFF8EE;" type="text" value="19" disabled>
            </div>
            </div>
          </div>
          </div>
        </div>

        <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-1">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add has-text-left pl-2">Nationality : </label>
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

        <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-1">
          <div class="field-label is-normal mr-3 mt-2 ml-2">
            <label class="label text-add has-text-left pl-0">Religion : </label>
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

        <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-1">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add has-text-left pl-2">Occupation : </label>
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

            <div class="field is-horizontal mb-0">
          <div class="column is-3 ml-1">
          <div class="field-label is-normal mr-3 mt-2">
            <label class="label text-add has-text-left pl-2">Office Name : </label>
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
        
        <div class="columns mt-5 is-pulled-right">
          <button class="button is-rounded mr-3"  style="background: #BA9657; color: #FFFFFF">Cancel</button>
          <button class="button is-rounded" style="background: #385B56; color: #FFFFFF">Comfirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

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

</style>