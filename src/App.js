import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";

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
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  componentDidMount = () => {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    )
  }
}

export default App;
