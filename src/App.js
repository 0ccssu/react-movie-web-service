import React from 'react';
import Potato from './Potato';  // 해당 컴퍼넌트 내에서 사용되는 Potato 컴퍼넌트 임포트

// <App/> 태그로 HTML을 반환하는 컴퍼넌트
function App() {
  return <div>
            <h1>Hello!</h1>
            <Potato />
         </div>;
}

export default App;
