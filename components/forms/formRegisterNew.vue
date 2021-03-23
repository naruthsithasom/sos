<template>
  <div style="height: 100vh">
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
                  <b-form-input
                    v-model.trim="form.email"
                    class="border border-1"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="รหัสผ่าน:"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input
                    v-model.trim="form.password"
                    class="border border-1"
                    type="password"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="ยื่นยันรหัสผ่าน:"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input
                    v-model.trim="form.confirmPwd"
                    class="border border-1"
                    type="password"
                  ></b-form-input>
                  <div class="text-center mt-3">
                    <b-button
                      v-b-modal.modal-scrollable
                      :disabled="!isPasswordMatching"
                      class="btn w-100"
                      variant="outline-warning"
                      >สมัครสมาชิก</b-button
                    >
                  </div>
                </b-form-group>
                <!-- <b-form-group
                  label=""
                  label-cols-sm="4"
                  label-align-sm="right"
                  class="mb-0"
                >
                  <b-form-text class="">
                    <ul>กรุณาสร้างรหัสผ่านตามคำชี้แนะด้านล่างเพื่อความปลอดภัยของบัญชี
                      <li>รหัสผ่านต้องมีอักษรภาษาอังกฤษตัวใหญ่ (A-Z)</li>
                      <li>รหัสผ่านต้องมีอักษรภาษาอังกฤษตัวเล็ก (a-z)</li>
                      <li>รหัสผ่านต้องมีตัวเลข (0-9) รหัสผ่านต้องมีอักขระพิเศษ !@#$%^*-_+=)</li>
                    </ul>   
                  </b-form-text>
                </b-form-group> -->
                <b-form-group
                  label=""
                  label-cols-sm="4"
                  label-align-sm="right"
                  class="mb-0"
                >
                  <b-form-text class="text-center"
                    ><a href="/login" class="mr-2"
                      >มีบัญชีอยู่แล้ว ล็อกอินที่นี่</a
                    >
                    <b-icon
                      icon="arrow-right-square-fill"
                      scale="2"
                      variant="warning"
                    ></b-icon>
                  </b-form-text>
                </b-form-group>
              </b-form-group>
            </b-card>
          </b-col>
          <b-col lg="3" md="3" sm="12" class=""></b-col>
        </b-row>
      </b-container>

      <b-container fluid v-show="showRegisterStep2">
        <b-row class="pt-4">
          <b-col lg="3" md="3" sm="12"></b-col>
          <b-col lg="6" md="6" sm="12" class="bg-light pb-4 text-center">
            <div class=" ">
              <b-icon
                icon="envelope"
                style="width: 120px; height: 120px"
              ></b-icon>
            </div>
            <p class="mt-3 text-dark">
              ยื่นยันอีเมล์ที่คุณต้องการใช้กับ sos เพื่อข่าวสาร
              การแจ้งเตือนและลิงค์ยืนยัน
            </p>
            <input
              class="w-50 border border-1"
              :value="form.email"
              :disabled="true"
            />
            <b-button
              @click="handleOkConfirm"
              class="mt-3 btn w-50"
              type="submit"
              variant="outline-warning"
              >ยื่นยันอีเมล์</b-button
            >
          </b-col>
          <b-col lg="3" md="3" sm="12"></b-col>
        </b-row>
      </b-container>
      <b-container>
        <!-- <div class="text-center" v-show="isProcess">
          <b-spinner
            variant="warning"
            label="Spinning"
            style="width: 5rem; height: 5rem"
          ></b-spinner>
        </div> -->
      </b-container>
      <b-container>
        <b-modal
          id="modal-scrollable"
          hide-footer
          scrollable
          title="Scrollable Content"
        >
          <p class="my-4 text-dark" v-for="i in 20" :key="i">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <b-form-checkbox
            v-model="statusCheckBox"
            value="yes"
            unchecked-value="no"
          >
            I accept the terms and use
          </b-form-checkbox>
          <div class="pt-4 text-center">
            <b-button
              @click="$bvModal.hide('modal-scrollable')"
              variant="danger"
              class="px-4 mx-2"
              >ยกเลิก</b-button
            >
            <b-button
              @click="handleOk"
              :disabled="!isClickCheckBox"
              variant="primary"
              class="px-4 mx-2"
              >ตกลง</b-button
            >
          </div>
        </b-modal>
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
      isProcess: false,
      form: {
        email: "",
        password: "",
        confirmPwd: "",
      },
      statusCheckBox: "no",
      boxTwo: "",
    }
  },
  computed: {
    isClickCheckBox() {
      return this.statusCheckBox === "yes"
     },
    isPasswordMatching() {
      return true
    },
  },
  methods: {
    handleOk(e) {
      e.preventDefault()
      this.showRegisterStep1 = false
      this.showRegisterStep2 = true
      this.$nextTick(() => {
        this.$bvModal.hide("modal-scrollable")
      })

      console.log("OK..")
    },
    handleOkConfirm() {
      console.log("test handleok", JSON.stringify(this.form))
      this.showRegisterStep2 = false

      // this.isProcess = true
      // this.$bvToast.toast("Toast body content", {
      //   title: `ยินดีต้อนรับคุณ  ${this.form.email} `,
      //   variant: "success",
      //   solid: true,
      // })
      // setTimeout(() => {
      //   this.$router.push("/login")
      // }, 6000)

      this.boxTwo = ""
      this.$bvModal
        .msgBoxOk("ระบบได้ส่งลิ้งยื่นยันไปยังอีเมล์ของท่าน!", {
          title: "สมัครสมาชิก",
          size: "sm",
          buttonSize: "sm",
          okVariant: "warning",
          headerClass: "p-2 border-bottom-0 text-primary",
          footerClass: "p-2 border-top-0",
          centered: true,
        })
        .then((value) => {
          this.boxTwo = value
          if (this.boxTwo) {
            console.log("Welcome to sos..")
            this.$router.push("/")
          } else {
            console.log("Register Fail...")
          }
        })
        .catch((err) => {
         console.log("register error>>",err)
        })
    },
  },
}
</script>