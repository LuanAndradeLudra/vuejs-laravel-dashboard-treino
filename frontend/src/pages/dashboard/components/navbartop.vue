<template>
  <nav class="navbar shadow navbar-expand-lg navbar-light">
  <div class="container-fluid" style="padding: 0px !important; ">
    <a class="navbar-brand ml-2 cursor-pointer hover-to-gray-medium" data-bs-toggle="collapse" data-bs-target="#sidebar">
      <i class="fas fa-bars"></i>
    </a>

    <a class="navbar-brand" href="#">
      <img src="https://punchcard.io/wp-content/uploads/2016/02/icon-angular.svg" class="img-logo">
    </a>

    <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-link d-flex flex-row">
        <li class="nav-item hover-to-black-medium" v-for="menuItem in menu"
          :key="menuItem.title">
          <router-link :to="{name: menuItem.name}" class="d-none d-md-flex nav-link">
            <span :class="{'text-black-strong': page == menuItem.name,}">{{menuItem.title}}</span>
          </router-link>
        </li>
    </ul>
          <li class="dropstart d-flex nav-link">
            <a class="nav-item hover-to-gray-medium" href="#" id="navbarDropdown" role="button" data-bs-toggle="collapse" data-bs-target="#configbar">
              <span class="dropdown-toggle "><i class="fas fa-cogs mr-1"></i></span>
            </a>
        </li>
    </div>
</nav>
</template>

<script>
import menu from './menu'

export default {
  name: 'Navbartop',
  data() {
    return {
      menu,
    }
  },
  props: {
    page: String,
  },
  methods: {
    logout: function() {
      this.$router.push({name: 'login'});
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main";

  .navbar {
    background-color: $white;
    padding: 0px;

    .nav-item {
      color: $blackLow;
      text-decoration: none;
      margin-left: 6px;
      margin-right: 6px;
    }

    @media (max-width: 1920px) {
      .img-logo {
        height: 5vh;
      }
    }

    @media (max-width: 576px) {
      .img-logo {
        height: 5vh;
      }
    }
  }
</style>