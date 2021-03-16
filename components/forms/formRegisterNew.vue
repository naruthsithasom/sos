<template>
  <div>
    <client-only>
      <b-container fluid v-show="showRegisterStep1">
        <b-row class="">
          <b-col lg="3" md="3" sm="12" class=""></b-col>
          <b-col lg="6" md="6" sm="12" class="bg-light">
            <b-card bg-variant="light">
              <b-form-group
                label-cols-lg="1"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-group
                  label="ที่อยู่อีเมล์:"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input class="border border-1"></b-form-input>
                </b-form-group>

                <b-form-group
                  label="รหัสผ่าน:"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input class="border border-1" type="password"></b-form-input>
                </b-form-group>

                <b-form-group
                  label="ยื่นยันรหัสผ่าน:"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input class="border border-1" type="password"></b-form-input>
                  <div class="text-center mt-3">
                    <b-button v-b-modal.modal-scrollable class="btn w-100" variant="outline-warning"
                      >สมัครสมาชิก</b-button
                    >
                  </div>
                </b-form-group>
              </b-form-group>
            </b-card>
          </b-col>
          <b-col lg="3" md="3" sm="12" class=""></b-col>
        </b-row>
        <div>
          <!-- <b-button v-b-modal.modal-scrollable
              >Launch scrolling modal</b-button
            > -->
          <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
            <p class="my-4 text-dark"  v-for="i in 20" :key="i">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <b-form-checkbox value="accepted" unchecked-value="not_accepted">
              I accept the terms and use
            </b-form-checkbox>
          </b-modal>
        </div>
      </b-container>
      <b-container fluid v-show="showRegisterStep2">
        <b-row class="pt-4">
          <b-col lg="3" md="3" sm="12"></b-col>
          <b-col lg="6" md="6" sm="12" class="bg-light pb-4">
            <p class="mt-3 text-dark">ยื่นยันอีเมล์ที่คุณต้องการใช้กับ sos เพื่อข่าวสาร การแจ้งเตือนและลิงค์ยืนยัน</p>
            <input class="w-100 border border-1"/>
            <b-button  class="mt-3 btn w-100" variant="outline-warning">ยื่นยันอีเมล์</b-button>
          </b-col>
          <b-col lg="3" md="3" sm="12"></b-col>
        </b-row>
      </b-container>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showRegisterStep1: true,
      showRegisterStep2: false,
    }
  },
}
</script>