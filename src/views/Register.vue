<template>
  <div class="text-center">
    <form class="form-signin" @submit.prevent="register">
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <label for="email" class="sr-only">Email address</label>
      <input v-model = "credentials.email" type="email" id="email" class="form-control" placeholder="Email address" required autofocus>
      <label for="password" class="sr-only">Password</label>
      <input v-model = "credentials.password" type="password" id="password" class="form-control" placeholder="Password" required>
      <label for="password_confirmation" class="sr-only">Confirm password</label>
      <input v-model = "credentials.password_confirmation" type="password" id="password_confirmation" class="form-control" placeholder="Password" required>
     <label for="name" class="sr-only">Name</label>
      <input v-model = "credentials.name" type="text" id="name" class="form-control" placeholder="Your name" required>

      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
      <p class="mt-5 mb-3 text-muted">&copy; by Ranka</p>
    </form>
  </div>
</template>

<script>
//import authService from '../services/AuthService.js'
export default {
  data() {
    return {
        credentials: {
            email: "",
            password: "",
            password_confirmation: "",
            name: "",
        }
    }
    
  },
  methods: {
      async register() {
        try {
          await this.$store.dispatch('register', this.credentials);
          alert('user registrovan');
        } catch(error) {
          console.log(error);    
        }
    }
}
}
</script>

<style>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>