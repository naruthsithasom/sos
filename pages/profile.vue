<template>
  <div>
    <client-only>
      <NavbarChild />
      <ViewProfile />
    </client-only>
  </div>
</template>
<script>
import ViewProfile from "../components/views/ViewProfile"
import NavbarChild from "../components/navbars/navbarChild"
export default {
  components: {
    NavbarChild,
    ViewProfile,
  },
  data() {
    return {}
  },
}
</script>