<template>
    <Dashboard page="home">
      <div slot="slot-section-dashboard">
        <header class="title-pages">
          Home
        </header>

        <div class="row">
          <div class="col-6 col-md-3">
            <Card name="Clientes" quantity="0" icon="fas fa-user-friends" route="home" background="bg-info"/>
          </div>
          <div class="col-6 col-md-3">
             <Card name="Produtos" quantity="0" icon="fas fa-box" route="products" background="bg-primary"/>
          </div>
          <div class="col-6 col-md-3">
             <Card name="Vendas" quantity="0" icon="fas fa-store" background="bg-danger"/>
          </div>
          <div class="col-6 col-md-3">
             <Card name="Ganhos" quantity="R$ 0,00" icon="fas fa-chart-bar" background="bg-success"/>
          </div>
        </div>
      </div>
    </Dashboard>
</template>

<script>
import Dashboard from "../dashboard/Dashboard"
import Card from "../../components/Cards.vue"

export default {
  name: 'Home',
  components: {
    Dashboard,
    Card
  },
};
</script>

<style  lang="scss" scoped />
