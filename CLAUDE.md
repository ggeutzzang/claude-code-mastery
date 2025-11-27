# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 저장소 목적

Claude Code를 마스터하고 AI 기반 개발 워크플로우를 탐구하기 위한 학습 저장소입니다. AI 지원을 받아 프로젝트를 빌드하는 실험 공간으로 활용됩니다.

## 현재 프로젝트: 개발자 웹 이력서

이 저장소의 주요 프로젝트는 다음 기술 스택으로 개발되는 개발자 웹 이력서입니다:
- HTML5
- CSS3
- Vanilla JavaScript
- Tailwind CSS

자세한 개발 계획은 ROADMAP.md를 참고하세요.

## 프로젝트 구조

프로젝트 개발 시 예상되는 구조:
```
project/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── profile.jpg
│   └── projects/
└── tailwind.config.js
```

## 개발 환경 설정

### 초기 설정
Tailwind CSS를 사용하는 정적 웹 프로젝트이므로 다음과 같이 설정합니다:

1. Tailwind CSS 설치:
```bash
npm install -D tailwindcss
npx tailwindcss init
```

2. `tailwind.config.js`에서 HTML 파일을 스캔하도록 설정

3. Tailwind CSS 빌드:
```bash
npx tailwindcss -i ./css/input.css -o ./css/styles.css --watch
```

### 개발 워크플로우
- 브라우저에서 `index.html`을 열거나 로컬 개발 서버 사용
- 개발 중 라이브 리로드를 위한 명령어:
```bash
# Python 사용
python -m http.server 8000

# Node.js http-server 사용
npx http-server
```

## 개발 가이드라인

### 단계별 개발
ROADMAP.md에 명시된 단계를 순차적으로 따릅니다:
1. 프로젝트 설정 및 Tailwind 구성
2. 기본 레이아웃 (Header, Navigation)
3. 콘텐츠 섹션 (About, Skills, Experience, Projects, Education, Certifications)
4. 인터랙티브 기능 (애니메이션, 스크롤 효과)
5. 스타일링 및 반응형 디자인
6. 성능 최적화
7. 배포 준비
8. 배포 (GitHub Pages, Netlify, 또는 Vercel)

### 반응형 디자인 브레이크포인트
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### 구현해야 할 주요 기능
- 부드러운 스크롤 애니메이션
- 섹션별 페이드인 효과
- 모바일 반응형 네비게이션
- 카드 및 버튼 호버 효과
- 선택사항: Dark/Light 모드 토글

## 테스트

배포 전 필수 테스트:
- 브라우저별 테스트 (Chrome, Firefox, Safari, Edge)
- 모바일 디바이스 테스트
- 반응형 브레이크포인트 확인
- 접근성 검사 (ARIA 레이블, 시맨틱 HTML)

## 배포

배포 옵션:
- GitHub Pages (이 프로젝트에 권장)
- Netlify
- Vercel

GitHub Pages 배포:
```bash
# main 브랜치에 코드가 있는지 확인
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# 저장소 설정에서 GitHub Pages 활성화 (Settings > Pages > Source: main branch)
```
