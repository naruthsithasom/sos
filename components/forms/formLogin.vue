<template>
  <div>
    <client-only>
      <b-container fluid v-show="showLogin">
        <b-row class="">
          <b-col lg="3" md="3" sm="12" class=""></b-col>
          <b-col lg="6" md="6" sm="12" class="bg-light">
            <b-card bg-variant="light">
              <b-form-group
                label-cols-lg="1"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-group
                  label="อีเมล์:"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input
                    v-model="form.email"
                    class="border border-1"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="รหัสผ่าน:"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input
                    v-model="form.password"
                    class="border border-1"
                    type="password"
                  ></b-form-input>
                  <div class="text-center mt-3">
                    <b-button
                      @click="handleLogin"
                      :disabled="!isPasswordMatching"
                      class="btn w-100"
                      variant="outline-warning"
                      >Login</b-button
                    >
                  </div>
                </b-form-group>
              </b-form-group>
            </b-card>
          </b-col>
          <b-col lg="3" md="3" sm="12" class=""></b-col>
        </b-row>
      </b-container>
      <b-container>
        <div class="text-center" v-show="isProcess">
          <b-spinner
            variant="warning"
            label="Spinning"
            style="width: 5rem; height: 5rem"
          ></b-spinner>
        </div>
      </b-container>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLogin: true,
      isProcess: false,
      form: {
        email: "",
        password: "",
      },
    }
  },
  computed: {
    isClickCheckBox() {
      return this.statusCheckBox === "yes"
      //console.log(asdasdasd)
    },
    isPasswordMatching() {
      return true
    },
  },
  methods: {
    handleLogin() {
      this.showLogin = false
      this.isProcess = true
      console.log("test handleok", JSON.stringify(this.form))
      this.$bvToast.toast("Toast body content", {
        title: `ยินดีต้อนรับคุณ  ${this.form.email} `,
        variant: "success",
        solid: true,
      })
      setTimeout(() => {
        this.$router.push("/")
      }, 6000)
    },
  },
}
</script>