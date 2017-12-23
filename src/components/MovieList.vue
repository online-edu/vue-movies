<template>
  <div class="movies">
      <div class="block" 
        v-for="movie in movies"
        :key="movie.id"
        >
          <figure>
            <router-link 
              class="movie-name" 
              :to="{name:'MovieDetail',params:{id:movie.id}}"
            ><img :src="movie.image" />
            </router-link>              
          </figure>
      </div>
  </div>
</template>
<script>
import { movieService } from "../movie.service";

export default {
  name: "MovieList",
  data() {
    return {
      movies: this.getMovies()
    };
  },
  methods: {
    getMovies() {
      return movieService.getMovies().then(response => {
        this.movies = response.data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.movies {
  font-size: 18px;
  text-align: center;
  padding: 5px;
  .block {
    display: inline-block;
    cursor: pointer;
    figure img {
      width: 200px;
      margin: 8px auto;
      transition: all 0.3s ease-in;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>