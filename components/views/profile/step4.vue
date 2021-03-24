<template>
  <b-container cols="12">
    <h4>ยืนยันตัวตน</h4>
    <div class="d-flex justify-content-around">
      <b-icon icon="person" font-scale="2"></b-icon>
      <b-icon icon="file-richtext" font-scale="2"></b-icon>
      <b-icon icon="house-door" font-scale="2"></b-icon>
      <b-icon icon="camera-fill" font-scale="2"></b-icon>
      <b-icon icon="file-earmark-person" font-scale="2"></b-icon>
    </div>
    <b-input-group prepend="เลขบัตรประจำตัวประชาชน" size="sm" class="mt-5">
      <b-input
        v-model="id_card"
        size="sm"
        class="border border-1"
        type="tel"
        maxlength="13"
      ></b-input>
    </b-input-group>
    <b-form-text text-variant="danger" class="m-0" v-if="check && (id_card.length == 13 ? false : true)"> กรุณากรอกหมายเลขบัตรประชาชนให้ถูกต้อง </b-form-text>
    <div class="my-4"></div>
    <b-input-group prepend="เลเซอร์โค้ด * " size="sm" class="">
      <b-input
        v-model="code_card"
        size="sm"
        class="border border-1"
        type="tel"
        maxlength="12"
      ></b-input>
    </b-input-group>
    <b-input-group class="">
    <b-form-text text-variant="primary" class="m-0">* หลักที่ 1-2 ต้องเป็นตัวหนังสือและ หลักที่ 3-12 ต้องเป็นตัวเลข</b-form-text>
    <b-form-text text-variant="danger" class="m-0" v-if="check && (code_card.length == 12 ? false : true)"> กรุณากรอกหมายเลขบัตรประชาชนให้ถูกต้อง </b-form-text>
    </b-input-group>
    <div class="my-4"></div>
     <b-input-group>
      <b-form-checkbox-group
        v-model="checkList"
        :options="options1"
        class="text-dark"
        value-field="item"
        text-field="name"
        size="sm"
        stacked
      ></b-form-checkbox-group>
    </b-input-group>
    <div class="my-4"></div>
    <b-container>
      <b-img
        src="~/assets/images/show_id_card.png"
        class=""
        fluid-grow
      ></b-img
      >
      <div class="my-4"></div>
      <b-form-group
        label="รูปภาพสำหรับการยืนยัน (ตัวอย่าง?):"
        label-cols-sm="4"
        label-size="sm"
        class="text-dark"
      >
        <b-form-file v-model="file1"  size="sm"></b-form-file>
        <b-form-text text-variant="primary" class="m-0">* ขนาดไม่เกิน 10MB ประเภท jpg, png, bmp, jpeg หรือ gif เท่านั้น</b-form-text>
        <b-form-text text-variant="danger" class="m-0" v-if="check && (file1 == null ? true : false)"> กรุณาอัปโหลดรูปถ่ายเพื่อยื่นยัน</b-form-text>
      </b-form-group>
    </b-container>
    <div class="my-4"></div>
    <b-container>
      <b-img
        src="~/assets/images/show_id_card2_re.png"
        fluid-grow
        class=""
      ></b-img>
      <div class="my-4"></div>
      <b-form-group
        label="รูปภาพบัตรประชาชน/พาสปอร์ต:"
        label-cols-sm="4"
        label-size="sm"
        class="text-dark"
      >
        <b-form-file v-model="file2"  size="sm"></b-form-file>
        <b-form-text text-variant="primary" class="m-0">* ขนาดไม่เกิน 10MB ประเภท jpg, png, bmp, jpeg หรือ gif เท่านั้น</b-form-text>
        <b-form-text text-variant="danger" class="m-0" v-if="check && (file2 == null ? true : false)"> กรุณาอัปโหลดรูปถ่ายเพื่อยื่นยัน</b-form-text>
      </b-form-group>
    </b-container>
    <b-container>
      <b-form-group
        label="FATCA"
        label-cols-sm="4"
        label-size="sm"
        class="text-dark"
      >
        <b-form-text text-variant="dark" class="m-0">ตามข้อกำหนดในการปฏิบัติตามกฎหมายว่าด้วยภาษีบัญชีต่างประเทศ (FATCA)
          บริษัท wealthy-ex ต้องการให้คุณรองรับข้อมูลดังต่อไปนี้ (ข้อมูลเพิ่มเติม <a href="https://www.irs.gov">www.irs.gov</a>)</b-form-text>
      </b-form-group></b-container>
    <b-container>
      <b-form-group
        label="คุณเป็นพลเมืองของอเมริกาหรือไม่?"
        label-cols-sm="4"
        label-size="sm"
        class="text-dark"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          v-model="selected2"
          :options="options2"
          :aria-describedby="ariaDescribedby"
          size="sm"
        ></b-form-radio-group>
          <b-form-text text-variant="danger" class="m-0" v-if="check && (selected2 == null ? true : false)"> กรุณาเลือกใช่หรือไม่ใช่</b-form-text>
      </b-form-group>
    </b-container>
    <b-container>
      <b-form-group
        label="คุณเป็นผู้มีถิ่นที่อยู่ในอเมริกาเพื่อการเสียภาษีหรือไม่?"
        label-cols-sm="4"
        label-size="sm"
        class="text-dark"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          v-model="selected3"
          :options="options2"
          :aria-describedby="ariaDescribedby"
          size="sm"
        ></b-form-radio-group>
          <b-form-text text-variant="danger" class="m-0" v-if="check && (selected3 == null ? true : false)"> กรุณาเลือกใช่หรือไม่ใช่</b-form-text>
      </b-form-group>
    </b-container>
    <b-container>
      <b-form-group
        label="ข้อตกลงและเงื่อนไข"
        label-cols-sm="4"
        label-size="sm"
        class="text-dark"
      >
        <b-form-checkbox
          id="checkbox-1"
          v-model="condition"
          name="checkbox-1"
          value="Y"
          unchecked-value="N"
        >
          <b-form-text text-variant="primary" class="m-0">ฉันยอมรับ <a href="#"> ข้อกำหนดในการให้บริการ</a></b-form-text>
          <b-form-text text-variant="danger" class="m-0" v-if="check && (condition == 'N' ? true : false)">ฉันยังไม่ได้ยอมรับเงือนไข</b-form-text>
         </b-form-checkbox>
      </b-form-group>
    </b-container>
    <b-container fluid class="p-0 my-5">
      <b-row class="mb-4">
        <b-col class="">
          <b-button
            @click="backToStep3"
            variant="warning"
            size="sm"
            class="w-50"
            ><b-icon icon="arrow-bar-left" font-scale="1"></b-icon
            >ย้อนกลับ</b-button
          ></b-col
        >
        <b-col class="text-right">
          <b-button
            @click="confirmStep4"
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
        step: "step4",
      },
      form: {},
      selected2: null,
      selected3: null,
      options2: [
        { text: "ใช่", value: "Y" },
        { text: "ไม่ใช่", value: "N" },
      ],
      condition:"N",
      check: false
    }
  },
  computed:{
    isPassport(){
       const passport = this.id_card.length == 13 && this.code_card.length == 12 &&
                        this.file1 != null && this.file2 != null && this.condition == "Y" &&
                        this.selected2 != null && this.selected3 != null 
      return passport
    }
  },
  methods: {
    backToStep3(e) {
      e.preventDefault()
      this.$emit("back", this.status)
    },
    confirmStep4(e) {
      e.preventDefault()
      this.check = true
      if(this.isPassport){
      this.$emit("dataStep4", this.form)
      console.log("Profile step4 pass......!!!")
      }  else {
        console.log("Profile step4 wrong!!!")
      }
    },
  },
}
</script>