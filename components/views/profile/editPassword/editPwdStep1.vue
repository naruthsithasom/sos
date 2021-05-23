<template>
  <div>
    <client-only>
      <b-container >
        <h4>Change password</h4>
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
                  label="รหัสผ่านเดิม"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input
                    v-model.trim="email"
                    class="border border-1"
                    :state="isEmail"
                    text="email"
                  ></b-form-input>
                  <b-form-text text-variant="danger" v-if="check && !isEmail">
                    รูปแบบอีเมล์ไม่ถูกต้อง
                  </b-form-text>
                </b-form-group>

                <b-form-group
                  label="รหัสผ่านใหม่"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input
                    v-model.trim="password"
                    class="border border-1"
                    :state="isPasswordMatching"
                    type="password"
                    maxlength="20"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="ยื่นยันรหัสผ่านใหม่"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input
                    v-model.trim="confirmPwd"
                    class="border border-1"
                    type="password"
                    :state="isPasswordMatching"
                    maxlength="20"
                  ></b-form-input>
                  <b-form-text text-variant="success" v-if="isPasswordMatching">
                    รหัสผ่านตรงกัน
                  </b-form-text>
                  <b-form-text
                    text-variant="danger"
                    v-if="check && !isPasswordMatching"
                  >
                    รหัสผ่านไม่ตรงกัน
                  </b-form-text>
                  <b-form-text
                    text-variant="danger"
                    v-if="check && !isPasswordMatching"
                  >
                    จำนวนตัวอักษรกว่า 6 ตัวอักษรขึ้นไป แต่ไม่เกิน 20 ตัวอักษร
                  </b-form-text>
                  <div class="text-center mt-3">
                    <b-button
                      @click="confirmStep1"
                      class="btn w-100"
                      variant="warning"
                      >เปลี่ยนรหัสผ่านใหม่</b-button
                    >
                  </div>
                </b-form-group>
                <b-form-group
                  label=""
                  label-cols-sm="4"
                  label-align-sm="right"
                  class="mb-0"
                >
                </b-form-group>
              </b-form-group>
            </b-card>
          </b-col>
          <b-col lg="3" md="3" sm="12" class=""></b-col>
        </b-row>
        <!-- <b-container>
      <b-modal
        id="modal-scrollable"
        hide-footer
        scrollable
        title="ระบบสมัครสมาชิก  Wealth group company"
      >
        <p class="my-4 text-dark" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
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
            @click="confirmStep1"
            :disabled="!isClickCheckBox"
            variant="primary"
            class="px-4 mx-2"
            >ตกลง</b-button
          >
        </div>
      </b-modal>
    </b-container> -->
      </b-container>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPwd: null,
      data: {},
      check: false,
      statusCheckBox: "no",
      isNotpattern: false,
    }
  },
  computed: {
    isClickCheckBox() {
      return this.statusCheckBox === "yes"
    },
    isUser() {
      return this.username.length >= 6 && this.username != ""
    },
    isEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(this.email).toLowerCase())
    },
    isPasswordMatching() {
      return (
        this.password === this.confirmPwd &&
        this.password.length >= 6 &&
        this.password.length <= 20
      )
    },
    isPassport() {
      return this.isPasswordMatching && this.isEmail && this.isUser
    },
  },
  methods: {
    confirmStep1(e) {
      e.preventDefault()
      this.check = true
      // this.$nextTick(() => {
      //   this.$bvModal.hide("modal-scrollable")
      // })
      this.data.username = this.username
      this.data.email = this.email
      this.data.password = this.password
      if (this.isPassport) {
        //console.log("register step 1 >>", this.data)
        this.$emit("dataStep1", this.data)
      } else {
        console.log("Register Faill..")
      }
    },
    isEnglish(e) {
      let char = String.fromCharCode(e.keyCode)
      if (/^[A-Za-z0-9_]+$/.test(char)) {
        return (this.isNotpattern = false)
      } else {
        console.log(">>", char)
        return (this.isNotpattern = true)
      }
    },
  },
}
</script>