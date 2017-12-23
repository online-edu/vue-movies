import axios from "axios";

const api = "static";

class MovieService {
  constructor() {
    console.log("New instance created for MovieService");
  }
  getMovies() {
    return axios.get(`${api}/movies.json`);
  }

  getMovie(id) {
    // return this.getMovies().then(response => {
    //   console.log(response.data);
    //   console.log(id);
    //   let movies = response.data;
    //   movies.find(movie => movie.id == id);
    // });

    return new Promise((resolve, reject) => {
      this.getMovies().then(response => {
        let movies = response.data;
        resolve(movies.find(movie => movie.id == id));
      });
    });
  }
}

export const movieService = new MovieService();
