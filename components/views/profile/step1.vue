<template>
  <b-container cols="12">
    <h4>ยืนยันตัวตน</h4>
    <div class="d-flex justify-content-around">
      <b-icon icon="person-fill" font-scale="2"></b-icon>
      <b-icon icon="file-richtext" font-scale="2"></b-icon>
      <b-icon icon="house-door" font-scale="2"></b-icon>
      <b-icon icon="camera" font-scale="2"></b-icon>
      <b-icon icon="file-earmark-person" font-scale="2"></b-icon>
    </div>
    <b-input-group prepend="สัญชาติ" size="sm" class="my-5">
      <b-form-select
        v-model="form.national"
        :options="options"
        size="sm"
        class=""
      ></b-form-select>
    </b-input-group>
    <b-container fluid class="p-0">
      <b-row class="mb-4">
        <b-col class=""></b-col>
        <b-col class="text-right">
          <b-button
            @click="confirmStep1"
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
      options: [
        { value: null, text: "เลือก..."},
        { value: "thai", text: "ไทย" },
        { value: "foreigner", text: "Foreigner" },
      ],
      form: {
        national: null,
      },
    }
  },
  methods: {
    confirmStep1(e) {
      e.preventDefault()
      this.$emit("dataStep1", this.form)
    },
  },
}
</script>