<template>
  <div>
    <client-only>
      <b-container fluid>
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
                  label="ที่อยู่อีเมล์:"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input class="border border-1"></b-form-input>
                </b-form-group>

                <b-form-group
                  label="รหัสผ่าน:"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input class="border border-1"></b-form-input>
                </b-form-group>

                <b-form-group
                  label="ยื่นยันรหัสผ่าน:"
                  label-cols-sm="4"
                  label-align-sm="right"
                >
                  <b-form-input class="border border-1"></b-form-input>
                  <div class="text-center mt-4">
                    <b-button class="btn w-100" variant="outline-warning"
                      >สมัครสมาชิก</b-button
                    >
                  </div>
                </b-form-group>
              </b-form-group>
            </b-card>
          </b-col>
          <b-col lg="3" md="3" sm="12" class=""></b-col>
        </b-row>
      </b-container>
    </client-only>
  </div>
</template>