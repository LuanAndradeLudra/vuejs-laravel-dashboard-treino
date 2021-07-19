<template>
  <Dashboard page="users">
    <div slot="slot-section-dashboard">
      <header class="title-pages">
        Usuários
      </header>
      <List />
    </div>
  </Dashboard>
</template>

<script>
import Dashboard from "../dashboard/Dashboard.vue";
import List from "../../components/List";

export default {
  name: "Users",
  components: {
    Dashboard,
    List,
  },
};
</script>

<style lang="scss" scoped></style>
