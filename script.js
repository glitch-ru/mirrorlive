fetch('/links.json')
  .then(r => r.json())
  .then(links => {
    let path = location.pathname.replace(/^\/+/, '');
    let parts = path.split('/');

    let name = parts.shift();
    let rest = parts.join('/');

    if (!name || !links[name]) {
      return;
    }

    let base = links[name].replace(/\/+$/, '');
    let target = base + (rest ? '/' + rest : '');

    location.replace(target);
  });
