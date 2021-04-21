import React from 'react';
import PropTypes from "prop-types";

// Function -> Class component 로 변환(React.Component를 상속)
// Component의 render 메서드와 state를 상속
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
    // 변하는 속성의 데이터를 state에 저장
    state = {
        count: 0
    };

    // button functions
    // state는 직접적으로 변경하면 안된다. setState()를 사용하여 리액트가 뷰를 refresh하게 해야한다.
    add = () =>{
      this.setState(curr => ({count : curr.count +1}));
    };

    minus = () =>{
      this.setState(curr => ({count : curr.count-1}));
    };

    // 컴퍼넌트가 태어날 시
    componentDidMount() {
      console.log("component rendered");
    }

    // 컴퍼넌트가 업데이트 될 시(setState() 등으로)
    componentDidUpdate(){
      console.log("component updated");
    }

    // 컴퍼넌트가 사라질 시
    componentWillUnmount(){
      console.log("Good bye, cruel world");
    }
    // render method 오버라이딩
    render() {
        console.log("I am rendering");
        return (
          <div>
            <h1>
              The number is: {this.state.count}
            </h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
          </div>
        )
    }
}

export default App;
