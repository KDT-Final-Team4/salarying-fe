# Final Project

채용절차 서비스 개발
배포 : https://salarying-7jqpcr53x-isaacteam.vercel.app/

## 기능

UI/UX : 상세 기획안 및 디자인 시안  
FE : 기획 및 디자인본에 따른 페이지 설계 및 구현  
BE : 회원/비회원 DB 설계, 기업별 채용절차 설정값 DB 설계, 기업별 지원자 DB 설계 등

### 요구사항

- [ ] 회원가입 (고객=우리들, 관리자=기업)
- [ ] 회원정보 입력
- [ ] 결제 서비스

입사지원자

- [ ] 회원/비회원으로 회원인 기업에 지원할 수 있어야 함.
- [ ] 자료를 제출한다.
- [ ] 통지(알람) 받을 수 있다.

기업

- [ ] 채용절차 상의 일정을 수정할 수 있어야 한다.
- [ ] 전형 단계에 따른 안내가 입사지원자에게 전달돼야 한다.

회원관리자

- [ ] 약관관리를 할 수 있다.
- [ ] 회원관리를 할 수 있다.
- [ ] 통계

기업

- [ ] 지원자 관리 (기획 추가 보완)
- [ ] 채용절차 관리

### 상세 요구사항

#### 비밀번호 규칙

관리자 계정

- 유효기간 : 90일
- 영문 대소문자, 숫자, 특수문자 조합
  - 3종류 이상 조합시 8자리 이상
  - 2종류 이상 조합시 10자리 이상
- 현재 비밀번호와 동일한 비밀번호 사용 금지
- 최근 사용된 비밀번호 재사용 금지 (최근 3회)
- 전화번호, 아이디가 포함된 설정 금지

고객 계정

- 유효기간: 90일
- 영문 대소문자, 숫자, 특수문자 조합
  - 2종류 이상 조합하여 8자리 이상

#### 휴면 : 1년간 미접속 시 휴면 전환

#### 자동 탈퇴 : 휴면이 1년간 지속되는 경우

## script

- `npm run dev` : 개발모드로 NextJS 를 시작합니다.
- `npm run build` : 어플리케이션을 빌드합니다.
- `npm start` : NextJS production server 를 시작합니다.
- `npm run lint` : 내장된 ESLint configuration 을 셋업합니다.

## 폴더

- `pages` : 파일 이름을 기준으로 경로와 연결됩니다. 예를 들어 `pages/about.ts`는 `/about`에 매핑됩니다`
- `public` : 이미지, 글꼴 등의 정적 assets들을 저장합니다. 그런 다음 `public` 디렉토리에 있는 파일을 기본 URL(`/`)에서 시작하는 코드로 참조할 수 있습니다.
- `styles` : css 파일을 저장합니다.
- `libs` : 공통적으로 사용하는 유틸리티 함수를 모듈화해서 저장합니다. 여러 모듈에서 공유하는 코드들을 저장하는 장소로 사용할 수 있습니다.
- `images` 이미지 파일을 저장합니다.
- `components` : 컴포넌트를 저장하는 폴더입니다.
- `types.d.ts` : 전역적으로 typescript 의 모듈,타입,인터페이스 등을 선언하는데 사용하는 파일입니다. (전역 타입이기 때문에 타입의 이름이 중복되지 않게 주의해야 합니다.)
-

## 적용

- eslint : next의 추천설정사용[base]
- prettier : next에서 추천설정 사용[eslint-config-prettier]
- firebase
- uuid : 고유식별자 만들기
- react-hook-form
- react-query
- react-query-devtools : RQ 쿼리 시각화
- axios
- styled-component
- jest

## 페이지

- 로그인페이지: /login
- 회원가입페이지: /signup
- 공지사항: /notice
- 관리자페이지: /admin
  - 약관관리: /admin/terms
  - 기업회원 관리: /admin/company-membership
  - 마이페이지: /admin/mypage
- 기업페이지: /company
  - 마이페이지: /company/mypage
  - 공고관리페이지: /company/job-posting
  - 알림서비스페이지: /company/notification
  - 지원자관리 페이지: /company/applicant-management
- 커뮤니티 페이지: /community
  - FAQ: /community/faq
  -
