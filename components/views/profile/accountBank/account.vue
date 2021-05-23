<template>
  <div>
    <client-only>
      <b-container >
        <h4>Account Bank</h4>
        <b-row class="">
          <b-col lg="3" md="3" sm="12" class=""></b-col>
          <b-col lg="6" md="6" sm="12" class="bg-light">
            <b-card bg-variant="light" class="d-flex align-items-center">
              <b-img
                v-bind="mainProps"
                rounded
                alt="Rounded image"
                left
                src="~/assets/images/bank/0-01.png"
                class="mr-2 my-2"
              ></b-img>
              <b-img
                v-bind="mainProps"
                rounded
                alt="Rounded image"
                left
                src="~/assets/images/bank/0-02.png"
                class="mr-2 my-2"
              ></b-img>
              <b-img
                v-bind="mainProps"
                rounded
                alt="Rounded image"
                left
                src="~/assets/images/bank/0-03.png"
                class="mr-2 my-2"
              ></b-img>
              <b-img
                v-bind="mainProps"
                rounded
                alt="Rounded image"
                left
                src="~/assets/images/bank/0-04.png"
                class="mr-2 my-2"
              ></b-img>
              <b-img
                v-bind="mainProps"
                rounded
                alt="Rounded image"
                left
                src="~/assets/images/bank/0-05.png"
                class="mr-2 my-2"
              ></b-img>
              <b-img
                v-bind="mainProps"
                rounded
                alt="Rounded image"
                left
                src="~/assets/images/bank/0-06.png"
                class="mr-2 my-2"
              ></b-img>
              <b-img
                v-bind="mainProps"
                rounded
                alt="Rounded image"
                left
                src="~/assets/images/bank/0-07.png"
                class="mr-2 my-2"
              ></b-img>
              <b-img
                v-bind="mainProps"
                rounded
                alt="Rounded image"
                left
                src="~/assets/images/bank/0-08.png"
                class="mr-2 my-2"
              ></b-img>
            </b-card>
            <b-form-group
              label="ชื่อบัญชี"
              label-for="input-formatter"
              description=""
              class="my-4 text-dark"
            >
              <b-form-input
                id=""
                v-model="text1"
                placeholder=""
                 class="border border-1"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="เลขบัญชีธนาคาร"
              label-for="input-formatter"
              description=""
              class="my-4 text-dark"
            >
              <b-form-input
                id="input-formatter"
                v-model="text2"
                placeholder=""
                 class="border border-1"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="รูปสมุดบัญชี"
              label-for="input-formatter"
              description=""
              class="my-4 text-dark"
            >
              <b-form-file
                multiple
              ></b-form-file>
                <!-- :file-name-formatter="formatNames" -->
            </b-form-group>
            <div>
              <b-button block variant="primary">เพิ่มบัญชีธนาคาร</b-button>
            </div>
          </b-col>
          <b-col lg="3" md="3" sm="12" class=""></b-col>
        </b-row>
      </b-container>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainProps: {
        width: 45,
        height: 45,
        class: "m1",
      },
        text1: "",
        text2: "",
    }
  },
}
</script>