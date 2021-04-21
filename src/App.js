import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// Function -> Class component 로 변환(React.Component를 상속)
// Component의 render 메서드와 state를 상속
class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // axios 라이브러리를 사용하여 영화리스트를 get 한다
    // async와 await 힌트를 사용하여 비동기처리를 한다.(둘은 같이 가야함)
    const { 
      data: { 
        data: { movies } 
      } 
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies, isLoading: false });
  }

  componentDidMount = () => {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section class="container">
        {isLoading ? (
        <div class="loader">
          <span class="loader__text">Loading...</span>
        </div>
        ) : (
          <div class="movies">
            {movies.map(movie => {
              console.log(movie);
              return <Movie key={movie.id}
                            id={movie.id} 
                            year={movie.year} 
                            title={movie.title} 
                            summary={movie.summary} 
                            poster={movie.medium_cover_image} 
                      />
            })}
          </div>
        )}
      </section>
    )
  }
}

export default App;
