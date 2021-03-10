<template>
  <div>
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
                    <img class="logo" src="~assets/images/logo.png" />
                  </li>
                  <li class="menu">
                    <a class="navbartext" href="/"><h5>HOME</h5></a>
                    <a class="navbartext" href="/market"><h5>MARKET</h5></a>
                    <a class="navbartext" href="/exchange"><h5>EXCHANGE</h5></a>
                    <div class="dropdown">
                      <a
                        class="navbartext h5 dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        WALLET
                      </a>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a class="droptext dropdown-item" href="/fund">Fund</a>
                        <a class="droptext dropdown-item" href="/deposit"
                          >Deposit</a
                        >
                        <a class="droptext dropdown-item" href="/withdraw"
                          >Withdraw</a
                        >
                        <a class="droptext dropdown-item" href="/history"
                          >Transaction History</a
                        >
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {}
</script>