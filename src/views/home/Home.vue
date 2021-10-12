<template>

  <div id="home">
    <h1>首页</h1>
    <nav-bar><div slot="center">购物街</div> </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  export default {
    name: "Home",
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>
