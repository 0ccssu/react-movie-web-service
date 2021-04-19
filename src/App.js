import React from 'react';
import Potato from './Potato';  // 해당 컴퍼넌트 내에서 사용되는 Potato 컴퍼넌트 임포트 **reference from #2.0
import PropTypes from "prop-types";

/**
 * #2.1 Reusable Components
 * 주의할 점:
 *    - 매개변수명은 커스텀이 가능하나, 내부의 필드값은 컴퍼넌트를 작성할 때 넘겨오는 필드값과 같아야 한다. vice versa
 */
// function Food ({ fav }) { // 특정 속성값을 인자로 받고 싶을 때
//   console.log(fav);
//   return <h3>I like {fav}</h3>
// }

// function Food (props) { // 해당 컴퍼넌스 속성으로 들어온 정보들을 매개변수로 할당하여 전달받을 수 있다.
//    console.log(props);
//    return <h3>I like {props.fav}</h3>
// }

/**
 * #2.2 Dynamic Component Generation
 * 
 */
const foodILike = [{
  id: 1,
  name: "Kimchi",
  image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4
},
{
  id: 2,
  name: "Samgyeopsal",
  image:
    "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  rating: 5
},
{
  id: 3,
  name: "Bibimbap",
  image:
    "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.3
},
{
  id: 4,
  name: "Doncasu",
  image:
    "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5
},
{
  id: 5,
  name: "Kimbap",
  image:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4
}];

function Food ({ name, picture, rating}) { // 특정 속성값을 인자로 받고 싶을 때
  console.log(name);
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  )
}

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>  // key prop은 리액트 내부에서 사용하기 위한 prop이다
}

/**
 * reference from #2.4 
 * prop validation by prop-types plugin
 * <a href="https://reactjs.org/docs/typechecking-with-proptypes.html">
 * Refer to
 * </a>
 * <b>important!</b> propTypes 이외의 명으로 필드명을 지을 수 없다
 */
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

// <App/> 태그로 HTML을 반환하는 컴퍼넌트
function App() {
  return <div>
            <h1>Hello!</h1>

            {/*reference from lesson #2.0
              <Potato /> 
             */}

            {/* 
              reference from lesson #2.1 
              컴퍼넌트로 정보를 보내는 방법 fieldName = "{value}"
              boolean 값을 넘길 때 fieldName = {true} | {false}
              array를 넘길 때 fieldName = {[elem1, elem2, elem3...]}
            
            <Food fav="kimchi" 
              // boolTest={true}
              // arrayTest={[1, 2, 3, "Hello", "World!"]}
            />
            <Food fav="삼겹살" />
            <Food fav="ramen" />
            <Food fav="쭈꾸미" />
            */}

            {/*
              reference from lesson #2.2
              array.map()함수를 사용하여 동적으로 컴퍼넌트를 렌더링한다.
              map()함수는 array타입의 변수의 멤버들을 loop돌며 콜백함수에서 리턴한 값으로 변환하여 array를 재구성, 리턴한다.
            
              foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)
            */}
            {console.log(foodILike.map(renderFood))}
            {/*
              reference from lesson #2.3

            */
              
              foodILike.map(renderFood)
            }

         </div>;
}

export default App;
