# react-movie-web-service

# ReactJS로 영화 웹 서비스 만들기
* NomadCoders의 ReactJS로 영화 앱서비스 만들기 강좌를 공부하기 위한 리포지토리입니다.

# Set-up
* Node.js v{10||12}
  * 버전이 다운로드 안될 때 참조한 [사이트](https://avisynth.tistory.com/23)
* [NPX](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b#:~:text=npx%20is%20a%20tool%20intended,executables%20hosted%20on%20the%20registry.) 설치 `npm install npx -g`
* `npx create-react-app {프로젝트명}`으로 리액트 앱 생성
* 생성 된 파일 중 `package.json`파일 내부의 "scripts" 항목 중 `test`와 `eject` 항목 삭제

# 문제 해결 사항
* `npx create-react-app {프로젝트명}`이 안될 시 `npm init react-app {프로젝트명}`으로 해결