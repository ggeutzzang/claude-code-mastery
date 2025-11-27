# 개발자 웹 이력서

HTML, CSS, JavaScript, Tailwind CSS로 제작된 반응형 개발자 웹 이력서입니다.

## 기능

- ✅ 완전 반응형 디자인 (모바일/태블릿/데스크탑)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 상단으로 스크롤 버튼
- ✅ 현대적인 UI/UX (Tailwind CSS)
- ✅ SEO 최적화
- ✅ 접근성 고려 (ARIA labels, semantic HTML)

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 모드

```bash
# CSS 빌드 (개발)
npm run build:css

# CSS 빌드 (watch 모드)
npm run watch:css
```

### 프로덕션 빌드

```bash
npm run build:prod
```

### 로컬 서버 실행

```bash
# Python 사용
python -m http.server 8000

# Node.js http-server 사용
npx http-server
```

브라우저에서 `http://localhost:8000` 열기

## 프로젝트 구조

```
web-resume/
├── index.html          # 메인 HTML 파일
├── css/
│   ├── input.css      # Tailwind 소스
│   └── styles.css     # 컴파일된 CSS (자동 생성)
├── js/
│   └── main.js        # JavaScript (애니메이션, 인터랙션)
├── images/            # 이미지 폴더
├── tailwind.config.js # Tailwind 설정
└── package.json       # npm 설정
```

## 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - Tailwind CSS (유틸리티 우선)
- **JavaScript** - Vanilla JS (Intersection Observer)
- **Build** - Tailwind CLI

## 섹션

1. **헤더** - 프로필, 연락처, 소셜 링크
2. **소개** - 간단한 자기소개 및 하이라이트
3. **기술 스택** - 프론트엔드, 백엔드, 도구 (진행률 바 포함)
4. **경력** - 3개 회사 경력 사항
5. **프로젝트** - 3개 주요 프로젝트 쇼케이스
6. **학력** - 학사 학위 정보
7. **자격증** - 3개 자격증

## 커스터마이징

### 색상 테마 변경

`tailwind.config.js` 파일에서 primary 색상을 변경할 수 있습니다:

```javascript
colors: {
  primary: {
    // 원하는 색상으로 변경
  }
}
```

### 내용 수정

`index.html` 파일에서 개인 정보를 수정하세요:
- 이름, 직무, 연락처
- 경력 사항
- 프로젝트 정보
- 학력 및 자격증

## 라이선스

MIT
