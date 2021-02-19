<template>
  <div>
    <Navbarlogin />
    <div style="padding-top: 30px"></div>
    <div class="head">
      <h2>REGISTER</h2>
    </div>
    <div style="padding-top: 40px"></div>
    <div class="container space">
      <div class="row">
        <div class="col-12">
          <div class="boxregis">
            <div class="register-modal-form">
              <form action="" method="post">
                <div class="form-group row">
                  <label
                    for="staticEmail"
                    class="col-3 col-sm-3 col-form-label text-white h5 text-right pr-xl-0"
                    >USER
                  </label>
                  <div class="col-7">
                    <input
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
                      type="password"
                      class="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-3 col-sm-3 col-form-label text-white h5 text-right pr-xl-0"
                    >Email
                  </label>
                  <div class="col-7">
                    <div class="input-group mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-4 col-sm-3 col-form-label text-white h5 text-right pr-xl-0"
                    >Email Verification Code
                  </label>
                  <div class="col-7">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Example text with button addon"
                        />
                        <button class="btn btn-verifi" type="submit">
                          send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-1 col-sm-3 col-form-label"
                  ></label>
                  <div class="col-11 col-sm-9">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        class="form-check-label text-black h6"
                        for="defaultCheck1"
                      >
                        I agree The<a href="#" class="text-white"
                          >Terms and Policy</a
                        >
                      </label>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button class="btn btn-login" type="submit">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-bottom: 80px"></div>
  <Footer />
  </div>
</template>
<script>
import Navbarlogin from "@/components/Navbarlogin"
import Footer from "@/components/Footer"
export default {
  components:{
    Navbarlogin,
    Footer
  },
  head:{
    title: 'หน้าลงทะเบียน'
}
}
</script>