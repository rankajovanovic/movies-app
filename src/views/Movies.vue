<template>
  <div class="container">
    <div v-for="movie in movies" :key="movie.id">
      <h3>{{movie.title}}</h3>
      <p>{{movie.director}}</p>
    </div>
  </div>
</template>

<script>
import movieService from '../services/MovieService.js'
export default {
  data() {
    return {
      movies: []
    }
  },
   async created(){
        this.movies = await movieService.getAll();
    },
}
</script>

<style>

</style>