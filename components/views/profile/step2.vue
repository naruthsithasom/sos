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

    <b-input-group prepend="คำนำหน้าชื่อ" size="sm" class="my-5">
      <b-form-select
        v-model="titleName"
        :options="options1"
        size="sm"
        class=""
      ></b-form-select>
    </b-input-group>

    <b-input-group prepend="ชื่อ(ภาษาไทย) *" size="sm" class="my-5">
      <b-input
        v-model="firstNameTH"
        size="sm"
        class="border border-1 mr-2"
        placeholder="ชื่อ"
      ></b-input>
      <b-input
        v-model="midNameTH"
        size="sm"
        class="border border-1 mr-2"
        placeholder="ชื่อกลาง (ถ้ามี)"
      ></b-input>
      <b-input
        v-model="lastNameTH"
        size="sm"
        class="border border-1"
        placeholder="นามสกุล"
      ></b-input>
    </b-input-group>

    <b-input-group prepend="ชื่อ(ภาษาอังกฤษ) *" size="sm" class="mt-5 mb-2">
      <b-input
        v-model="firstNameEN"
        size="sm"
        class="border border-1 mr-2"
        placeholder="ชื่อ"
      ></b-input>
      <b-input
        v-model="midNameEN"
        size="sm"
        class="border border-1 mr-2"
        placeholder="ชื่อกลาง (ถ้ามี)"
      ></b-input>
      <b-input
        v-model="lastNameEN"
        size="sm"
        class="border border-1"
        placeholder="นามสกุล"
      ></b-input>
    </b-input-group>

    <b-input-group prepend="" size="sm" class="">
      <small>* กรุณากรอกชื่อ โดยไม่มีคำนำหน้า เช่น ชื่อ(ภาษาไทย): สมชาย</small>
    </b-input-group>

    <b-input-group prepend="เพศ" size="sm" class="my-5">
      <b-form-select
        v-model="sex"
        :options="options2"
        size="sm"
        class=""
      ></b-form-select>
    </b-input-group>

    <b-input-group prepend="วันเกิด" size="sm" class="my-5">
      <b-form-datepicker
        v-model="birthday"
        id="datepicker-sm"
        class="border border-1"
        size="sm"
      ></b-form-datepicker>
    </b-input-group>
    <b-input-group prepend="เบอร์โทรศัพท์" size="sm" class="my-5">
      <b-input
        v-model="mobile"
        size="sm"
        class="border border-1"
        type="tel"
        maxlength="10"
      ></b-input>
    </b-input-group>
    <b-input-group prepend="อาชีพ" size="sm" class="my-5">
      <b-input
        v-model="career"
        size="sm"
        class="border border-1"
        type="text"
      ></b-input>
    </b-input-group>
    <b-input-group prepend="ที่อยู่ที่ทำงาน" size="sm" class="my-5">
      <b-input
        v-model="addrWork"
        size="sm"
        class="border border-1"
        type="text"
      ></b-input>
    </b-input-group>
    <b-container fluid class="p-0">
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
      titleName: "",
      firstNameTH: "",
      midNameTH: "",
      lastNameTH: "",
      firstNameEN: "",
      midNameEN: "",
      lastNameEN: "",
      sex: "",
      mobile: "",
      birthday: "",
      career: "",
      addrWork: "",

      form: {
        username: "",
      },
      options1: [
        { value: "นาย", text: "นาย" },
        { value: "นาง", text: "นาง" },
        { value: "นางสาว", text: "นางสาว" },
      ],
      options2: [
        { value: "M", text: "ชาย" },
        { value: "F", text: "หญิง" },
      ],
      options3: [
        { value: "M", text: "ชาย" },
        { value: "F", text: "หญิง" },
      ],
      options4: [
        { value: "M", text: "ชาย" },
        { value: "F", text: "หญิง" },
      ],
      status: {
        step: "step2",
      },
    }
  },
  methods: {
    backToStep1(e) {
      e.preventDefault()
      this.$emit("back", this.status)
    },
    confrimStep2(e) {
      e.preventDefault()
      this.$emit("dataStep2", this.form)
      //console.log("click step2")
    },
  },
}
</script>