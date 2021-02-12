<template>
  <div class="container">
    <h1>Movies</h1>
    <div v-for="movie in this.$store.state.movies" :key="movie.id">
      <h3>{{movie.title}}</h3>
      <p>{{movie.director}}</p>
    </div>
  </div>
</template>

<script>
//import movieService from '../services/MovieService.js'
export default {
  data() {
    return {
      movies: []
    }
  },
  //  async created(){
  //       this.movies = await movieService.getAll();
  //   },
   beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.dispatch('getMovies')
      })
  }


  
}
</script>

<style>

</style>