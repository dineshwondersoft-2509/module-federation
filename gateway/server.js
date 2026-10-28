const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({ ws: true, changeOrigin: true });

proxy.on('error', (err, _req, res) => {
  console.error('[gateway]', err.message);
  if (res && !res.headersSent && typeof res.writeHead === 'function') {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Gateway: start the apps with npm run dev, then retry.');
  }
});

function stripPrefix(url, prefix) {
  const next = url.slice(prefix.length) || '/';
  return next.startsWith('/') ? next : `/${next}`;
}

function route(url) {
  if (url.startsWith('/api')) {
    return { target: 'http://127.0.0.1:3003', prefix: '/api' };
  }
  if (url.startsWith('/mf-users')) {
    return { target: 'http://127.0.0.1:3001', prefix: '/mf-users' };
  }
  if (url.startsWith('/mf-orders')) {
    return { target: 'http://127.0.0.1:3002', prefix: '/mf-orders' };
  }
  if (url.startsWith('/mf-analytics')) {
    return { target: 'http://127.0.0.1:3004', prefix: '/mf-analytics' };
  }
  return { target: 'http://127.0.0.1:3000', prefix: null };
}

const server = http.createServer((req, res) => {
  const { target, prefix } = route(req.url);
  if (prefix) {
    req.url = stripPrefix(req.url, prefix);
  }
  proxy.web(req, res, { target });
});

server.on('upgrade', (req, socket, head) => {
  const { target, prefix } = route(req.url);
  if (prefix) {
    req.url = stripPrefix(req.url, prefix);
  }
  proxy.ws(req, socket, head, { target });
});

const port = Number(process.env.GATEWAY_PORT || 8080);
server.listen(port, '127.0.0.1', () => {
  console.log(`POC gateway http://localhost:${port}`);
  console.log('On this laptop use that URL, or npm run tunnel for a public demo link.');
});
