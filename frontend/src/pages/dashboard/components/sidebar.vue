<template>
  <div class="sidebar collapse show" id="sidebar">
    <div class="content">
      <a
        href="#"
        class="d-flex align-items-center justify-content-evenly mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img
          src="https://ml7u4cm4jjmy.i.optimole.com/CaABJw-JFJSbi1T/w:auto/h:auto/q:auto/https://bmsenergiasolar.com.br/wp-content/uploads/2020/02/default-user-1.png"
          class="img-fluid rounded-start mr-1"
          style="max-width: 40px"
        />
        <span class="d-none d-md-block">
          {{ name }} <br />
          <span style="font-size: 10px">{{ email }}</span>
        </span>
      </a>
      <hr />
      <ul class="nav nav-pills d-flex flex-column">
        <li
          class="nav-item cursor-pointer"
          v-for="menuItem in menu"
          :key="menuItem.title"
        >
          <router-link
            :to="{ name: menuItem.name }"
            class="text-decoration-none"
          >
            <span
              :class="{
                'active nav-link': page == menuItem.name,
                'nav-link non-active': page != menuItem.name,
              }"
              aria-current="page"
            >
              <i :class="['fas mr-1', menuItem.icon]"></i
              ><span class="d-none d-md-inline">{{
                menuItem.title
              }}</span></span
            >
          </router-link>
        </li>
      </ul>

      <div
        class="dropup"
        style=" position: absolute;
  bottom: 20px;"
      >
        <hr />
        <a
          href="#"
          class="sidebar-item text-white text-decoration-none hover-to-gray-medium"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="dropdown-toggle"
            ><i class="fas fa-cogs mr-1"></i
            ><span class="d-none d-md-inline-flex">Configurações</span></span
          >
        </a>
        <ul
          class="dropdown-menu dropdown-menu-ligth text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a
              class="dropdown-item d-flex justify-content-between align-items-center"
              href="#"
              @click.prevent="logout"
              >Sair <i class="fas fa-sign-out-alt  text-black-low"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "./menu";

export default {
  name: "Sidebar",
  data() {
    return {
      name: this.$store.state.name,
      email: this.$store.state.email,
      menu,
    };
  },
  props: {
    page: String,
  },
  methods: {
    logout: function() {
      this.$store.commit("logout");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main";

.sidebar {
  background-color: $blackLow;

  .nav-pills .nav-link {
    margin-top: 6px;
    color: $white;
  }

  .nav-pills .nav-link.active {
    color: $white !important;
    background-color: $blackStrong !important;
  }

  .nav-pills :hover .nav-link.non-active {
    color: $blackLow !important;
    background-color: $white;
    transition: 0.3s;
    transform: translateX(8px);
  }

  @media (max-width: 1920px) {
    .img-logo {
      height: 14vh;
    }
  }

  @media (max-width: 576px) {
    .img-logo {
      height: 8vh;
    }
  }
}

.collapse {
  padding: 12px;
  font-size: 16px;
  .content {
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
    width: 26vw;
  }

  @media (max-width: 800px) {
    width: 35vw;
  }

  @media (max-width: 600px) {
    width: 22vw;
  }

  transition: 0.3s;
}

.collapsing {
  font-size: 0px;
  height: 100vh !important;
  width: 0;
  .content {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.2s, opacity 0.2s linear;
  }
  transition: 0.4s;
}
</style>
