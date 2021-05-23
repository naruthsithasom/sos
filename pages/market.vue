<template>
  <div>
     <client-only>
       <NavbarChild />
     <ListMarkets />
     </client-only>
  </div>
</template>
<script>
 import listMarkets from "../components/tables/listMarkets"
 import NavbarChild from "../components/navbars/navbarChild"
export default {
  middleware: "auth",
  components: {
    listMarkets,
    NavbarChild,
  },
  head: {
    title: "หน้าระบบเทรด",
  },
}
</script>
<style scoped>

</style>