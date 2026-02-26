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

// Embed tool (YouTube / X / direct media)
const input = document.getElementById('linkInput');
const renderBtn = document.getElementById('renderEmbeds');
const output = document.getElementById('embedOutput');

function extractYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1);
    if (u.pathname.startsWith('/shorts/')) return u.pathname.split('/')[2];
    return u.searchParams.get('v');
  } catch {
    return null;
  }
}

function isXUrl(url) {
  return /https?:\/\/(x\.com|twitter\.com)\/.+\/status\/\d+/i.test(url);
}

function ensureXScript() {
  if (document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://platform.twitter.com/widgets.js';
  document.body.appendChild(s);
}

function renderOne(url) {
  const clean = url.trim();
  if (!clean) return '';

  const ytId = extractYouTubeId(clean);
  if (ytId) {
    return `<div class="embed-card"><iframe src="https://www.youtube.com/embed/${ytId}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
  }

  if (isXUrl(clean)) {
    ensureXScript();
    return `<div class="embed-card"><blockquote class="twitter-tweet"><a href="${clean}">${clean}</a></blockquote></div>`;
  }

  if (/\.(png|jpe?g|gif|webp|avif)(\?.*)?$/i.test(clean)) {
    return `<div class="embed-card"><img src="${clean}" alt="embedded image" loading="lazy" /></div>`;
  }

  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(clean)) {
    return `<div class="embed-card"><video controls playsinline src="${clean}"></video></div>`;
  }

  return `<div class="embed-card"><a href="${clean}" target="_blank" rel="noopener">${clean}</a></div>`;
}

renderBtn?.addEventListener('click', () => {
  const urls = input.value.split(/\n+/).map((v) => v.trim()).filter(Boolean);
  output.innerHTML = urls.map(renderOne).join('');
  if (window.twttr?.widgets?.load) window.twttr.widgets.load();
});
