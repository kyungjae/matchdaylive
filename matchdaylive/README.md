# MatchDay Live

스포츠 사이트 초안 (sports-first IA) 프로토타입.

## 범위 (v0.1.0)
- Home IA 구조 반영: Top / Live / Scores / Fixtures / Highlights / Leagues
- LIVE strip + Scores + Fixtures + League blocks
- 모바일 반응형

## 실행
정적 파일이라 `matchdaylive/src/index.html`을 브라우저에서 열면 됩니다.

## 페이지
- `src/index.html` : 홈
- `src/football.html` : 축구 섹션
- `src/basketball.html` : 농구 섹션
- `src/baseball.html` : 야구 섹션
- `src/match-detail.html` : 경기 상세
- `src/article.html` : 아티클(좌측 sticky 추천 목록 + 하단 연속 피드 + YouTube/X 임베드)
- `src/espn-style.html` : ESPN형 3단 레이아웃 홈

## 현재 상태 (v0.9.0)
- ESPN형 메인 홈 + 디테일 모듈 강화
- 상세 페이지 3열(좌/중/우 rail) 읽기 경험 적용
- SEO 기본 메타 + 광고 슬롯 구조(Top / Right / In-feed / Article rail) 적용

## 다음 단계 (v1.0.0 후보)
- 광고 스크립트(AdSense 등) 실제 연결
- 종목별 페이지를 동일 광고/SEO 구조로 통일
- 더미 데이터 → API 스키마 연결
