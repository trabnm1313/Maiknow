<template>
            <div id="detail" class="box">
              <div class="columns">
                <div class="column is-one-third">
                  <div class="columns">
                    <label class="text-add">Patient Information</label>
                  </div>
                </div>
                <div class="column">
                  <div class="columns mb-5">
                    <label class="text-add">HN : </label>
                    <input style="color: #385B56; background: #D1C9BC;" type="text" value="10230" disabled>
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Firstname : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="Punpetch">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Lastname : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="Prakongpak">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">ID Card : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="ไม่บอก">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Address : </label>
                    <textarea style="width: 511px; height: 203px; resize: none; background: #FFF8EE; color: #385B56;"></textarea>
                  </div>
                  <div class="columns mt-5 mb-5">
                    <label class="text-add">D.O.B : </label>
                    <input style="background: #FFF8EE; color: #385B56" type="date">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Age : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="19" disabled>
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Nationality : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="Thai">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Religion : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="Asian">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Occupation : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="นศ.">
                  </div>
                  <div class="columns mb-5 mt-5">
                    <label class="text-add">Office Name : </label>
                    <input style="color: #385B56; background: #FFF8EE;" type="text" value="KMITL">
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
  font-size: 24px;
  line-height: 33px;
  color: #385B56;
}
.box{
  background-color: #E2D8C9;
}

</style>