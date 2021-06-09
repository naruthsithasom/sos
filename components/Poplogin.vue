<template>
  <div
    class="modal fade"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content boxlogin">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="exampleModalLongTitle">
            LOGIN
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
          <div class="form-group row">
            <label
              for="staticEmail"
              class="col-3 col-sm-3 col-form-label text-white h5 text-right pr-xl-0"
              >USER
            </label>
            <div class="col-7">
              <input
                v-model.trim="form.email"
                type="text"
                class="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div class="form-group row">
            <label
              for="inputPassword"
              class="col-3 col-sm-3 col-form-label text-white h5 text-right pr-xl-0"
              >PASSWORD
            </label>
            <div class="col-7">
              <input
                v-model.trim="form.password"
                type="password"
                class="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div class="container clearfix">
            <div class="row">
              <div class="col-7">
                <div class="text-right">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label
                      class="form-check-label text-black"
                      for="defaultCheck1"
                    >
                      Remember ME
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-5">
                <div class="text-right">
                  <a href="#" class="text-white"
                    ><small>Forget password?</small></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button @click="confirmLogin" type="button" class="btn btn-login" data-dismiss="modal">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form:{
        email: "",
        password: "",
      },
    }
  },
  methods: {
    async confirmLogin() {
      console.log('popup Login>>',this.form)
      try {
        const res = await this.$auth.loginWith("local", {
          data: { 
            email: this.form.email,
            password: this.form.password
           },
        })
        console.log("res : ", res)
      } catch (error) {
        console.error("Error is  : ", error)
      }
    },
  },
}
</script>