<template>
  <div class="d-flex">
    <Sidebar :page="page"/>

    <div class="content-right">
      <ConfigBar />
      <Navbartop :page="page"/>
      <div class="section-dashboard">
        <slot name="slot-section-dashboard"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Navbartop from "./components/navbartop";
import Sidebar from "./components/sidebar";
import ConfigBar from "./components/configBar";

export default {
  name: "Dashboard",
  props: {
    page: String,
  },
  components: {
    Navbartop,
    Sidebar,
    ConfigBar,
  },
  created: function() {
    if (this.$store.state.name == "") this.$router.push({ name: "login" });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main";

.content-right {
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: $grayLow;
  .section-dashboard {
    padding: 16px 16px 6px 16px;
    height: auto;
  }
}

</style>
