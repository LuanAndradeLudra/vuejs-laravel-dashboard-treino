<template>
    <Dashboard  page="products">
      <div slot="slot-section-dashboard">
        Produtos
      </div>
    </Dashboard>
</template>

<script>
import Dashboard from "../dashboard/Dashboard";

export default {
   name: "Products",
   components: {
     Dashboard,
   },
};
</script>

<style  lang="scss" scoped />
