# CampusLife 스터디 - 1주차 과제

기간 : 26.01.05~26.01.09
## 과제 상세
React 활용 미니 프로젝트
- 마감: 금요일(1월 9일) 23:59
- 제출: 소스 코드 + 보고서
- 요구 사항 : Login Component 구현 + state/props 사용
## 개발 보고
### 컴포넌트
- Login Component : 로그인 기능 수행
- Header Component : Login 시의 이메일 props로 받아 출력
### 기능
- Login : email, pw 입력 후 로그인 버튼 클릭, 미리 저장된 account 정보와 같으면 성공, 다르면 실패
### 구현법
- useState로 email, pw, login 여부 등을 관리하도록 함
- input에서 email, pw가 onChange될 때마다 값 갱신되도록 함
- email 데이터 자체는 App.jsx에 두어 Header와 공유되도록 함
- handleSubmit으로 로그인 여부를 판별하도록 함
- App.jsx에서 조건문 랜더링으로 isLogin이 true면 메인 화면을, false면 로그인 폼 화면을 띄우도록 함