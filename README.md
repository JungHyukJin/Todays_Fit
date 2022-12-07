# Today's Fit - 온라인 의류 쇼핑몰 ( 2022.12.06 )

> ### 기술 스택 : React.JS, Cloudinary, Firebase, 
> ### 스타일링 : tailwind

### 환경 설정
```
// 리액트 라우터, 리액트 아이콘 사용 설정
$ yarn add react-router-dom react-icons

// 스타일링
$ yarn add -D tailwindcss
$ npx tailwindcss init

// firebase 연동
$ yarn add firebase

```

### Tailwind css 사용법
- $ npx tailwindcss init 후에 아래와 같이 환경설정이 따로 필요하다.
```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx}'], // 이 부분을 추가해줘야 한다.
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css
/* index.css */

/* index.css 최상단에 아래의 세가지 설정을 해줘야한다. */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```



## 주요기능:

