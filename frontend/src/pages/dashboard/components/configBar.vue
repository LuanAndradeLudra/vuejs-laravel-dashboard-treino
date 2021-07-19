<template>
  <div class="config-bar shadow collapse" id="configbar">
    <div class="content">
        <div class="d-flex justify-content-between pe-3">
            Configurações
            <i class="fas fa-times cursor-pointer" data-bs-toggle="collapse" data-bs-target="#configbar"></i>
        </div>
        <hr />
        <ul class="nav nav-pills d-flex flex-column">
            <li class="nav-item cursor-pointer">
                <span class=" nav-link  d-flex justify-content-between align-items-center">
                    Sair
                    <i class="fas fa-sign-out-alt mr-1"></i>
                </span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ConfigBar',
}
</script>

<style lang="scss">
@import "@/assets/scss/_main";

.config-bar{
    height: 100vh;
    width: 18vw;
    background-color: $white;
    position: fixed;
    z-index: 1;
    right: 0;

    .nav-pills .nav-link {
        margin-top: 6px;
        color: $blackLow;
    }

    .nav-pills :hover .nav-link {
        color: $white !important;
        background-color: $blackLow;
        transition: 0.3s;
        transform: translateX(-4px);
    }
}
.collapse {
  padding: 12px;
  font-size: 16px;
  .content{
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s linear;
  }
  
  
  @media (max-width: 1400px) { 
    width: 19vw;
  }
  
  
  @media (max-width: 1366px) { 
    width: 20vw;
  }
  
  @media (max-width: 1024px) {
    width: 30vw;
   }

  @media (max-width: 800px) { 
    width: 35vw;
  }
  
  @media (max-width: 600px) { 
    width: 45vw;
   }
  

  transition: 0.3s;
}

.collapsing {
  font-size: 0px;
  height: 100vh !important;
  width: 0;
    .content{
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.2s, opacity 0.2s linear;
    }
  transition: 0.4s;
}
</style>