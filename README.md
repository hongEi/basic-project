# 전체 구조 개요
## 루트 디렉토리: basic-project
+ 클라이언트: basic-client (Next.js, 앱 라우터 방식)
+ 서버: basic-server (Nest.js)
## 목적:
+ basic-client: 사용자 인터페이스(예: 로그인 페이지)를 제공.
+ basic-server: API 서버로, 클라이언트 요청(예: 로그인 데이터)을 처리.
+ 두 프로젝트를 동시에 실행하고 통신 가능하도록 설정.
# 디렉토리 구조

```
basic-project/
├── basic-client/         # Next.js 클라이언트 프로젝트
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx  # 페이지
│   │   │   └── ...       # 기타 앱 라우터 파일
│   ├── package.json
│   └── ...
├── basic-server/         # Nest.js 서버 프로젝트
│   ├── src/
│   │   ├── app.controller.ts  # API 엔드포인트
│   │   ├── app.module.ts
│   │   ├── main.ts       # 서버 설정
│   │   └── ...
│   ├── package.json
│   └── ...
├── .gitignore            # Git 제외 설정
└── package.json          # 루트에서 concurrently 실행용 (선택)
```

## 설명
이 프로젝트는 Next.js 기반의 클라이언트(`basic-client/`)와 Nest.js 기반의 서버(`basic-server/`)로 구성되어 있습니다.

### 📂 `basic-client/`
- **Next.js** 기반의 프론트엔드 프로젝트입니다.
- 주요 폴더 및 파일:
  - `src/app/page.tsx` - 로그인 페이지
  - `package.json` - 프론트엔드 패키지 정보
    
- 설정:
  - Next.js의 앱 라우터 방식 사용 (src/app/ 디렉토리 기반).
  - 기본 포트: 3000.
  
### 📂 `basic-server/`
- **Nest.js** 기반의 백엔드 프로젝트입니다.
- 주요 폴더 및 파일:
  - `src/app.controller.ts` - API 엔드포인트 정의
  - `src/main.ts` - 서버 설정 파일
  - `package.json` - 백엔드 패키지 정보
    
- 설정:
  - 포트: 3001 (Next.js와 충돌 방지).
  - CORS 활성화: 클라이언트 요청 허용.
    
### 기타 파일
- `.gitignore` - Git에 추가되지 않을 파일 목록
- `package.json` (루트) - 클라이언트와 서버를 동시에 실행하기 위한 설정 (선택 사항)
