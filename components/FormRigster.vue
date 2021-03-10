<template>
  <div>
    <div style="padding-top: 30px"></div>
    <b-container classs="container">
      <b-row>
        <b-col class="text-center"
          ><h2 class="text-warning">Register</h2></b-col
        >
      </b-row>
    </b-container>
    <b-container class="container">
      <b-card class="wrap-register">
        <b-form-group
          label="USER:"
          label-for="nested-user"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            v-model="form.username"
            :state="isValid"
            id="feedback-user"
            class="w-100"
          ></b-form-input>
          <!-- <b-form-invalid-feedback :state="isValid">
            Your user ID must be 5-12 characters long.
          </b-form-invalid-feedback> -->
        </b-form-group>

        <b-form-group
          label="PASSWORD:"
          label-for="nested-password"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            v-model="form.password"
            :state="isValid"
            type="password"
            id="nested-password"
            class="w-100"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="EMAIL:"
          label-for="nested-email"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            v-model="form.email"
            :state="isValid"
            id="nested-email"
            class="w-100"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Email Verification Code:"
          label-for="nested-code"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-row>
            <b-col sm="9" class="my-2">
              <b-form-input
                v-model="form.code"
                :state="isValid"
                id="nested-code"
                class="w-100"
              ></b-form-input>
            </b-col>
            <b-col sm="3" class="my-2">
              <b-button class="w-100 btnSend">Send</b-button>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group>
          <b-row class="mb-2">
            <b-col class="text-center">
              <b-form-checkbox
                id="checkbox-1"
                v-model="form.status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
                :disabled="!isValid"
                v-b-modal.modal-tall
              >
                I agree <a href="#" class="cb">TheTerms and Policy</a>
              </b-form-checkbox>
            </b-col>
          </b-row>
          <b-row class="my-4 d-flex justify-content-center">
            <b-col sm="3">
              <b-button
                class="btnRegister w-100"
                @click="submitRegister"
                :disabled="!isValidSubmit"
                >Register</b-button
              >
            </b-col>
          </b-row>
        </b-form-group>
      </b-card>
    </b-container>
    <b-container>
      <div>
        <b-modal id="modal-tall" title="Overflowing Content" v-if="isValid">
          <p class="my-4" v-for="i in 20" :key="i">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </b-modal>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isUnlock: true,
      form: {
        username: "",
        email: "",
        password: "",
        code: "",

        status: "not_accepted",
      },
    }
  },
  computed: {
    isValid() {
      return (
        this.form.username != "" &&
        this.form.username.length > 4 &&
        this.form.password != "" &&
        this.form.email != "" &&
        this.form.code != ""
      )
    },
    isValidSubmit() {
      return this.isValid && this.form.status == "accepted"
    },
  },
  methods: {
    submitRegister() {
      this.$emit("getRegister", this.form)
      console.log(this.form)
    },
  },
}
</script>
<style scoped>
.wrap-register {
  color: white;
  background: rgb(255, 193, 7);
  background: radial-gradient(
    circle,
    rgba(255, 193, 7, 1) 0%,
    rgba(219, 163, 0, 1) 100%
  );

  padding-top: 40px;
  border: 1px solid #b88a00;
  border-radius: 20px;
}
.cb:hover,
.cb:active,
.cb:link {
  text-decoration: none;
}
.btnSend {
  color: #ffc107;
  border: 1px solid #ffc107;
  border-radius: 10px;
  background: white;
}
.btnSend:hover {
  color: black;
}
.btnRegister {
  color: #ffc107;
  border: 1px solid #ffc107;
  border-radius: 10px;
  background: white;
}
.btnRegister:hover {
  color: black;
}
</style>