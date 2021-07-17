<template>
  <div class="">
    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="content-right">

      <div class="navbartop">
        <Navbartop />
      </div>

      <div class="section-dashboard">
        Section
      </div>

    </div>
  </div>
</template>

<script>
import Navbartop from './partials/navbartop'
import Sidebar from './partials/sidebar'

export default {
  name: "Dashboard",
  components: {
    Navbartop,
    Sidebar
  }
};
</script>

<style lang="scss" src="./dashboard.scss" scoped />
