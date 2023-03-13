# React Component Npm Publish

- React에서 공통 Component를 만들어서 여러 Repository에서 사용하기 위한 테스트

- Private은 유료라서 Public으로 배포

- minor version up 에서 npm publish를 진행하더라도 확실히 약 5분정도 배포시까지 시간이 소요됨

## https://www.npmjs.com/package/joker-sleep-await

- 참고글
  https://velog.io/@junghyeonsu/NPM-%EB%B0%B0%ED%8F%AC-%EC%96%B4%EB%A0%B5%EC%A7%80-[…]A%B5%AC%EA%B8%80-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-4%EA%B8%B0

### 사용

```
    "publish:npm": "rm -rf dist && mkdir dist && tsc",
    "prepare": "npm run publish:npm"
```

- prepare 스크립트를 추가해놓아야 합니다.

rm -rf dist 명령어로 dist폴더를 삭제하고
mkdir dist 명령어로 다시 dist 폴더를 만들고
다시 만들어진 폴더에 tsc 명령어로 컴파일을 진행해서 나온 파일들을 dist에 넣는 과정입니다.
npm 배포를 하기전에 실행하는 명령어 입니다.
