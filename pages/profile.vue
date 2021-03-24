<template>
  <div>
    <client-only>
      <NavbarChild />
      <div style="height: 100vh">
        <client-only>
          <b-container fluid>
            <b-row>
              <b-col sm="12" md="2" lg="2"> </b-col>
              <b-col sm="12" md="8" lg="8">
                <b-row class="mt-4">
                  <b-col sm="12" lg="12">
                    <b-tabs content-class="pt-5  ">
                      <b-tab title="ข้อมูลส่วนตัว" class="border-0" active>
                        <Step1 v-if="showStep1" @dataStep1="ConfirmStep1" />
                        <Step2
                          v-if="showStep2"
                          @back="before"
                          @dataStep2="ConfirmStep2"
                        />
                        <Step3
                          v-if="showStep3"
                          @back="before"
                          @dataStep3="ConfirmStep3"
                        />
                        <Step4
                          v-if="showStep4"
                          @back="before"
                          @dataStep4="ConfirmStep4"
                        />
                        <Step5
                          v-if="showStep5"
                          @back="before"
                          @dataStep5="ConfirmStep5"
                        />
                      </b-tab>
                      <b-tab title="เปลี่ยนรหัสผ่าน"
                        ><p>Change password</p></b-tab
                      >
                      <b-tab title="บัญชีธนาคาร"
                        ><p>Account Bank</p></b-tab
                      >
                    </b-tabs>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="12" md="2" lg="2"> </b-col>
            </b-row>
          </b-container>
          <div class="my-5 py-5"></div>
        </client-only>
      </div>
    </client-only>
  </div>
</template>
<script>
import ViewProfile from "../components/views/ViewProfile"
import NavbarChild from "../components/navbars/navbarChild"
import Step1 from "../components/views/profile/step1"
import Step2 from "../components/views/profile/step2"
import Step3 from "../components/views/profile/step3"
import Step4 from "../components/views/profile/step4"
import Step5 from "../components/views/profile/step5"
export default {
  components: {
    NavbarChild,
    ViewProfile,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
  },
  data() {
    return {
      showStep1: false,
      showStep2: false,
      showStep3: false,
      showStep4: true,
      showStep5: false,
      form:{},
    }
  },
  methods: {
    before(status) {
      if (status.step === "step2") {
        this.showStep1 = true
        this.showStep2 = false
        console.log("Back to step1")
      }
      if (status.step === "step3") {
        this.showStep2 = true
        this.showStep3 = false
        console.log("Back to step2")
      }
      if (status.step === "step4") {
        this.showStep3 = true
        this.showStep4 = false
        console.log("Back to step3")
      }
      if (status.step === "step5") {
        this.showStep4 = true
        this.showStep5 = false
        console.log("Back to step4")
      }
    },
    next(step) {
      if (step === "1") {
        this.showStep2 = true
        this.showStep1 = false
      }
      if (step === "2") {
        this.showStep3 = true
        this.showStep2 = false
      }
      if (step === "3") {
        this.showStep4 = true
        this.showStep3 = false
      }
      if (step === "4") {
        this.showStep5 = true
        this.showStep4 = false
      }
      if (step === "5") {
        this.$bvModal.msgBoxConfirm("ยืนยันการสมัครสมาชิก").then((value) => {
          if (value) {
            console.log("Profile Done!!!!................")
          } else {
            console.log("cancel!!!!")
          }
          this.showStep1 = false
          this.showStep2 = false
          this.showStep3 = false
          this.showStep4 = false
        })
      }
    },
    ConfirmStep1(data) {
      const step = "1"
      this.next(step)
      this.form.national = data
      console.log("Profile step1>>", JSON.stringify(this.form))
    },
    ConfirmStep2(data) {
      const step = "2"
      this.next(step)
      console.log("Profile step2>>", data)
    },
    ConfirmStep3(data) {
      const step = "3"
      this.next(step)
      console.log("Profile Step3>>", data)
    },
    ConfirmStep4(data) {
      const step = "4"
      this.next(step)
      console.log("Profile Step4>>", JSON.stringify(data))
    },
    ConfirmStep5(data) {
      const step = "5"
      this.next(step)
      console.log("Profile Step5", JSON.stringify(data))
    },
  },
}
</script>