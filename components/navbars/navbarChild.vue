<template>
  <div>
    <client-only>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light nav-border-buttom p-0"
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
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <span class="nav-menu-logo">
              <img
                class="toggle-img logo-resize"
                src="~/assets/images/wgc.png"
              />
            </span>
            <span class="nav-menu-lg">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 toggle-nav-link">
                <li class="nav-item px-2">
                  <a class="nav-link toggle-text" aria-current="page" href="/"
                    ><p>HOME</p></a
                  >
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link toggle-text" aria-current="page" href="/market"
                    ><p>MARKETS</p></a
                  >
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link toggle-text" aria-current="page" href="/exchange"
                    ><p>EXCHANGE</p></a
                  >
                </li>
                <li class="nav-item px-2">
                  <a
                    class="nav-link toggle-text"
                    aria-current="page"
                    href="/register"
                    ><p>REGISTER</p></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link toggle-text" aria-current="page" href="#">
                  </a>
                </li>
                <li class="nav-item dropdown primary">
                  <a
                    class="nav-link   toggle-text"
                    href="/profile"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <p>WALLET</p>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/profile">Profile</a>
                    <a class="dropdown-item" href="/profile">Fund</a>
                    <a class="dropdown-item" href="#">Deposit</a>
                    <a class="dropdown-item" href="#">Withdraw</a>
                    <a class="dropdown-item" href="#">Transition History</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="#">Logout</a>
                  </div>
                </li>
              </ul>
            </span>
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
        username: "",
        password: "",
        readme: "no",
      },
    }
  },
  async mounted() {},
  watch: {},
  methods: {
    handleOk() {
      console.log("Login>>", JSON.stringify(this.form))
    },
  },
}
</script>
 <style>
 .logo-resize{
   width: 80px
 }
</style>