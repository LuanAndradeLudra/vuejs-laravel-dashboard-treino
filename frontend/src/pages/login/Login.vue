<template>
      <div class="login full-size d-flex justify-content-center align-items-center">

      <div class="content-login d-flex justify-content-center align-items-center flex-column">

          <header>
            <h1>Login</h1>
          </header>

          <section class="form">

            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@email.com" required>
                <div id="emailHelp" class="form-text text-gray-medium">Nós nunca compartilharemos seus dados com ninguém.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1" minlength="8" placeholder="********" required>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Permanecer conectado</label>
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-outline-light btn-block">Login</button>
              </div>
            </form>

          </section>

      </div>

    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" src="./login.scss" scoped />
