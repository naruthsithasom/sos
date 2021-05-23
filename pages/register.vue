<template>
  <div>
    <client-only>
      <NavbarChild />
      <div class="py-5"></div>
      <Step1 
      v-if="showStep1" 
      :propsIsAdvice="propsIsAdvice"
      :propsIsConfirm="propsIsConfirm"
      :propsIndeterminate="propsIndeterminate"
      :propsQueryAdvice="propsQueryAdvice"
      @dataStep1="ConfirmStep1" 
      @advie="checkAdvice"
      />
        <!-- :propEmail="propEmail"
        :propUsername="propUsername" -->
      <Step2
        v-if="showStep2"
        @dataStep2="ConfrimStep2"
        @back="before"
      />
      <div class="py-5"></div>
    </client-only>
  </div>
</template>
<script>
import NavbarChild from "../components/navbars/navbarChild"
import FromRegisterNew from "../components/forms/formRegisterNew"
import Step1 from "../components/views/register/RegisterStep1"
import Step2 from "../components/views/register/RegisterStep2"
export default {
  components: {
    NavbarChild,
    FromRegisterNew,
    Step1,
    Step2,
  },
  head: {
    title: "หน้าลงทะเบียน",
  },
  data() {
    return {
      showStep1: true,
      showStep2: false,
      form: {},
      propEmail: null,
      propsIsAdvice: false,
      propsIsConfirm: false,
      propsIndeterminate: false,
      propsQueryAdvice: '',
    }
  },
  mounted(){
    let data = ''
    console.log('query params:>>',this.$route.query.advice)
    data = this.$route.query.advice
    if(data){this.queryRecommed(data)}
  },
  methods: {
    next(step) {
      if (step === "1") {
        this.showStep1 = false
        this.showStep2 = true
      }
    },
    before(data) {
      console.log("Back>>", data)
      if (data === 1) {
        this.showStep1 = true
        this.showStep2 = false
      }
    },
    async queryRecommed(data){
      await this.$axios
          .$post(
            'http://sosapi.mike.orangeworkshop.info/api/register',{
                advice: data,
                checkadvice: 'check'
              }
          )
          .then((res) => {
            if(res.status === 'Success'){
            this.propsIsAdvice = true
            this.propsIsConfirm = true
            this.propsIndeterminate = true
            this.propsQueryAdvice = data
            console.log("res>>", res)
            }            
          })
          .catch((error) => {
            this.propsIsAdvice = false
            this.propsIsConfirm = false
              console.log("error>>", error)
          })
    },
    async checkAdvice(data){
      console.log('check advice>>',data)
        await this.$axios
          .$post(
            'https://sosapi.mike.orangeworkshop.info/api/register',{
                advice: data,
                checkadvice: 'check'
              }
          )
          .then((res) => {
            if(res.status === 'Success'){
            this.propsIsAdvice = true
            this.propsIsConfirm = true
            this.$toast.open({
              message: `คุณ ${data} เป็นชื่อบัญชีผู้แนะนำ  `,
              type: "success",
              position: "bottom-right",
              className: "textWhite",
          })
            console.log("res>>", res)
            }            
          })
          .catch((error) => {
            this.propsIsAdvice = false
            this.propsIsConfirm = false
              console.log("error>>", error)
          })
    },
    ConfirmStep1(data) {
      /*
      const step = "1"
      this.next(step)
      this.propEmail = data.email
      this.propUsername = data.username
      */
      // this.form = Object.assign({}, data)
      this.form = {...data}
      console.log("Register step1>>", data)
      this.$axios
        .$post(
          "https://sosapi.mike.orangeworkshop.info/api/register",
  
          {
            username: data.username,
            password: data.password,
            email: data.email,
            advice : data.advice
          }
        )
        .then((res) => {
          if (res) {
            const step = "1"
            this.next(step)
            console.log(" Register Done....")
            
            this.$toast.open({
              message: `คุณ ${data.username} ได้สมาชิกกับ tensib เรียบร้อยแล้วค่ะ`,
              type: "success",
              position: "bottom-right",
              className: "textWhite",
          })
            // this.$bvModal
            //   .msgBoxOk("คุณได้สมัครสมาชิกเรียบร้อยแล้ว")
            //   .then((value) => {
            //     if (value) {
            //       setTimeout(() => {
            //         this.$router.push("/login")
            //         //console.log("Res>>", res)
            //       }, 2000)
            //     }
            //   })
          }
        })
        .catch((error) => {
          console.log(">>>", error)
          // this.$toast.open({
          //   message: `เกิดข้อผิดพลาด เนื่องจากมีบัญชีชื่อ ${this.form.username} ในระบบแล้ว`,
          //   type: "error",
          //   position: "bottom-right",
          //   className: "textWhite",
          // })
        })
    },
    // async ConfrimStep2(data) {
    //   console.log("register step2", JSON.stringify(this.form))
    //   await this.$axios
    //     .$post(
    //       "https://sosapi.mike.orangeworkshop.info/api/register",
    //       //   this.form
    //       {
    //         username: this.form.username,
    //         email: this.form.email,
    //         password: this.form.password,
    //         advice_username: this.form["advice_username"],
    //       }
    //     )
    //     .then((res) => {
    //       if (res) {
    //         console.log("register step2>>", res)
    //         console.log(" Register Done....")
    //         this.$bvModal
    //           .msgBoxOk("คุณได้สมัครสมาชิกเรียบร้อยแล้ว")
    //           .then((value) => {
    //             if (value) {
    //               setTimeout(() => {
    //                 this.$router.push("/login")
    //                 console.log("Res>>", res)
    //               }, 2000)
    //             }
    //           })
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(">>>", error)
    //       this.$toast.open({
    //         message: `เกิดข้อผิดพลาด เนื่องจากมีบัญชีชื่อ ${this.form.username} ในระบบแล้ว`,
    //         type: "error",
    //         position: "bottom-right",
    //         className: "textWhite",
    //       })
    //     })
    // },
  },
}
</script>
<style></style>
