const sideItems = [
  'NBA 파워랭킹: 우승 경쟁 5강',
  'KBO 개막 로스터 핵심 변수 3가지',
  '챔스 16강 관전 포인트',
  'LCK 신인 미드 데뷔전 분석',
  '주말 빅매치 프리뷰',
  '감독 인터뷰: 전술 변화의 배경',
  '데이터로 본 득점 기대값 Top10',
  '오늘의 이적시장 브리핑',
];

const feedPool = [
  '맨시티, 세트피스 한 방으로 승점 3점',
  '덴버, 백투백 일정에서도 수비 효율 1위',
  '두산 불펜 운영, 후반기 변수 될까',
  '라리가 우승 경쟁, 남은 10경기의 의미',
  'KBL PO 시나리오 총정리',
  'MLB 개막 로테이션 예상',
  '유럽 원정에서 강한 팀의 공통점',
  '주중 일정이 리그 순위에 미치는 영향',
];

const sideRoot = document.getElementById('sideList');
sideRoot.innerHTML = sideItems.map((t) => `<li><a href="#">${t}</a></li>`).join('');

const feedList = document.getElementById('feedList');
const sentinel = document.getElementById('feedSentinel');
let page = 0;

function appendFeedBatch() {
  const chunk = feedPool.map((t, i) => ({ title: t, idx: page * feedPool.length + i + 1 }));
  const html = chunk
    .map(
      (item) => `
      <article class="next-card">
        <span class="tag">NEXT ${item.idx}</span>
        <h3>${item.title}</h3>
        <p>핵심 포인트 3줄 요약과 경기 흐름 분석을 제공합니다.</p>
      </article>`
    )
    .join('');
  feedList.insertAdjacentHTML('beforeend', html);
  page += 1;
}

appendFeedBatch();
appendFeedBatch();

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      appendFeedBatch();
    }
  });
}, { rootMargin: '200px' });

io.observe(sentinel);
