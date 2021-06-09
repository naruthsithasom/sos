<template>
  <div v-if="Display">
    <client-only>
      <NavbarChild />
      <div style="height: 100vh">
           <b-container fluid>
            <b-row class="mt-4">
              <b-col sm="12" lg="12">
                <b-tabs content-class="pt-5  ">
                  <b-tab title="ข้อมูลส่วนตัว" class="border-0" active> 
                    <!-- <div class="ml-5 mb-5 text-primary"><h3>บัญชีผู้ใช้ {{User.username}}</h3></div> -->
                    <Step1 v-if="showStep1" 
                    @EmitdataStep1="ConfirmStep1"  
                    :prposUser="User"/>
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
                  <b-tab title="เปลี่ยนรหัสผ่าน" class="border-0">
                    <EditPasswordStep1 />
                  </b-tab>
                  <b-tab title="บัญชีธนาคาร" class="border-0">
                    <AccountBank />
                  </b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </b-container>
           <div class="my-5 py-5"></div>
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
import EditPasswordStep1 from "../components/views/profile/editPassword/editPwdStep1"
import AccountBank from "../components/views/profile/accountBank/account"
export default {
 //middleware: "auth",
  components: {
    NavbarChild,
    ViewProfile,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    EditPasswordStep1,
    AccountBank,
  },
  data() {
    return {
      Display: false,
      showStep1: true,
      showStep2: false,
      showStep3: false,
      showStep4: false,
      showStep5: false,
      form: {},
      auth: {},
      User:{}
    }
  },
  async created(){
  
  },
  mounted(){
   // console.log('user auth',this.$auth)
    // this.auth = {...this.$auth}
  this.getData()
  },
  methods: {
    async getData(){
       //pipat.pimnont@gmail.com
        let token = localStorage.getItem('access_token') 
        console.log('access_token:',token)
         //  let res = await this.$axios.post('https://mike.orangeworkshop.info/temsib/api/v1/auth/user/profile',{
         //    headers: {'Authorization':`Bearer ${token} `}
         //  })
       let res = await this.$axios.post('https://mike.orangeworkshop.info/temsib/api/v1/auth/user/profile')

        if(res.data.status.code == 403){
          this.$router.push('/')
          console.log('Auth>>',res.data.status.code)

        } else {
          this.Display = true

          this.User = {...res.data}
          console.log('Auth>>',this.User)
        }
    },
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
    async ConfirmStep1(data) {
      const step = "1"
      this.form.national = data
      console.log("Profile step1>>", data)
      await this.$axios.$post('https://mike.orangeworkshop.info/temsib/api/v1/auth/user/profile/step1',{
        national: data
      }).then( res => {
        this.next(step)
        console.log('step1',res)
      }).catch((error) => console.log('profile/step1 feild!!>>',error))
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
<style scoped>
.bg-head{
  background-color: #18343a !important;
}
</style>
