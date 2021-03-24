<template>
  <b-container cols="12">
    <h4>ยืนยันตัวตน</h4>
    <div class="d-flex justify-content-around">
      <b-icon icon="person" font-scale="2"></b-icon>
      <b-icon icon="file-richtext-fill" font-scale="2"></b-icon>
      <b-icon icon="house-door" font-scale="2"></b-icon>
      <b-icon icon="camera" font-scale="2"></b-icon>
      <b-icon icon="file-earmark-person" font-scale="2"></b-icon>
    </div>

    <b-input-group prepend="คำนำหน้าชื่อ" size="sm" class="mt-5">
      <b-form-select
        v-model.trim="titleName"
        :options="options1"
        size="sm"
        class=""
       ></b-form-select>
    </b-input-group>
    <b-form-text text-variant="danger" v-if=" check && (titleName == null)"> กรุณาใส่คำนำหน้า </b-form-text>
    <div class="my-4"></div>
    <b-form-text text-variant="primary">* กรุณากรอกชื่อ โดยไม่มีคำนำหน้า เช่น ชื่อ(ภาษาไทย): สมชาย</b-form-text>
    <b-input-group prepend="ชื่อ(ภาษาไทย) *" size="sm" class="">
      <b-input
        v-model.trim="firstNameTH"
        value="firstNameTH"
        size="sm"
        class="border border-1 mr-2"
        placeholder="ชื่อ"
          ></b-input>
      <b-input
        v-model.trim="midNameTH"
        size="sm"
        class="border border-1 mr-2"
        placeholder="ชื่อกลาง (ถ้ามี)"
        type="text"
      ></b-input>
      <b-input
        v-model.trim="lastNameTH"
        size="sm"
        class="border border-1"
        placeholder="นามสกุล"
        type="text"
      ></b-input>
    </b-input-group>
     <b-form-text text-variant="danger" v-if="check && (firstNameTH == '' || lastNameTH == '') ? true : false "> กรุณากรอกชื่อ-นามสกุลภาษาไทยให้ครบ </b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="ชื่อ(ภาษาอังกฤษ) *" size="sm" class="mb-2">
      <b-input
        v-model.trim="firstNameEN"
        size="sm"
        class="border border-1 mr-2"
        placeholder="ชื่อ"
      ></b-input>
      <b-input
        v-model.trim="midNameEN"
        size="sm"
        class="border border-1 mr-2"
        placeholder="ชื่อกลาง (ถ้ามี)"
      ></b-input>
      <b-input
        v-model.trim="lastNameEN"
        size="sm"
        class="border border-1"
        placeholder="นามสกุล"
      ></b-input>
    </b-input-group>
    <b-form-text text-variant="danger" v-if="check && (firstNameEN == '' || lastNameEN == '') ?  true : false "> กรุณากรอกชื่อ-นามสกุลภาษาอังกฤษให้ครบ </b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="เพศ" size="sm" class="">
      <b-form-select
        v-model="sex"
        :options="options2"
        size="sm"
        class=""
      ></b-form-select>
    </b-input-group>
    <b-form-text text-variant="danger" v-if="check && (sex == null)"> กรุณาระบุเพศ </b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="วันเกิด" size="sm" class="">
      <b-form-datepicker
        v-model="birthday"
        id="datepicker-sm"
        class="border border-1"
        size="sm"
        type="date"
      ></b-form-datepicker>
    </b-input-group>
    <b-form-text text-variant="danger" v-if="check && (birthday == null)"> กรุณาใส่ข้อมูลวันเกิด</b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="เบอร์โทรศัพท์" size="sm" class="">
      <b-input
        v-model="mobile"
        size="sm"
        class="border border-1"
        type="tel"
        maxlength="10"
      ></b-input>
    </b-input-group>
    <b-form-text text-variant="danger" v-if="check && (mobile.length >= 10 ? false : true)"> กรุณาใส่หมายเลขโทรศัพท์ให้ถูกต้อง</b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="อาชีพ" size="sm" class="">
      <b-input
        v-model.trim="career"
        size="sm"
        class="border border-1"
        type="text"
      ></b-input>
    </b-input-group>
    <b-form-text text-variant="danger" v-if="check && (career == '' ? true : false)"> กรุณาใส่ข้อมูลอาชีพ</b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="ที่อยู่ที่ทำงาน" size="sm" class="">
      <b-input
        v-model.trim="addressWork"
        size="sm"
        class="border border-1"
        type="text"
      ></b-input>
    </b-input-group>
    <b-form-text text-variant="danger" v-if="check && (addressWork == '' ? true : false)"> กรุณาใส่ข้อมูลที่อยู่</b-form-text>
     <b-container fluid class="p-0 my-5">
      <b-row class="mb-4">
        <b-col class="">
          <b-button
            @click="backToStep1"
            variant="warning"
            size="sm"
            class="w-50"
            ><b-icon icon="arrow-bar-left" font-scale="1"></b-icon
            >ย้อนกลับ</b-button
          ></b-col
        >
        <b-col class="text-right">
          <b-button
            @click="confrimStep2"
             variant="warning"
            size="sm"
            class="w-50"
            >ถัดไป<b-icon
              icon="arrow-bar-right"
              font-scale="1"
            ></b-icon></b-button
        ></b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      titleName: null,
      firstNameTH: "",
      midNameTH: "",
      lastNameTH: "",
      firstNameEN: "",
      midNameEN: "",
      lastNameEN: "",
      sex: null,
      birthday: null,
      mobile: "",
      career: "",
      addressWork: "",

      data: {},

      options1: [
        { value: "นาย", text: "นาย" },
        { value: "นาง", text: "นาง" },
        { value: "นางสาว", text: "นางสาว" },
      ],
      options2: [
        { value: "M", text: "ชาย" },
        { value: "F", text: "หญิง" },
      ],
      status: {
        step: "step2",
      },
      check: false,
    }
  },
  computed: {
    isPassport(){
      const passport = this.titleName != null && 
                      !(this.firstNameTH == '' || this.lastNameTH == '') &&  
                      !(this.firstNameEN == '' || this.lastNameEN == '') &&
                      !(this.sex == null) && !(this.birthday == null) && 
                      (this.mobile.length == 10) && !(this.career == '') && !(this.addressWork == '')
      return passport
    }
  },
  methods: {
    backToStep1(e) {
      e.preventDefault()
      this.$emit("back", this.status)
    },
    confrimStep2(e) {
      e.preventDefault()
      this.check = true
       this.data.username_th = `${this.titleName} ${this.firstNameTH} ${this.lastNameTH}`
      this.data.username_en = `${this.firstNameEN} ${this.lastNameEN}`
      this.data.sex = this.sex
      this.data.birthday = this.birthday
      this.data.mobile = this.mobile
      this.data.career = this.career
      this.data.address_work = this.addressWork
      if(this.isPassport){
        this.$emit("dataStep2",this.data)
      } else {
        console.log("step2  wrong!!!")
      }
    },
  },
}
</script>