<template>
  <div>
    <FormRegister :getRegister="submitRegister"/>
  <!-- <Footer /> -->
  </div>
</template>
<script>
import FormRegister from "../components/FormRigster"
import Footer from "../components/Footer"
export default {
  components:{
    Footer,
    FormRegister
  },
  head:{
    title: 'หน้าลงทะเบียน'
},
methods:{
  async submitRegister(){
    const res = await this.$axios.$get("/api/register",{
      username: this.form.username,
      email: this.form.email,
      password: this.form.email.com

    })
    .then( (res) => {
      console.log('resgister>>'.res)
    })
  }

}
}
</script>