<template>
  <div class="login full-size d-flex justify-content-center align-items-center">
    <div
      class="content-login d-flex justify-content-center align-items-center flex-column"
    >
      <header>
        <h1>Login</h1>
      </header>

      <section class="form">
        <form method="POST" action="/auth">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email@email.com"
              v-model="email"
              required
            />
            <div id="emailHelp" class="form-text text-gray-medium">
              Nós nunca compartilharemos seus dados com ninguém.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              minlength="8"
              placeholder="********"
              required
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Permanecer conectado</label
            >
          </div>
          <div class="d-grid gap-2">
            <button
              type="submit"
              class="btn btn-outline-light btn-block"
              @click.prevent="login"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      email: "",
    }
  },
  methods: {
    login: function() {
      var name = this.email.split("@");
      name = name[0];
      this.$store.commit('login', {name, email: this.email});
      this.email = ""
      this.$router.push({ name: "home" });
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main";

@media (max-width: 1920px) {
  .content-login {
    width: 30vw;
  }
}

@media (max-width: 576px) {
  .content-login {
    width: 80vw;
  }
}


.form-check-input:checked {
  background-color: $blackLow;
  border-color: $blackStrong;
  box-shadow: 0px 0px 0px 1px $grayLow !important;
}

.form-check-input {
  box-shadow: 0px 0px 0px 0px green !important;
}

.form-check-input:focus {
  background-color: none;
  border-color: none;
}

.form-control:focus {
  border-color: white;
  box-shadow: 0px 0px 10px 1px white !important;
}

.login {
  background-color: $grayLow;
  color: $white;
  height: 100vh;
  width: 100vw;

  .content-login {
    height: 70vh;
    background-color: $blackLow;
    border-radius: 15px;
    border: 6px solid $blackStrong;

    header {
      font-family: Roboto Condenser;
      color: $white;
      width: 100%;
      padding-left: 24px;
      padding-bottom: 16px;
    }

    .form {
      width: 80%;
    }
  }
}
</style>
