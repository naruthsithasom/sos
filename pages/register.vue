<template>
  <div>
    <client-only>
      <NavbarChild />
      <div class="py-5"></div>
      <FromRegisterNew />
      <!-- <section class="">
        <div class="">
          <div class="register-text-head">
            <div class="row mx-0">
              <div class="col-lg-4"></div>
              <div class="col-lg-8">REGISTER</div>
            </div>
          </div>
          <div class="register-form">
            <div class="row mx-0 pb-4 register-inline">
              <div class="col-lg-4 text-right">USER</div>
              <div class="col-lg-8">
                <input v-model="form.username" class="form-control" type="text" placeholder="" />
              </div>
            </div>
            <div class="row mx-0 pb-4 register-inline">
              <div class="col-lg-4 text-right">PASSWORD</div>
              <div class="col-lg-8">
                <input v-model="form.password" class="form-control" type="password" placeholder="" />
              </div>
            </div>
            <div class="row mx-0 pb-4 register-inline">
              <div class="col-lg-4 text-right">EMAIL</div>
              <div class="col-lg-8">
                <input v-model="form.email" class="form-control" type="email" placeholder="" />
              </div>
            </div>
            <div class="row mx-0 pb-4 register-inline">
              <div class="col-lg-4 text-right">Email Verification Code</div>
              <div class="col-lg-6">
                <input v-model="form.code" class="form-control" type="text" placeholder="" />
              </div>
              <div class="col-lg-2">
                <button @click="sendCodeEmail" type="button" class="btn btn-light w-100">Send</button>
              </div>
            </div>
            <div class="row mx-0 pb-4 register-inline">
              <div class="col-lg-4  "></div>
              <div class="col-lg-8">
                <div class="form-check form-check-inline">
                  <input
                  v-model="form.check"
                     class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="yes"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                  />
                  <label class="form-check-label" for="inlineCheckbox1"
                    >I agree TheTerms and Policy</label
                  >
                </div>
              </div>
            </div>
            <div class="row mx-0 pb-4 register-inline">
              <div class="col-12 col-lg-4 col-md-4"></div>
              <div class="col-12 col-lg-4 col-md-4">
                <button @click="submitRegister" type="button" class="btn btn-light w-100">
                  Register
                </button>
              </div>
              <div class="col-12 col-lg-4 col-md-4"></div>
            </div>
          </div>
           <div
            class="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Aenean lacinia bibendum nulla sed consectetur.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla
                  non metus auctor fringilla. Cras mattis consectetur purus sit
                  amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                  augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
                  bibendum nulla sed consectetur. Praesent commodo cursus magna,
                  vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                  ullamcorper nulla non metus auctor fringilla. Cras mattis
                  consectetur purus sit amet fermentum. Cras justo odio, dapibus
                  ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean
                  lacinia bibendum nulla sed consectetur. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Donec sed
                  odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Aenean lacinia bibendum nulla sed consectetur.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla
                  non metus auctor fringilla. Cras mattis consectetur purus sit
                  amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                  augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
                  bibendum nulla sed consectetur. Praesent commodo cursus magna,
                  vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                  ullamcorper nulla non metus auctor fringilla. Cras mattis
                  consectetur purus sit amet fermentum. Cras justo odio, dapibus
                  ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean
                  lacinia bibendum nulla sed consectetur. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Donec sed
                  odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary"  data-dismiss="modal">
                    OK
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <div class="py-5"></div>
    </client-only>
  </div>
</template>
<script>
import NavbarChild from "../components/navbars/navbarChild"
import FromRegisterNew from "../components/forms/formRegisterNew"
export default {
  components: {
    NavbarChild,
    FromRegisterNew,
  },
  head: {
    title: "หน้าลงทะเบียน",
  },
  data(){
    return{
      form:{
        username: "",
        password: "",
        email: "",
        code: "",
        check : "",
      }
    }
  },
  methods: {
     submitRegister() {
      // const res = await this.$axios
      //   .$get("/api/register", {
      //     username: this.form.username,
      //     email: this.form.email,
      //     password: this.form.email.com,
      //   })
      //   .then((res) => {
      //     console.log("resgister>>".res)
      //   })
      console.log("Register>>",JSON.stringify(this.form))
    },
    sendCodeEmail(){

    }
  },
}
</script>