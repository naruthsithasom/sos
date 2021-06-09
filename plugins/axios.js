import Vue from "vue"
import VueToast from "vue-toast-notification"
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css"
Vue.use(VueToast)

export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    // if (error.response.status === 404) {
    //   Vue.$toast.open({
    //     message: "เกิดข้อผิดพลาด! error404",
    //     type: "error",
    //     position: "bottom-right",
    //     // all of other options may go here
    //   })
    // }
    // if (error.response.status == 500) {
    if (error) {
      let err = error.response
      Vue.$toast.open({
        message: `เกิดข้อผิดพลาด! ${JSON.stringify(err.data.message)}`,
        type: "error",
        position: "bottom-right",
      })
      //console.log("axios 500>>", error.response)
      //redirect('/register')
      //this.$router.push('/register')
    }
  })
}
