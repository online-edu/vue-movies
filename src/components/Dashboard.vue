<template>
  <div class='dashboard'>
      <div class='left-col'>
          <h3>Top Movies</h3>
          <div class='list'>
                <div class='list-item' 
                    v-for="movie in topMovies"
                    v-bind:key="movie.id" >
                    <table>
                        <tr>
                            <td><img class="movie-img" :src="movie.image" /></td>
                            <td :style="{paddingLeft:'15px'}">
                                <a class="movie-name">{{movie.name}}</a>
                                <p class="movie-desc">{{movie.summary}}</p>
                            </td>
                        </tr>
                    </table>
                </div>
          </div>
      </div>
      <div class="right-col">
          <h3>Latest Movies</h3>
          <div class='list'>
                <div class='list-item' 
                    v-for="movie in latestMovies"
                    v-bind:key="movie.id" >
                    <table>
                        <tr>
                            <td><img class="movie-img" :src="movie.image" /></td>
                            <td :style="{paddingLeft:'15px'}">
                                <a class="movie-name">{{movie.name}}</a>
                                <p class="movie-desc">{{movie.summary}}</p>
                            </td>
                        </tr>
                    </table>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      topMovies: [],
      latestMovies: [],
    };
  },
  methods: {
    getMovies() {
      return axios
        .get("https://movie-app-29a50.firebaseapp.com/assets/data/movies.json")
        .then(response => {
          this.topMovies = response.data.slice(5, 10);
          this.latestMovies = response.data.slice(1, 5);
        });
    },
  },
  created: function() {
    this.getMovies();
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  .list {
    .list-item {
      padding: 10px;
      border-bottom: thin solid #dedede;
      width: auto;
      .movie-name {
        font-size: 22px;
      }
      .movie-desc {
        font-size: 17px;
        overflow: hidden;
        max-height: 72px;
      }
      .movie-img {
        width: 100px;
      }
    }
  }
}
</style>