import React from 'react';
import Potato from './Potato';  // 해당 컴퍼넌트 내에서 사용되는 Potato 컴퍼넌트 임포트

// function Food (props) { // 해당 컴퍼넌스 속성으로 들어온 정보들을 매개변수로 할당하여 전달받을 수 있다.
//    console.log(props);
//    return <h3>I like {props.fav}</h3>

function Food ({ fav }) { // 특정 속성값을 인자로 받고 싶을 때
  /**
   * 주의할 점:
   *    - 매개변수명은 커스텀이 가능하나, 내부의 필드값은 컴퍼넌트를 작성할 때 넘겨오는 필드값과 같아야 한다. vice versa
   */
  console.log(fav);
  return <h3>I like {fav}</h3>
}

// <App/> 태그로 HTML을 반환하는 컴퍼넌트
function App() {
  return <div>
            <h1>Hello!</h1>

            {/* <Potato /> reference from lesson #2.0*/}

            {/* 
              컴퍼넌트로 정보를 보내는 방법 fieldName = "{value}"
              boolean 값을 넘길 때 fieldName = {true} | {false}
              array를 넘길 때 fieldName = {[elem1, elem2, elem3...]}
            */}
            <Food 
              fav="kimchi" 
              // boolTest={true}
              // arrayTest={[1, 2, 3, "Hello", "World!"]}
            />
            <Food fav="삼겹살" />
            <Food fav="ramen" />
            <Food fav="쭈꾸미" />

         </div>;
}

export default App;
