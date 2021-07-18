<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid" style="padding: 0px !important; ">
    
    <a class="navbar-brand ml-2" style="cursor: pointer" data-bs-toggle="collapse" data-bs-target="#collapseExample">
      <i class="fas fa-bars"></i>
    </a>

    <a class="navbar-brand" href="#">
      <img src="https://punchcard.io/wp-content/uploads/2016/02/icon-angular.svg" class="img-logo">
    </a>

    <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-link">
        <li class="nav-item hover-to-gray-medium">
          <a class="d-none d-md-inline-flex nav-link active" aria-current="page" href="#">Home</a>
        </li>
    </ul>
          <li class="dropstart d-flex nav-link">
          <a class="nav-item hover-to-gray-medium" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="dropdown-toggle "><i class="fas fa-cogs mr-1"></i></span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#" @click.prevent="logout">Sair <i class="fas fa-sign-out-alt"></i></a></li>
          </ul>
        </li>
    </div>
</nav>
</template>

<script>

export default {
  name: 'Navbartop',
  methods: {
    logout: function() {
      this.$router.push({name: 'login'});
    },
  }
}
</script>

<style lang="scss" src="../dashboard.scss" scoped />