fetch('/links.json')
  .then(r => r.json())
  .then(links => {
    let params = new URLSearchParams(location.search);
    let path = params.get('path') || '';
    let parts = path.split('/').filter(Boolean);

    let name = parts.shift();      // mirror1
    let rest = parts.join('/');    // news/2025/11/24/name

    if (!name || !links[name]) {
      return;
    }

    let base = links[name].replace(/\/+$/, '');
    let target = base + (rest ? '/' + rest : '');

    location.replace(target);
  });
