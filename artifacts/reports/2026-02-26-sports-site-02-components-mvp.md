# Sports Site Components + MVP Priority

## Component Inventory

### A. Navigation
1. Global Header
2. Primary Nav Bar
3. Sports Tab Bar (sticky)
4. Breadcrumb (section/detail)

### B. Live/Score
5. Live Ticker Strip
6. Match Card (compact)
7. Match Card (expanded)
8. Score Mini Board
9. Fixture List Item
10. Match Status Badge (LIVE/HT/FT/NS)

### C. News/Media
11. Lead Story Card
12. Headline List Item
13. Article Card
14. Video Highlight Card
15. Tag Chip (리그/종목)

### D. Data Modules
16. Standings Table (compact)
17. Player Top Stats Module
18. Team Form Module (최근 5경기)
19. Timeline Event Item
20. Stat Comparison Bar

### E. Utility
21. Search Box
22. Notification Bell
23. Save/Follow Team Button
24. Pagination / Infinite load

---

## MVP Priority (Sprint 1)

### P0 (Must)
- Global Header
- Primary Nav Bar
- Sports Tab Bar
- Live Ticker Strip
- Match Card (compact)
- Score Mini Board
- Lead Story Card
- Headline List Item
- Match Status Badge

### P1 (Should)
- Fixture List Item
- Standings Table (compact)
- Video Highlight Card
- Timeline Event Item
- Tag Chip

### P2 (Could)
- Player Top Stats Module
- Team Form Module
- Stat Comparison Bar
- Follow Team Button
- Notification Bell

---

## MVP Screen Mapping
- Home: P0 100% + P1 일부
- Section(축구 등): P0 80% + P1 60%
- Match Detail: P1 중심(타임라인/기초스탯)

---

## Done Criteria (MVP)
1. 홈 상단에서 실시간 경기 3개 이상 노출
2. 종목 탭 전환 지연 200ms 이내(목표)
3. 스코어/상태 가독성 WCAG AA 대비 충족
4. 모바일에서 핵심 정보(스코어/시간/상태) first viewport 내 표시
