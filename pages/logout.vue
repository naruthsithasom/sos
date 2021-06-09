<template>
  <div class="my-5 py-5">
    <h1 class="text-center">Logout</h1>
  </div>
</template>
<script>
export default {
  mounted(){
    localStorage.clear();
    setTimeout(()=>{this.$router.push("/")},2000)
  }
}
</script>