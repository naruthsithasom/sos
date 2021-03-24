<template>
  <b-container cols="12">
    <h4>ยืนยันตัวตน</h4>
    <div class="d-flex justify-content-around">
      <b-icon icon="person" font-scale="2"></b-icon>
      <b-icon icon="file-richtext" font-scale="2"></b-icon>
      <b-icon icon="house-door-fill" font-scale="2"></b-icon>
      <b-icon icon="camera" font-scale="2"></b-icon>
      <b-icon icon="file-earmark-person" font-scale="2"></b-icon>
    </div>
    <b-input-group prepend="ที่อยู่ตามบัตรประชาชน" size="sm" class="mt-5">
      <b-input
        v-model.trim="no"
        size="sm"
        class="border border-1"
      ></b-input>
    </b-input-group>
    <b-form-text text-variant="primary" class="m-0">* กรุณาระบุรายละเอียดของที่อยู่ให้ตรงตามบัตรประชาชนทุกประการ</b-form-text>
    <b-form-text text-variant="danger" class="m-0" v-if="check && (no == '' ? true : false)"> กรุณากรอกหมายเลขบัตรประชาชนให้ถูกต้อง </b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="แขวง/ตำบล" size="sm" class="">
      <b-input
        v-model.trim="district"
        size="sm"
        class="border border-1"
        type="text"
      ></b-input>
    </b-input-group>
    <b-form-text text-variant="danger" v-if="check && (district == '') ? true : false"> กรุณาระบุ แขวง/ตำบล </b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="เขต/อำเภอ" size="sm" class="">
      <b-input
        v-model.trim="county"
        size="sm"
        class="border border-1"
        type="text"
      ></b-input>
    </b-input-group>
    <b-form-text text-variant="danger" v-if="check && (county == '' ? true : false)">กรุณาระบุ เขต/อำเภอ </b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="จังหวัด" size="sm" class="">
      <b-input
        v-model.trim="province"
        size="sm"
        class="border border-1"
        type="text"
      ></b-input>
    </b-input-group>
    <b-form-text text-variant="danger" v-if="check && (province == '' ? true : false)">กรุณาระบุ จังหวัด  </b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="รหัสไปรษณีย์" size="sm" class="">
      <b-input
        v-model.trim="code"
        size="sm"
        class="border border-1"
        type="tel"
        maxlength="4"
      ></b-input>
    </b-input-group>
    <b-form-text text-variant="danger" v-if="check && (code == '' ? true : false)">  กรุณาระบุ รหัสไปรษณีย์ </b-form-text>
    <b-container fluid class="p-0 my-5">
      <b-row class="mb-4">
        <b-col class="">
          <b-button
            @click="backToStep2"
            variant="warning"
            size="sm"
            class="w-50"
            ><b-icon icon="arrow-bar-left" font-scale="1"></b-icon
            >ย้อนกลับ</b-button
          ></b-col
        >
        <b-col class="text-right">
          <b-button
            @click="confirmStep3"
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
      no: "",
      province: "",
      county: "",
      district: "",
      code: "",

      status: {
        step: "step3",
      },

      data: {},
      check: false,
    }
  },
  computed:{
    isPassport(){
      const passport = this.no != "" && this.province != "" && this.county != "" && this.district != "" && this.code != ""
      return passport
    }
  },
  methods: {
    backToStep2(e) {
      e.preventDefault()
      this.$emit("back", this.status)
    },
    confirmStep3(e) {
      e.preventDefault()
      this.check = true
      this.data.address = `${this.no} ${this.province} ${this.county} ${this.district} ${this.code}`
      if(this.isPassport){
        this.$emit("dataStep3", this.data)
      } else {
        console.log("Profile step 3 worng!!!")
      }
    },
  },
}
</script>