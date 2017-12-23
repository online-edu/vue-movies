<template>
    <div v-if="movie" class="movie">
  <div class="container">
    <div class="left-col">
      <div class="poster">
        <figure>
          <img :src="movie.image" />
        </figure>
      </div>
    </div>
    <div class="right-col">
      <div class="info">
        <div class="info-container">
          <h2 class="movie-name">{{movie.name}}</h2>
          <p class="movie-desc">{{movie.summary}}</p>
          <table class="cast">
            <tr>
              <td class="label">Starring</td>
              <td class="crew">{{movie.starring}}</td>
            </tr>
            <tr>
              <td class="label">Music</td>
              <td class="crew">{{movie.music}}</td>
            </tr>
            <tr>
              <td class="label">Producer</td>
              <td class="crew">{{movie.producer}}</td>
            </tr>
            <tr>
              <td class="label">Director</td>
              <td class="crew">{{movie.director}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { movieService } from "../movie.service";

export default {
  name: "MovieDetail",
  data() {
    return {
      movie: this.getMovie()
    };
  },
  methods: {
    getMovie() {
      let movieId = this.$route.params.id;
      if (movieId !== undefined) {
        movieService.getMovie(movieId).then(movie => {
          this.movie = movie;
          console.log(movie.name);
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.movie {
  .left-col {
    width: 30%;
    .poster figure img {
      width: 350px;
      height: 500px;
      -webkit-box-reflect: below 0px -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.6)
            0%, transparent 25%, transparent 100%);
      @media screen and (max-width: 400px) {
        figure {
          margin: 0;
        }
      }
    }
  }
  .info {
    .info-container {
      min-height: 585px;
      border: thin solid lighten(#000, 50);
      padding: 0 20px;
      margin: 15px auto;
      .movie-name {
        font-size: 24px;
      }
      .movie-desc {
        font-size: 17px;
      }
      .cast {
        tr td {
          padding: 10px;
        }
      }
    }
  }
}
</style>