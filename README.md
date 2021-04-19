# ReactJS로 영화 웹 서비스 만들기

* NomadCoders의 ReactJS로 영화 앱서비스 만들기 강좌를 공부하기 위한 리포지토리입니다.

## :computer: Set-up

* Node.js 버전 10 또는 12 설치
* [NPX](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b#:~:text=npx%20is%20a%20tool%20intended,executables%20hosted%20on%20the%20registry.) 설치 `npm install npx -g`
* `npx create-react-app {프로젝트명}`으로 리액트 앱 생성
* 생성 된 파일 중 `package.json`파일 내부의 "scripts" 항목 중 `test`와 `eject` 항목 삭제

## :thumbsup: Cool thing about ReactJS

* Virtual Document Object Model(VDOM) - Element를 해당 Target id를 가진 태그를 찾아 그 안에 element를 렌더링한다 [App Element 참조](src/App.js) [Target 참조](src/index.js)
* Reusable - `Component`를 재사용할 수 있음!! :thumbsup:

### Component

* [index.js](src/index.js)내부의 `ReactDOM.render()`함수 내부의 `<App />`태그는 컴퍼넌트*Component*라 불리며, 이 컴퍼넌트는 HTML을 반환하는 각각의 자바스크립트 함수([App.js](src/App.js))로 인하여 렌더링 된다.
* *Javascript*와 *HTML*의 조합을 할 때 사용하는 파일 확장자를 `*.jsx`를 사용한다.(react에서 파생된 개념)

## :wrench: 문제 해결 사항

* NodeJS 12 버전이 우분투에 설치가 되지 않아 참조한 [사이트](https://avisynth.tistory.com/23)
* `npx create-react-app {프로젝트명}`이 안될 시 `npm init react-app {프로젝트명}`으로 해결