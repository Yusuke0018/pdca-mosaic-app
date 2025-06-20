/* sw.js  – キャッシュ担当 */
const CACHE = 'pdca-mosaic-v1';
const FILES = ['./', './index.html'];

/* インストール時に保存 */
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

/* 表示要求が来たら */
self.addEventListener('fetch', e => {
  const req = e.request;
  const wantsHTML = req.headers.get('accept')?.includes('text/html');

  if (wantsHTML) {
    // ネットがあれば最新を取り、失敗したら保存分
    e.respondWith(
      fetch(req)
        .then(res => caches.open(CACHE).then(c => (c.put(req, res.clone()), res)))
        .catch(() => caches.match(req)),
    );
  } else {
    // 画像や JS は保存分を先に返す
    e.respondWith(
      caches.match(req).then(
        cached =>
          fetch(req)
            .then(res => (caches.open(CACHE).then(c => c.put(req, res.clone())), res))
            .catch(() => cached),
      ),
    );
  }
});

/* 古いキャッシュを捨てる */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => k !== CACHE && caches.delete(k))),
    ),
  );
});
