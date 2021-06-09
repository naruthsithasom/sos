<template>
  <div>
    <client-only>
      <b-container fluid>
        <b-row class="pt-4">
          <b-col lg="3" md="3" sm="12"></b-col>
          <b-col lg="6" md="6" sm="12" class="bg-light pb-4 text-center">
            <div class=" ">
              <b-icon
                icon="envelope"
                style="width: 120px; height: 120px"
              ></b-icon>
            </div>
            <p class="mt-3 mb-0 text-dark">
              <!-- ยื่นยันอีเมล์ที่คุณต้องการใช้กับ sos เพื่อข่าวสาร
              การแจ้งเตือนและลิงค์ยืนยัน -->
              “ขอบคุณที่สมัครสมาชิก Temsib และใช้บริการกับเรา
              ตอนนี้เว็บไซต์ยังไม่เปิดให้ใช้บริการ
            </p>
            <p class="mb-0 text-dark">
              ถ้าเปิดจะมีแจ้งเตือนไปยังอีเมลที่ลงทะเบียนไว้ของท่าน”
            </p>
            <!--
            <div class="">
              <input
                v-model="linkRecommend"
                class="w-50 border border-1 mt-3"
                 id="copyLink"
              />
              <b-button
                @click.stop.prevent="copyTestingCode"
                class="mt-3 btn w-50"
                type="submit"
                variant="outline-primary"
               >
                <i class="fa fa-clone" aria-hidden="true"></i>
                คัดลอกลิงค์แนะนำ!
              </b-button>
            </div>
            <div class="">
              <input
                class="w-50 border border-1 mt-3"
                :value="propEmail"
                :disabled="true"
              />
              <b-button
                @click="confirmStep2"
                class="mt-3 btn w-50"
                type="submit"
                variant="outline-primary"
              >
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                ยื่นยันอีเมล์</b-button
              >
            </div>
            -->
            <div />
            <div class="mt-2"></div>
            <small>
              <a href="#" @click="back" class="text-primary"
                 >กลับสู่หน้าหลัก</a
              ></small
            >
            <div class="mt-2"></div>
          </b-col>
          <b-col lg="3" md="3" sm="12"></b-col>
        </b-row>
      </b-container>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    propEmail: String,
    propUsername: String,
  },
  data() {
    return {
      data: {},
      status: 1,
      linkRecommend: "",
    }
  },
  mounted() {
    this.linkRecommend = "https://temsib.co/register?advice=" + this.propUsername
  },
  methods: {
    confirmStep2(e) {
      e.preventDefault()
      this.$emit("dataStep2", this.data)
    },
    back(e) {
      e.preventDefault()
      // this.$emit("back", this.status)
      this.$router.push('/')
    },
    copyTestingCode() {
      let Copy = document.querySelector("#copyLink")
      Copy.setAttribute("type", "text")
      Copy.select()
      try {
        var successful = document.execCommand("copy")
        var msg = successful ? "successful" : "unsuccessful"
      } catch (err) {
      }
    },
  },
}
</script>
