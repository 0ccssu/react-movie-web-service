import React from 'react';
import PropTypes from "prop-types";

// Function -> Class component 로 변환(React.Component를 상속)
// Component의 render 메서드와 state를 상속
class App extends React.Component {
    // 변하는 속성의 데이터를 state에 저장
    state = {
        count: 0
    };
    
    // button functions
    add = () =>{
      console.log("add");
    };

    minus = () =>{
      console.log("minus");
    };
    // render method 오버라이딩
    render() {
        return (
          <div>
            <h1>
              The number is {this.state.count}
            </h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
          </div>
        )
    }
}

export default App;
