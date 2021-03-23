<template>
  <b-container cols="12">
    <h4>ยืนยันตัวตน</h4>
    <div class="d-flex justify-content-around">
      <b-icon icon="person" font-scale="2"></b-icon>
      <b-icon icon="file-richtext" font-scale="2"></b-icon>
      <b-icon icon="house-door" font-scale="2"></b-icon>
      <b-icon icon="camera" font-scale="2"></b-icon>
      <b-icon icon="file-earmark-person-fill" font-scale="2"></b-icon>
    </div>
    <b-container fluid class="my-5 p-5 text-dark bg-light">
      <h3 class="text-center">โปรดตรวจสอบความถูกต้อง</h3>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6"> คำนำหน้าชื่อ </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">ชื่อ(ภาษาไทย) *</b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">ชื่อ(ภาษาอังกฤษ) * </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">เพศ </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">อาชีพ </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">สัญชาติ </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">เลขบัตรประจำตัวประชาชน</b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">วันเกิด </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">เลเซอร์โค้ด *</b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">เบอร์โทรศัพท์ </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">ที่อยู่ปัจจุบัน</b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">ที่อยู่ที่ทำงาน </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6">ที่อยู่ตามบัตรประชาชน </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6"> คุณเป็นพลเมืองของอเมริกาหรือไม่? </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="6" md="6" lg="6"
          >คุณเป็นผู้มีถิ่นที่อยู่ในอเมริกาเพื่อการเสียภาษีหรือไม่?
        </b-col>
        <b-col sm="6" md="6" lg="6"> </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="mx-4 my-5 text-dark">
      <h3 class="text-center pt-4 mb-4">แบบทดสอบความเสี่ยงการลงทุน</h3>
      <small
        >ข้อกำหนดและเงื่อนไขการประเมินความเสี่ยงการลงทุนในตลาดสินทรัพย์ดิจิทัล
      </small>
      <div class="bg-light" style="height: 400px; overflow-y: scroll">
        <small>{{ text1 }}</small>
      </div>
      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
      >
        I accept the terms and use
      </b-form-checkbox>
    </b-container>
    <b-container fluid class="p-0 mt-5">
      <b-row class="mb-4">
        <b-col class="">
          <b-button
            @click="backToStep4"
            variant="warning"
            size="sm"
            class="w-50"
            ><b-icon icon="arrow-bar-left" font-scale="1"></b-icon
            >ย้อนกลับ</b-button
          ></b-col
        >
        <b-col class="text-right">
          <b-button
            @click="confirmStep5"
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
      id_card: "",
      code_card: "",
      checkList: [],
      file1: null,
      file2: null,
      options1: [
        {
          item: "A",
          name: `ลักษณะรูปถ่ายที่ถูกต้อง รูปถ่ายหน้าตรงที่สามารถเห็นใบหน้าชัดเจน`,
        },
        { item: "B", name: `สามารถเห็นเลขบัตรประชาชนชัดเจน` },
        { item: "C", name: `กระดาษเขียนคำว่า "wealthy-ex.com"` },
        { item: "D", name: `กระดาษลงวันที่วันปัจจุบัน "23/03/2021"` },
        { item: "E", name: `กระดาษต้องมีลายเซ็นผู้ทำการยืนยันตัวตน` },
      ],
      status: {
        step: "step5",
      },
      form: {},
      selected2: null,
      selected3: null,
      options2: [
        { text: "ใช่", value: "Y" },
        { text: "ไม่ใช่", value: "N" },
      ],
      text1: ``,
    }
  },
  methods: {
    backToStep4(e) {
      e.preventDefault()
      this.$emit("back", this.status)
    },
    confirmStep5(e) {
      e.preventDefault()
      this.$emit("dataStep5", this.form)
    },
  },
}
</script>