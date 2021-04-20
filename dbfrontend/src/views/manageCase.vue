<template>
   <div id="detail" class="box">
              <div class="columns" style="border-bottom: 1px solid #385B56">
                <div class="column is-one-third">
                  <div class="columns">
                    <label class="text-add">Case Infomation</label>
                  </div>
                </div>
                <div class="column">
                  <div class="columns mb-5">
                    <label class="text-add">Case ID : </label>
                    <input style="color: #385B56; background: #D1C9BC;" type="text" value="10230" disabled>
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Detail : </label>
                    <textarea style="width: 511px; height: 203px; resize: none; background: #FFF8EE; color: #385B56;"></textarea>
                  </div>
                  <div class="columns mt-5 mb-5">
                    <label class="text-add">Claim : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="10230">
                  </div>
                </div>
              </div>
              <div class="columns mt-5" style="border-bottom: 1px solid #385B56">
                <div class="column is-one-third">
                  <div class="columns">
                    <label class="text-add">Patient Information</label>
                  </div>
                </div>
                <div class="column">
                  <div class="columns mb-5">
                    <label class="text-add">HN : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="123">
                  </div>
                  <div class="columns mb-5 mt-5">
                      <label class="text-add">Firstname : </label>
                      <input style="color: #385B56; background: #FFF8EE;" type="text" value="Punpetch">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Lastname : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="Prakongpak">
                  </div>
                </div>
              </div>
              <div class="columns mt-5">
                <div class="column is-one-third">
                  <div class="columns">
                    <label class="text-add">Patient Information</label>
                  </div>
                </div>
                <div class="column">
                  <div class="columns mb-5">
                    <label class="text-add">ID : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="123">
                  </div>
                </div>
                <div class="column is-3 mt-6">
                  <button class="button is-rounded mr-3"  style="background: #BA9657; color: #FFFFFF">Cancel</button>
                  <button class="button is-rounded" style="background: #385B56; color: #FFFFFF">Comfirm</button>
                </div>
              </div>
            </div>
</template>

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

</style>