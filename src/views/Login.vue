<template>
  <div class="text-center">
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="email" class="sr-only">Email address</label>
      <input v-model = "credentials.email" type="email" id="email" class="form-control" placeholder="Email address" required autofocus>
      <label for="password" class="sr-only">Password</label>
      <input v-model = "credentials.password" type="password" id="password" class="form-control" placeholder="Password" required>

      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; by Ranka</p>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
//import authService from '../services/AuthService.js'
export default {
  data() {
    return {
      credentials: {
      email: "",
      password: ""
      }
    }
    
  },
  computed: {
    ...mapGetters(['counter', 'doubledCounter', 'activeUser'])
  },
  methods: {
      async login() {
        try {
          console.log('component >>> login, calling action', this.credentials)
          await this.$store.dispatch('login', this.credentials)
          alert('user logovan')
        } catch(error) {
          console.log(error);
          alert('Invalid credentials')
        }

        // const { user, token } = await authService.login(this.credentials);
        // alert('Hello, ' + user.name);
        // this.activeUser = user;

        // this.$router.push('/my-profile')
      },
      incrementCounter() {
        this.$store.commit('incrementCounter')
      },
      resetCounter() {
        this.setCounter(0);
        //this.$store.commit('setCounter', 0)
      },

      ...mapMutations(['incrementCounter', 'setCounter'])
    },
  // created() {
  //   console.log(this.$store);
  //  // console.log('getters je', this.$store.getters.counter);
  // },

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