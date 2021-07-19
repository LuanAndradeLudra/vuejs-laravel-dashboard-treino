<template>
  <div class="card-info shadow rounded mb-2" v-bind:class="background">
    <div class="card-info-inner d-flex align-items-center justify-content-between">
      <div class="user-select-none">
        <h3>{{quantity}}</h3>
        <p>{{name}}</p>
      </div>
      <div class="card-info-icon d-none d-md-block">
        <i :class="['asd', icon]"></i> 
      </div>
    </div>
    <router-link :to="{name: route}" class="text-decoration-none text-white">
      <div class="rounded d-flex justify-content-center p-1 align-items-center card-info-footer">
        <span>Ver mais</span> <i class="fas fa-arrow-circle-right ml-1"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    quantity: String,
    icon: String,
    route: String,
    background: String,
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main.scss";

.card-info{
  color: $white;
  .card-info-inner{
    padding: 8px;
  }
  .card-info-icon{
    font-size: 40px;
    font-weight: 700;
    color: rgba(255,255,255, 0.4);
  }
  .card-info-footer{
    background-color: rgba(0,0,0, 0.1);
  }
  :hover{
    .card-info-icon{
      font-size: 42px;
      color: $white;
      transition: 0.3s;
    }
  }
}
</style>