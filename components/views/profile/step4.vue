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
    <b-input-group prepend="เลขบัตรประจำตัวประชาชน" size="sm" class="my-5">
      <b-input
        v-model="id_card"
        size="sm"
        class="border border-1"
        type="tel"
        maxlength="13"
      ></b-input>
    </b-input-group>
    <b-input-group prepend="เลเซอร์โค้ด * " size="sm" class="mt-5 mb-2">
      <b-input
        v-model="code_card"
        size="sm"
        class="border border-1"
        type="tel"
        maxlength="13"
      ></b-input>
    </b-input-group>
    <b-input-group class="mb-5">
      <small
        >* หลักที่ 1-2 ต้องเป็นตัวหนังสือและ หลักที่ 3-12 ต้องเป็นตัวเลข</small
      >
    </b-input-group>

    <b-input-group>
      <b-form-checkbox-group
        v-model="checkList"
        :options="options1"
        class="mb-3"
        value-field="item"
        text-field="name"
        size="sm"
        stacked
      ></b-form-checkbox-group>
    </b-input-group>

    <b-container>
      <b-img
        src="~/assets/images/show_id_card.png"
        class="my-5"
        fluid-grow
      ></b-img
      ><br />
      <b-form-group
        label="รูปภาพสำหรับการยืนยัน (ตัวอย่าง?):"
        label-cols-sm="4"
        label-size="sm"
        variants="primary"
      >
        <b-form-file v-model="file1" id="file-small" size="sm"></b-form-file>
        <small
          >*ขนาดไม่เกิน 10MB ประเภท jpg, png, bmp, jpeg หรือ gif เท่านั้น</small
        >
      </b-form-group>
    </b-container>

    <b-container>
      <b-img
        src="~/assets/images/show_id_card2_re.png"
        fluid-grow
        class="my-5"
      ></b-img>
      <b-form-group
        label="รูปภาพบัตรประชาชน/พาสปอร์ต:"
        label-cols-sm="4"
        label-size="sm"
        variants="primary"
      >
        <b-form-file v-model="file2" id="file-small" size="sm"></b-form-file>
        <small
          >*ขนาดไม่เกิน 10MB ประเภท jpg, png, bmp, jpeg หรือ gif เท่านั้น</small
        >
      </b-form-group>
    </b-container>
    <b-container>
      <b-form-group
        label="FATCA"
        label-cols-sm="4"
        label-size="sm"
        variants="primary"
      >
        <small class="text-dark"
          >ตามข้อกำหนดในการปฏิบัติตามกฎหมายว่าด้วยภาษีบัญชีต่างประเทศ (FATCA)
          บริษัทสตางค์ต้องการให้คุณรองรับข้อมูลดังต่อไปนี้ (ข้อมูลเพิ่มเติม
          <a href="https://www.irs.gov">www.irs.gov</a>)</small
        >
      </b-form-group></b-container
    >
    <b-container>
      <b-form-group
        label="คุณเป็นพลเมืองของอเมริกาหรือไม่?"
        label-cols-sm="4"
        label-size="sm"
        variants="primary"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          v-model="selected2"
          :options="options2"
          :aria-describedby="ariaDescribedby"
          size="sm"
        ></b-form-radio-group>
      </b-form-group>
    </b-container>
    <b-container>
      <b-form-group
        label="คุณเป็นผู้มีถิ่นที่อยู่ในอเมริกาเพื่อการเสียภาษีหรือไม่?"
        label-cols-sm="4"
        label-size="sm"
        variants="primary"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          v-model="selected3"
          :options="options2"
          :aria-describedby="ariaDescribedby"
          size="sm"
        ></b-form-radio-group>
      </b-form-group>
    </b-container>
    <b-container>
      <b-form-group
        label="ข้อตกลงและเงื่อนไข"
        label-cols-sm="4"
        label-size="sm"
        variants="primary"
      >
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <small>ฉันยอมรับ <a href="#"> ข้อกำหนดในการให้บริการ</a></small>
        </b-form-checkbox>
      </b-form-group>
    </b-container>
    <b-container fluid class="p-0 mt-5">
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
    }
  },
  methods: {
    backToStep3(e) {
      e.preventDefault()
      this.$emit("back", this.status)
    },
    confirmStep4(e) {
      e.preventDefault()
      this.$emit("dataStep4", this.form)
    },
  },
}
</script>