# 링크나무

Linktree처럼 내 모든 링크를 한 페이지에 모아두고 하나의 URL로 공유하는 서비스입니다.

## 시작하기

1. 의존성 설치

   ```bash
   npm install
   ```

2. 환경 변수 설정

   `.env.local` 파일에 MongoDB Atlas 연결 정보를 입력합니다 (커밋되지 않습니다).

   ```
   MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/?retryWrites=true&w=majority
   MONGODB_DB=linknamu
   ```

   `MONGODB_URI`가 비어 있으면 링크 클릭 수 집계만 건너뛰고, 나머지 기능(프로필, 링크 카드, 다크모드)은 정상 동작합니다.

3. 개발 서버 실행

   ```bash
   npm run dev
   ```

   [http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## 프로필 · 링크 편집

[src/lib/site-config.ts](src/lib/site-config.ts) 에서 프로필 정보와 링크 목록을 수정합니다.

## 기술 스택

- Next.js (App Router)
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)
- Vercel (배포)

## 배포

[Vercel](https://vercel.com/new) 에 연결한 뒤, 프로젝트 설정의 Environment Variables에 `MONGODB_URI`(와 필요 시 `MONGODB_DB`)를 등록합니다.
