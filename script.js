fetch('/links.json')
  .then(r => r.json())
  .then(links => {
    let params = new URLSearchParams(location.search);
    let path = params.get('path');

    if (!path) return;

    let parts = path.split('/').filter(Boolean);
    let name = parts.shift();
    let rest = parts.join('/');

    if (!links[name]) return;

    let base = links[name].replace(/\/+$/, '');
    let target = base + (rest ? '/' + rest : '');

    location.replace(target);
  });
