<template>
  <div>
    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="content-right">

        <Navbartop />

      <div class="section-dashboard">
        Section
      </div>

    </div>
  </div>
</template>

<script>
import Navbartop from './components/navbartop'
import Sidebar from './components/sidebar'

export default {
  name: "Dashboard",
  components: {
    Navbartop,
    Sidebar
  }
};
</script>

<style lang="scss" src="./dashboard.scss" scoped />
