# Micro Frontend Dashboard (Webpack Module Federation)

One dashboard product, React host app, React remotes, an Angular remote, and a local JSON API. The **host** owns the shell and routing. **Users**, **Orders**, and **Analytics (Angular)** are remotes loaded at runtime — they are not installed as npm packages.

```
Browser → Host (:3000)
            ├─ users/UsersApp       ← Users remote (:3001 - React)
            ├─ orders/OrdersApp     ← Orders remote (:3002 - React)
            └─ analytics/AnalyticsApp ← Analytics remote (:3004 - Angular 17)
                    ↓
            json-server (:3003)      ← api/db.json
```

## Run it

```bash
npm install
npm run dev
```

To finish the POC **on this laptop**, open **http://localhost:3000** (or **http://localhost:8080**). That does not need LAN or firewall.

If someone else must open it and inbound LAN is blocked, keep `npm run dev` running and in a second terminal:

```bash
npm run tunnel
```

That prints a `https://....trycloudflare.com` link (outbound only). Share that URL.

Then open:

| URL | What you see |
|---|---|
| http://localhost:3000 | Full dashboard (host + remotes) |
| http://localhost:3001 | Users app **standalone** (React) |
| http://localhost:3002 | Orders app **standalone** (React) |
| http://localhost:3004 | Analytics app **standalone** (Angular 17) |
| http://localhost:3003/users | JSON API |
| http://localhost:3003/orders | JSON API |

On another computer on the same Wi‑Fi/LAN, use this machine’s IPv4 (not `localhost`). Example when Wi‑Fi is `10.250.63.108`:

| URL | What you see |
|---|---|
| http://10.250.63.108:3000 | Full dashboard |
| http://10.250.63.108:3001 | Users standalone |
| http://10.250.63.108:3002 | Orders standalone |
| http://10.250.63.108:3004 | Analytics standalone (Angular) |

Remotes and the API follow `window.location.hostname`, so the other browser loads `:3001` / `:3002` / `:3004` / `:3003` on **this** PC. Allow inbound TCP 3000–3004 in Windows Firewall if the page does not load.

Stop any remote and refresh `/users`, `/orders`, or `/analytics` on the host: the shell stays up and shows a load error. That is Module Federation — the remote is fetched at runtime.

## What to look at

1. **`host/webpack.config.js`** — `remotes` point at `remoteEntry.js` on ports 3001, 3002, and 3004. `shared` marks `react`, `react-dom`, and `react-router-dom` as **singletons**.
2. **`users/webpack.config.js` / `orders/webpack.config.js` / `analytics/webpack.config.js`** — `exposes` publishes `./UsersApp`, `./OrdersApp`, and `./AnalyticsApp`. The host imports React remotes with `React.lazy()` and mounts the Angular remote via a DOM container wrapper.
3. **`src/index.js` → `import('./bootstrap')`** — required MF pattern. Shared modules must initialize before host mounts.
4. **Standalone vs composed** — each remote has its own `index.html` and `bootstrap`, so a team can work on Analytics without running the host.

## Apps

| App | Port | Role | Tech |
|---|---|---|---|
| `host` | 3000 | Shell: sidebar, header, routes, dashboard counts | React |
| `users` | 3001 | User list + detail (also shows that user's orders) | React |
| `orders` | 3002 | Order table + simple totals | React |
| `analytics` | 3004 | Analytics & Intelligence Dashboard | Angular 17 |
| `api` | 3003 | `json-server` from `api/db.json` | Express / JSON Server |

