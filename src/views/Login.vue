<template>
  <div class="container">
      <h2>Login</h2>
       <div class="d-flex justify-content-center align-items-center container">
          <form class="row g-3">
            <div class="col-auto">
              <label for="email" class="visually-hidden">Email</label>
              <input type="email" class="form-control" id="email" value="" placeholder="Email">
            </div>
            <div class="col-auto">
              <label for="password" class="visually-hidden">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">Login</button>
            </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>