<template>
  <b-container cols="12">
    <div class="d-flex justify-content-between mb-5">
    <h4 >Confirm Profile</h4>
    <span class="text-primary">บัญชีผู้ใช้ : {{User.username}}</span>
    </div>
    <div class="d-flex justify-content-around">
      <b-icon icon="person-fill" font-scale="2"></b-icon>
      <b-icon icon="file-richtext" font-scale="2"></b-icon>
      <b-icon icon="house-door" font-scale="2"></b-icon>
      <b-icon icon="camera" font-scale="2"></b-icon>
      <b-icon icon="file-earmark-person" font-scale="2"></b-icon>
    </div>
    <b-input-group prepend="สัญชาติ" size="sm" class="mt-5">
      <b-form-select
        v-model="national"
        :options="options"
        size="sm"
        class=""
      ></b-form-select>
    </b-input-group>
    <b-form-text text-variant="danger" v-if=" check && (national == null)"> กรุณาเลือกสัญชาติ </b-form-text>
    <b-container fluid class="p-0 my-5">
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
  props:{
    prposUser: Object,
  },
  data() {
    return {
      selected: null,
      options: [
         { value: "thai", text: "ไทย" },
        { value: "foreigner", text: "Foreigner" },
      ],
        national: null,
        check: false,
        User:{}
    }
  },
  mounted(){
    this.User = this.prposUser
    console.log('User step1',this.User)
    return this.User
  },
  computed:{
    isPassport(){
      return this.national != null
    }
  },
  methods: {
    confirmStep1(e) {
      e.preventDefault()
      this.check = true
      if(this.isPassport){
        this.$emit("EmitdataStep1",this.national)
      } else {
        console.log("Profile step 1 wrong!!")
      }
    },
  },
}
</script>