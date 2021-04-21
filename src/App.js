import React from 'react';
import PropTypes from "prop-types";

// Function -> Class component 로 변환(React.Component를 상속)
// Component의 render 메서드와 state를 상속
class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 6000);
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
