<template>
  <Dashboard page="home">
    <div slot="slot-section-dashboard">
      <header class="title-pages">
        Home
      </header>

      <div class="row">
        <div class="col-6 col-md-3">
          <Card
            name="Clientes"
            quantity="0"
            icon="fas fa-user-friends"
            route="home"
            background="bg-info"
          />
        </div>
        <div class="col-6 col-md-3">
          <Card
            name="Produtos"
            quantity="0"
            icon="fas fa-box"
            route="products"
            background="bg-primary"
          />
        </div>
        <div class="col-6 col-md-3">
          <Card
            name="Vendas"
            quantity="0"
            icon="fas fa-store"
            background="bg-danger"
          />
        </div>
        <div class="col-6 col-md-3">
          <Card
            name="Ganhos"
            quantity="R$ 0,00"
            icon="fas fa-chart-bar"
            background="bg-success"
          />
        </div>
      </div>
      <hr />
      <div class="row mt-4">
        <div class="col-12 col-md-6">
          <List :data="users"/>
        </div>
        <div class="col-12 col-md-6">
          <List :data="todos"/>
        </div>
      </div>
    </div>
  </Dashboard>
</template>

<script>
import Dashboard from "../dashboard/Dashboard";
import Card from "../../components/Cards.vue";
import List from "../../components/List";
const axios = require("axios");

export default {
  name: "Home",
  data() {
    return {
      users: {},
      todos: {},
    };
  },
  mounted: async function() {
    await this.getData();
  },
  methods: {
    async getData() {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (response.status == 200){
            this.users = {
              items: response.data.slice(0, 10),
              title: "Usuários",
              headers: ['Id', 'Nome', 'Usuário', 'Email'],
              fields: ['id', 'name', 'username', 'email'],
            };
          }
        })
        .catch(function(error) {
          console.log(error);
        });

        await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          if (response.status == 200){
            this.todos = {
              items: response.data.slice(0, 10),
              title: "Usuários",
              headers: ['Id', 'User Id', 'Titulo', 'Completo'],
              fields: ['id', 'userId', 'title', 'completed'],
            };
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  components: {
    Dashboard,
    Card,
    List,
  },
};
</script>

<style lang="scss" scoped />
