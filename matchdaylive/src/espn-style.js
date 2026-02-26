const games = [
  'OKC 34 - 22 DET · 2Q',
  'SA 28 - 26 TOR · 2Q',
  'GS 31 - 33 HOU · 1Q',
  'CLE 37 - 33 MIL · 2Q',
  'BOS 38 - 19 DEN · 1Q',
  'UGA 64 - 58 FLA · HT',
];

document.getElementById('tickerTrack').innerHTML = games
  .map((g) => `<div class="ticker-item">${g}</div>`)
  .join('');
