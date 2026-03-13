#!/usr/bin/env node
const http = require('http');

const PORT = Number(process.env.PORT || 8787);
let state = {
  surah: 1,
  ayah: 1,
  autoplay: false,
  interval: 8,
  autoplayMode: 'timer',
  reciter: '05',
  seq: 0,
  source: 'server',
  t: Date.now()
};

function sendJson(res, code, payload) {
  res.writeHead(code, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(payload));
}

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') return sendJson(res, 200, { ok: true });

  if (req.url === '/health') return sendJson(res, 200, { ok: true, port: PORT });

  if (req.url !== '/state') return sendJson(res, 404, { ok: false, message: 'Not found' });

  if (req.method === 'GET') return sendJson(res, 200, { ok: true, state });

  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 2e6) req.destroy();
    });
    req.on('end', () => {
      try {
        const next = JSON.parse(body || '{}');
        if (!next || typeof next !== 'object') return sendJson(res, 400, { ok: false, message: 'Invalid payload' });
        state = { ...state, ...next, t: Number(next.t) || Date.now() };
        return sendJson(res, 200, { ok: true, state });
      } catch {
        return sendJson(res, 400, { ok: false, message: 'Invalid JSON' });
      }
    });
    return;
  }

  return sendJson(res, 405, { ok: false, message: 'Method not allowed' });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Quran sync server running on http://0.0.0.0:${PORT}`);
});
