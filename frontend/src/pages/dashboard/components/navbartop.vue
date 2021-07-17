<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://angular.io/assets/images/logos/angular/angular_solidBlack.png" class="img-logo">
      <span class="ml-2">AdminHash</span>
    </a>
      
        <li class="nav-item dropdown d-flex">
          <a class="nav-link dropdown-toggle text-black-low" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-cogs mr-1"></i>Configurações
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item text-black-low d-flex justify-content-between align-items-center" href="#" @click.prevent="logout">Sair <i class="fas fa-sign-out-alt text-black-low"></i></a></li>
          </ul>
        </li>
    </div>
</nav>
</template>

<script>
import '../dashboard.scss'

export default {
  name: 'Navbartop',
  methods: {
    logout: function() {
      this.$router.push({name: 'login'});
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../dashboard.scss';

.img-logo{
  height: 6vh;
}
.navbar{
  padding: 6px 24px;
  background-color: $white;
}

</style>