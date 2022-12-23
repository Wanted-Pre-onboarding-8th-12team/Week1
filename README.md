# 동료학습을 통해서 인턴쉽 선발 과제 Best Practice 만들기

## 📕 개요

**📎[배포링크 바로가기]()**

### 과제 목적

1. 동료학습에 익숙해지기
2. 문제 해결 방법에 대해 토론하기
3. Git Commit Message, History 관리, 협업 툴을 사용해서 협업에 익숙해지기

### 기간

2022년 12월 20일(화) - 2022년 12월 23일(금)

---

## 👨‍👩‍👧‍👦 Members

| 류지창                                                                                           | 박준하                                                                                          | 백광천                                                                                          | 유제원                                                                                          | 정세연                                                                                          | 조영일                                                                                          |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/104156381?s=70&v=4" width="160" height="160"/> | <img src="https://avatars.githubusercontent.com/u/85827017?s=70&v=4" width="160" height="160"/> | <img src="https://avatars.githubusercontent.com/u/82658528?s=70&v=4" width="160" height="160"/> | <img src="https://avatars.githubusercontent.com/u/96014828?s=70&v=4" width="160" height="160"/> | <img src="https://avatars.githubusercontent.com/u/79056677?s=70&v=4" width="160" height="160"/> | <img src="https://avatars.githubusercontent.com/u/86599495?s=70&v=4" width="160" height="160"/> |
| [RyuJiChang](https://github.com/RyuJiChang)                                                      | [harseille](https://github.com/harseille)                                                       | [back0202](https://github.com/back0202)                                                         | [LLSJYY](https://github.com/LLSJYY)                                                             | [n0eyes](https://github.com/n0eyes)                                                             | [young1the](https://github.com/young1the)                                                       |

---

## 🖥 Demo
회원가입 동작 시연<br><br>
![회원가입 동작](https://user-images.githubusercontent.com/104156381/209335798-d4a47629-b334-4547-b903-ab61fb4669c8.gif)<br><br><br><br>
로그인 동작 시연<br><br>
![로그인 동작](https://user-images.githubusercontent.com/104156381/209335797-f4f078b8-d386-4991-9e20-aa4b996dda81.gif)<br><br><br><br>
CRUD, 체크박스 동작 시연<br><br>
![CRUD 및 체크박스 동작](https://user-images.githubusercontent.com/104156381/209335791-5dfe67af-9fb4-4b49-9837-fe3e6c926e54.gif)<br><br><br><br>
리다이렉트 동작 시연<br><br>
![리다이렉트 동작](https://user-images.githubusercontent.com/104156381/209335789-1955c84f-fa10-4ec4-8c3a-f17277ac5aad.gif)
---

## ⚡️ 사용 라이브러리

1. TypeScript
2. React
3. React-router-dom
4. Styled-components
5. Axios
6. Craco
7. ESLint
8. Prettier
9. Husky
10. Lint-staged

---

## ✅ 요구사항

### 1) Auth

- 이메일과 비밀번호의 유효성 검사
  - 이메일 조건: `@` 포함, 비밀번호 조건: 8자 이상
  - 입력된 이메일과 비밀번호가 위 조건을 만족할 때 버튼 활성화
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동
  - 응답받은 JWT는 로컬 스토리지에 저장
- 로그인 여부에 따른 리다이렉트 처리
  - 로컬 스토리지에 토큰이 있는 경우 `/` 페이지 접속시 `/todo` 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 경우 `/todo` 페이지 접속시 `/` 경로로 리다이렉트
- 로그아웃 시 로컬 스토리지에서 토큰 삭제 후 `/` 경로로 이동

### 2) Todo list

- 조회 / 추가
  - `/todo` 경로에 접속하면 투두 리스트의 목록 조회
  - 투두 리스트 내용 및 완료 여부 표시
  - 입력창과 추가버튼이 있고, 추가버튼 클릭시 입력창의 내용이 새로운 투두 리스트로 추가
- 삭제 / 수정
  - 수정버튼 존재, 해당 버튼을 누르면 수정모드 활성화, 내용 수정가능
  - 수정모드에서 제출 버튼과 취소버튼이 표시되며 수정 내용 제출/취소 가능
  - 삭제버튼 존재, 해당 버튼을 누르면 투두 리스트 삭제

---

## 🐙 Git

| rule     | 설명                                                     |
| -------- | -------------------------------------------------------- |
| feat     | 새로운 기능 추가                                         |
| fix      | 버그 수정                                                |
| !HOTFIX  | 급하게 치명적인 버그를 고쳐야하는 경우                   |
| docs     | 문서 수정                                                |
| style    | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우 |
| refactor | 코드 리팩토링                                            |
| test     | 테스트 코드, 리팩토링 테스트 코드 추가                   |
| chore    | 빌드 업무 수정, 패키지 매니저 수정                       |

- ### 📘 **Git branch strategy**

**git-flow** 사용

- feature branches
- develop
- release branches
- hotfixes
- main

branch명 규칙: `커밋 타입`/#`이슈번호` 포멧으로 생성
commit 메시지 규칙: `커밋타입`: `내용` 포멧으로 작성

---

## 👍 Best Practice

### 1. 초기 세팅

#### 사용 라이브러리

1. TypeScript
   TypeScript는 취업 시에 필수적인 기술스텍
   TypeScript 사용에 **익숙해지기**위해서 사용하는 것으로 결정

2. React-router-dom@6.5
   이전 버전과 다른 방식의 동작원리인 react-router-dom@6.5에 적응하가 위해서 사용
   `loader`, `action`, 'RouterForm' 등 기능을 사용하여 코드를 간결하게 작성한다.

```ts
// action 사용 예시
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<Error />}>
      <Route element={<App />}>
        <Route
          index
          element={
            <Auth to='/todo' login={true}>
              <Login />
            </Auth>
          }
          action={loginAction}
        />
        ...
      </Route>
    </Route>,
  ),
);
```

```ts
// RouterForm 사용 예신
import { Form as RouterForm } from "react-router-dom";

type Unpacked<T> = T extends React.ForwardRefExoticComponent<infer U> ? U : T;

function Form({ children, ...props }: PropsWithChildren<Unpacked<typeof RouterForm>>) {
  return <Styled.Form {...props}>{children}</Styled.Form>;
}
```

3. ESLint
   의존성을 고려해서 import/order를 설정

```json
"import/order": [
  "error",
  {
    "groups": ["builtin", "external", "internal", "index"],
    "pathGroups": [
      {
        "pattern": "react",
        "group": "external",
        "position": "before"
      },
      {
        "pattern": "@*/**",
        "group": "internal"
      },
      {
        "pattern": "./**",
        "group": "index"
      }
    ],
    "pathGroupsExcludedImportTypes": ["react"],
    "alphabetize": {
      "order": "asc"
    },
    "newlines-between": "always"
  }
],
```

### 라우팅

**인증/인가 처리**
`Auth` 컴포넌트를 페이지 상단에 두어 authorization을 체크한다.

```tsx
// Auth 컴포넌트의 child에 login일 필요 여부를 props로 내린다.
<Route
  path='join'
  element={
    <Auth to='/todo' login={true}>
      <Join />
    </Auth>
  }
/>
<Route
  path='todo'
  element={
    <Auth to='/' login={false}>
      <ToDo />
    </Auth>
  }
/>
```

```tsx
const Auth = (props: PropsWithChildren<AuthProps>): JSX.Element => {
  const { children, to, login } = props;
  const user = localStorage.getItem("user");

  if (login && user) return <Navigate to={to} replace />;
  if (!login && !user) return <Navigate to={to} replace />;

  return <>{children}</>;
};
```

### 페이지 컴포넌트 분리

### 디렉토리 구조

### API 연동

1. **Axios 공통 로직 분리**
   REST API 통신과 에러처리를 위해 반복되는 로직 부분을 하나의 함수로 만들어서 재사용성 증대

```ts
export async function to<T>(promise: Promise<T>): Promise<[null, T] | [unknown, null]> {
  try {
    return [null, await promise];
  } catch (error) {
    if (axios.isAxiosError(error)) alert(error.response?.data.message);
    else throw error;

    return [error, null];
  }
}
```

2. 관심사에 따른 request 요청 분리
   유지보수성을 높이기 위해 관심사를 분리하여 api 요청을 관리했다.

```ts
// Auth
export async function join({ email, password }: AuthRequest) {
  const { data } = await client.post<AuthResponse>(PATH.JOIN, { ... });

  return data;
}

export async function login({ email, password }: AuthRequest) {
  const { data } = await client.post<AuthResponse>(PATH.LOGIN, { ... });

  localStorage.setItem("user", data.access_token);
  client.defaults.headers["Authorization"] = `Bearer ${data.access_token}`;

  return data;
}
```

```ts
// Todo
export const getToDo = async () => {
  const { data } = await client<GetToDoResponse>(PATH.GET_TODO);

  return data;
};

export const createToDo = async (payload: CreateToDoRequest) => {
  const { data } = await client.post<CreateToDoResponse>(PATH.CREATE_TODO, payload);

  return data;
};

export const updateToDo = async ({ id, todo, isCompleted }: UpdateToDoRequest) => {
  const { data } = await client.put<UpdateToDoResponse>(`${PATH.UPDATE_TODO}/${id}`, {
    todo,
    isCompleted,
  });

  return data;
};

export const deleteToDo = async ({ id }: DeleteToDoRequest) => {
  const { data } = await client.delete<DeleteToDoResponse>(`${PATH.DELETE_TODO}/${id}`);

  return data;
};
```

### 최적화

---

## 📢 프로젝트 실행방법

실행할 때 반드시 다음 파일을 최상단에 생성후 실행 해주셔야 합니다.

```
// .env
REACT_APP_BASE_URL=https://pre-onboarding-selection-task.shop
```

```
npm install
npm start
```

## 📝 문서

[회의록](https://www.notion.so/43f61c18daaf4db68d62863ea539dbf4)
