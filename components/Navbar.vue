<template>
  <div>
    <client-only>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
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
      <div class="container-fluid navbarbox space">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <div class="container">
                <div class="row">
                  <li class="logobox">
                    <img class="logo" src="~/assets/images/logo.png" />
                  </li>
                  <li class="menu">
                    <a class="navbartext" href="/index"><h5>HOME</h5></a>
                    <a class="navbartext" href="/market"><h5>MARKET</h5></a>
                    <a class="navbartext" href="/exchange"><h5>EXCHANGE</h5></a>
                    <!--when not login -->
                    <a class="navbartext" href="/register"><h5>REGISTER</h5></a>
                    <!-- Button trigger modal -->
                  </li>

                  <li>
                    <button
                      type="button"
                      class="btn btn-admin"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      style="color: #e7af24"
                    >
                      <i class="fa fa-user cl-g" aria-hidden="true"></i>
                    </button>
                  </li>

                  <Poplogin />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!--mobile-->
    </client-only>
  </div>
</template>
<script>
import Poplogin from "../components/Poplogin"
export default {
  components: {
    Poplogin,
  },
}
</script>