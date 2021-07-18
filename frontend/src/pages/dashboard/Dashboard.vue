<template>
  <div class="d-flex">
      <Sidebar :page="page"/>

    <div class="content-right">
         <Navbartop /> 

     <div class="section-dashboard">
        <slot name="slot-section-dashboard"></slot>
      </div>

    </div>
  </div>
</template>

<script>
import Navbartop from './components/navbartop'
import Sidebar from './components/sidebar'

export default {
  name: "Dashboard",
  props: {
    page: String,
  },
  components: {
    Navbartop,
    Sidebar
  }
};
</script>

<style lang="scss" src="./dashboard.scss" scoped />
