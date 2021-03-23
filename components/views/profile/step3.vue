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
    <b-input-group prepend="ที่อยู่ตามบัตรประชาชน" size="sm" class="mt-5 mb-2">
      <b-input
        v-model.trim="address"
        size="sm"
        class="border border-1"
      ></b-input>
    </b-input-group>
    <div class="">
      <small>กรุณาระบุรายละเอียดของที่อยู่ให้ตรงตามบัตรประชาชนทุกประการ</small>
    </div>
    <b-input-group prepend="แขวง/ตำบล" size="sm" class="my-5">
      <!-- <b-form-select
        v-model="district"
        :options="options3"
        size="sm"
        class=""
      ></b-form-select> -->
      <b-input
        v-model.trim="district"
        size="sm"
        class="border border-1"
        type="text"
      ></b-input>
    </b-input-group>
    <b-input-group prepend="เขต/อำเภอ" size="sm" class="my-5">
      <!-- <b-form-select
        v-model="county"
        :options="options2"
        size="sm"
        class=""
      ></b-form-select> -->
      <b-input
        v-model.trim="county"
        size="sm"
        class="border border-1"
        type="text"
      ></b-input>
    </b-input-group>
    <b-input-group prepend="จังหวัด" size="sm" class="my-5">
      <!-- <b-form-select
        v-model="province"
        :options="options1"
        size="sm"
        class=""
      ></b-form-select> -->
      <b-input
        v-model.trim="province"
        size="sm"
        class="border border-1"
        type="text"
      ></b-input>
    </b-input-group>
    <b-input-group prepend="รหัสไปรษณีย์" size="sm" class="my-5">
      <b-input
        v-model.trim="code"
        size="sm"
        class="border border-1"
        type="tel"
        maxlength="4"
      ></b-input>
    </b-input-group>
    <b-container fluid class="p-0">
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
      selected: null,
      address: "",
      province: "",
      county: "",
      district: "",
      code: "",
      options1: [
        { value: null, text: "ไทย" },
        { value: "a", text: "Foreigner" },
      ],
      options2: [
        { value: "M", text: "ชาย" },
        { value: "F", text: "หญิง" },
      ],
      options3: [
        { value: "M", text: "ชาย" },
        { value: "F", text: "หญิง" },
      ],

      status: {
        step: "step3",
      },
      form: {},
    }
  },
  methods: {
    backToStep2(e) {
      e.preventDefault()
      this.$emit("back", this.status)
    },
    confirmStep3(e) {
      e.preventDefault()
      this.$emit("dataStep3", this.form)
    },
  },
}
</script>