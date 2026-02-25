const liveMatches = [
  { teams: '맨시티 vs 아스널', score: '1 - 1', minute: '72’', status: 'LIVE', cls: 'live' },
  { teams: '서울 vs 울산', score: '2 - 1', minute: 'FT', status: 'FT', cls: 'ft' },
  { teams: 'LG vs KCC', score: '98 - 101', minute: 'Q4 02:18', status: 'LIVE', cls: 'live' },
  { teams: 'T1 vs GEN', score: '2 - 0', minute: 'SET 3', status: 'LIVE', cls: 'live' },
  { teams: '두산 vs SSG', score: '4 - 2', minute: '5회', status: 'HT', cls: 'ht' },
];

const root = document.getElementById('liveCards');
root.innerHTML = liveMatches
  .map(
    (m) => `
    <article class="live-card">
      <div class="teams">${m.teams}</div>
      <div class="score">${m.score}</div>
      <span class="status ${m.cls}">${m.status}</span>
      <small> ${m.minute}</small>
    </article>`
  )
  .join('');
