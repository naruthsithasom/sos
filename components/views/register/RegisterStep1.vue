<template>
  <div>
    <client-only>
      <b-container fluid>
        <b-row class="">
          <b-col lg="3" md="3" sm="12" class=""></b-col>
          <b-col lg="6" md="6" sm="12" class="bg-light">
            <b-card bg-variant="light pb-4">
              <b-form-group
                label-cols-lg="1"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-group
                  label="ชื่อบัญชีผู้ใช้"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input
                    v-model.trim="username"
                    v-on:keypress="isEnglish($event)"
                    class="border border-1"
                    :state="isUser"
                    type="text"
                    maxlength="32"
                  ></b-form-input>
                  <b-form-text
                    text-variant="danger"
                    v-if="check && !isUser ? true : false"
                  >
                    กรุณาใช้ตัวอักษรมากกว่า 6 ตัวอักษรขึ้นไป
                  </b-form-text>
                  <b-form-text text-variant="danger" v-if="isNotpattern">
                    กรุณาตั้งชื่อบัญชีผู้ใช้เป็นภาษาอังกฤษเท่านั้น
                  </b-form-text>
                </b-form-group>

                <b-form-group
                  label="ที่อยู่อีเมล์"
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
                  label="รหัสผ่าน"
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
                  label="ยื่นยันรหัสผ่าน"
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
                </b-form-group>
                <b-form-group
                  label="ผู้แนะนำ"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="statusCheckBox"
                    :indeterminate.sync="propsIndeterminate"
                    value="yes"
                    unchecked-value="no"
                  >
                  </b-form-checkbox>
                  <div v-if="statusCheckBox !== 'no' ? true : false || propsIndeterminate">
                    <b-form-input
                      v-model.trim="advice"
                      class="border border-1"
                      type="text"
                      maxlength="50"
                      :state="isCheckAdvice"
                      :disabled="propsIndeterminate"
                    >
                      <b-button>ตรวจสอบชื่อผู้แนะนำ</b-button>
                    </b-form-input>
                    <div class="text-center mt-3">
                      <b-button @click="checkRecommed" class="btn w-100">
                        ตรวจสอบชื่อผู้แนะนำ
                      </b-button>
                    </div>
                  </div>
                  <div class="text-center mt-3">
                    <!-- <nuxt-link to=""> -->
                    <b-button
                      @click="confirmStep1"
                      class="btn w-100"
                      variant="outline-primary"
                      :disabled="(!isActvedConfrim || isClickCheckBox) && !propsIsConfirm"
                    >
                      <b-icon icon="person-circle" aria-hidden="true"></b-icon>
                      สมัครสมาชิก</b-button
                    >
                    <!-- </nuxt-link> -->
                  </div>
                </b-form-group>

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
    </client-only>
  </div>
</template>
<script>
export default {
  props:{
    propsIsAdvice: Boolean,
    propsIsConfirm: Boolean,
    propsIndeterminate:Boolean,
    // propsQueryAdvice: String,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      advice: "",
      adviceInput: "",
      confirmPwd: null,
      data: {},
      check: false,
      statusCheckBox: "no",
      isNotpattern: false,
      // propsIndeterminate:true,
     }
  },
  mounted(){
    //this.advice = this.propsQueryAdvice
    console.log(' component query params:>>',this.$route.query.advice)
    this.advice = this.$route.query.advice
  },
  computed: {
    // isCheckPropAdvice(){
    //   return this.advice = this.propsQueryAdvice
    // },
    isCheckAdvice(){
      return this.propsIsAdvice
    },
    isActvedConfrim(){
      return this.isUser && this.isEmail && this.isPasswordMatching && this.isPassport 
    },
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
      this.data.username = this.username
      this.data.email = this.email
      this.data.password = this.password
      this.data.advice = this.advice,
      this.data.status = this.statusCheckBox
      if (this.isPassport) {
        this.$emit("dataStep1", this.data)
      } else {
        console.log("Register Faill..")
      }
    },
    async checkRecommed() {
      //console.log('test advice',this.advice)
      if (this.advice) {
        this.$emit('advie', this.advice)
      } 
      if(!this.advice) {
        console.log(" recommed not found..")
        this.$toast.open({
           message: `กรุณาใส่ชื่อผู้แนะนำ`,
          type: "error",
          position: "bottom-right",
          className: "textWhite",
        })
      }
    },
    isEnglish(e) {
      let char = String.fromCharCode(e.keyCode)
      if (/^[A-Za-z0-9_]+$/.test(char)) {
        return (this.isNotpattern = false)
      } else {
        //console.log(">>", char)
        return (this.isNotpattern = true)
      }
    },
  },
}
</script>
