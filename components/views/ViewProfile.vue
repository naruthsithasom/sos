<template>
  <div style="height: 100vh">
    <client-only>
      <b-container fluid>
        <b-row>
          <b-col sm="12" md="3" lg="3"> </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-row class="mt-4">
              <b-col sm="12" lg="12">
                <b-tabs content-class="pt-5">
                  <b-tab title="ข้อมูลส่วนตัว" active>
                    <b-container cols="12">
                      <h4>ยืนยันตัวตน</h4>
                      <div class="d-flex justify-content-around">
                        <b-icon icon="person-fill" font-scale="2"></b-icon>
                        <b-icon icon="file-richtext" font-scale="2"></b-icon>
                        <b-icon icon="house-door" font-scale="2"></b-icon>
                        <b-icon icon="camera" font-scale="2"></b-icon>
                      </div>
                      <b-input-group prepend="สัญชาติ" size="sm" class="my-5">
                        <b-form-select
                          v-model="selected"
                          :options="options"
                          size="sm"
                          class=""
                        ></b-form-select>
                      </b-input-group>
                      <b-container fluid class="p-0">
                        <b-row class="mb-4">
                          <b-col class="">
                            <b-button variant="warning" size="sm" class="w-50"
                              ><b-icon
                                icon="arrow-bar-left"
                                font-scale="1"
                              ></b-icon
                              >ย้อนกลับ</b-button
                            ></b-col
                          >
                          <b-col class="text-right">
                            <b-button variant="warning" size="sm" class="w-50"
                              >ถัดไป<b-icon
                                icon="arrow-bar-right"
                                font-scale="1"
                              ></b-icon></b-button
                          ></b-col>
                        </b-row>
                      </b-container>
                    </b-container>
                  </b-tab>
                  <b-tab title="เปลี่ยนรหัสผ่าน"
                    ><p>I'm the second tab</p></b-tab
                  >
                  <b-tab title="บัญชีธนาคาร"><p>I'm the second tab</p></b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </b-col>
          <b-col sm="12" md="3" lg="3"> </b-col>
        </b-row>
      </b-container>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "ไทย" },
        { value: "a", text: "Foreigner" },
      ],
    }
  },
}
</script>