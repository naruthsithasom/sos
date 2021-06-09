<template>
  <div>
    <client-only>
        <!-- class="navbar navbar-expand-lg navbar-light bg-light nav-border-buttom p-0 "  -->
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white nav-border-buttom p-0" 
      >
        <div class="container-fluid toggle-bg p-nav">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse text-center" id="navbarTogglerDemo03">
            <span class="nav-menu-logo ">
              <img
                class="toggle-img logo-resize"
                src="~/assets/images/ten10_02.png"
              />
            </span>
            <span class="nav-menu-lg">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 toggle-nav-link">
                <li class="nav-item px-2">
                  <a class="nav-link toggle-text" aria-current="page" href="#"
                    ><p class="text-warning ">HOME</p></a
                  >
                </li>
                <li class="nav-item px-2">
                  <a
                    class="nav-link toggle-text"
                    aria-current="page"
                    href="/market"
                    ><p class="text-warning ">MARKETS</p></a
                  >
                </li>
                <li class="nav-item px-2">
                  <a
                    class="nav-link toggle-text"
                    aria-current="page"
                    href="/exchange"
                    ><p class="text-warning ">EXCHANGE</p></a
                  >
                </li>
                <li class="nav-item px-2">
                  <a
                    class="nav-link toggle-text"
                    aria-current="page"
                    href="/register"
                    ><p class="text-warning ">REGISTER</p></a
                  >
                </li>
                <li class="nav-item">
                  <a
                    v-b-modal.modal-center
                    class="nav-link toggle-text"
                    aria-current="page"
                   >
                    <!-- <b-avatar variant="primary" text="BV"></b-avatar> -->
                    <i class="fa fa-user cl-g" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </span>
          </div>

          <div>
            <b-modal id="modal-center" centered title="Login" @ok="handleOk">
              <div class="my-4">
                <b-container fluid>
                  <b-row class="my-1">
                    <b-col sm="2">
                      <label><small> USER</small></label>
                    </b-col>
                    <b-col sm="10">
                      <b-form-input
                        v-model="form.email"
                        size="sm"
                        placeholder=""
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="2">
                      <label><small>PASSWORD</small></label>
                    </b-col>
                    <b-col sm="10">
                      <b-form-input
                        v-model="form.password"
                        size="sm"
                        placeholder=""
                        type="password"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="2"></b-col>
                    <b-col sm="5">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="readme"
                        value="yes"
                        unchecked-value="not_accepted"
                      >
                        Remember ME
                      </b-form-checkbox>
                    </b-col>
                    <b-col sm="5" class="text-right"
                      ><a href="#">Forget password?</a></b-col
                    >
                  </b-row>
                </b-container>
              </div>
            </b-modal>
          </div>
        </div>
      </nav>
    </client-only>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      form: {
        email:"",
         password: "",
      },
        readme: "no",
    }
  },
 
  methods: {
    async handleOk() {
      //const data = {...this.form}
      //console.log("Login>>", JSON.stringify(data))
   /*
   try {
        const res = await this.$auth.loginWith('local',{
          data: {
            //pipat.pimnont@gmail.com
            email: data.email,
            password: data.password
          }
      })
    
      if(res.status == 200){
   
        this.$toast.open({ message: `คุณ ${data.email} เข้าสู่ระบบ`, type: "success", position: "bottom-right", className: "textWhite",})
        localStorage.setItem('token',res.data.access_token)
        localStorage.setItem('user',JSON.stringify(res.data.user))
         setTimeout(() => {this.$router.push("/")}, 3000)
      }
      } catch (error){
        console.error('Error is  : ', error)
       //this.$toast.open({ message: `คุณ ${data.email} ไม่สามารถเข้าสู่ระบบ`, type: "error", position: "bottom-right", className: "textWhite",})
         setTimeout(() => {this.$router.push("/")}, 3000)
      }
      */
     this.$emit('EmitLogin',this.form)
    },
  },
}
</script>
<style>
.logo-resize {
  width: 100px;
}
.bg-head{
  background-color: #18343a !important;
}
</style>
