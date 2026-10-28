# ModuleFederation — micro-frontend dashboard POC

This file is the project's AI context. It replaces the chat history, which was deleted on 28 Oct 2026. Cursor, Kiro, Antigravity, and Claude Code read `AGENTS.md`. After any change that matters, update **History** and **Current state** here. Original build plan: [docs/ai-context/original-plan.md](docs/ai-context/original-plan.md). The user-facing explanation is in [README.md](README.md).

## Owner and working style

- Owner: Dinesh Kumar R (GitHub `dineshwondersoft-2509`). Built on a company-managed Windows 11 laptop (PowerShell). **No admin rights**: UAC prompts fail, so firewall rules cannot be added. Windows Firewall blocks inbound traffic on Public networks, and the user often works on a Pixel phone hotspot that isolates clients. LAN sharing therefore usually fails; use the gateway + Cloudflare tunnel described below.
- The user wants direct action, then a short plain-language result.

## Purpose

A **learning project**. The user (a frontend developer whose day job, NextGen POS, uses Webpack Module Federation) wanted to understand micro frontends hands-on and be able to explain them in interviews. Prefer explaining *why* over just changing code, and keep the example small and readable.

## Apps and ports

| App | Port | Tech | Role |
|---|---|---|---|
| `host` | 3000 | React 18.2, webpack 5 | Shell: sidebar, routes, dashboard counts. Consumes `users`, `orders`, `analytics`. |
| `users` | 3001 | React 18.2 | Exposes `./UsersApp` (list + detail with that user's orders). Runs standalone too. |
| `orders` | 3002 | React 18.2 | Exposes `./OrdersApp` (table, revenue, status breakdown) plus widgets. Standalone too. |
| `api` | 3003 | json-server 0.17 | `api/db.json`: `/users`, `/orders`, `/orders?userId=1` |
| `analytics` | 3004 | Angular 17, webpack | Exposes `./AnalyticsApp`; host mounts it through a DOM container wrapper. Itself consumes `users` and `orders`. Added after the original plan. |
| `gateway` | 8080 | Node `http-proxy` (`gateway/server.js`) | Single origin: `/` -> 3000, `/api` -> 3003, `/mf-users` -> 3001, `/mf-orders` -> 3002, `/mf-analytics` -> 3004. Listens on 127.0.0.1 only. |

## Run

```powershell
cd ModuleFederation
npm install          # npm workspaces: host, users, orders, analytics, api
npm run dev          # concurrently starts api, host, users, orders, analytics, gateway
npm run tunnel       # optional, second terminal: public https://*.trycloudflare.com link to the gateway
```

Open http://localhost:3000 (or http://localhost:8080 through the gateway). If ports 3000–3004 are still held by an old run, stop those node processes first.

## Key concepts implemented (the teaching points)

- Host `remotes` in `host/webpack.config.js`: `users@http://localhost:3001/remoteEntry.js`, `orders@...:3002/...`, `analytics@...:3004/...`. `name` must match the remote's container name; `filename: 'remoteEntry.js'` is the catalog file the host downloads (it is not the standalone page).
- `shared`: `react`, `react-dom`, `react-router-dom` as `singleton: true` with `requiredVersion` read from each `package.json`; Angular packages shared as singletons in `analytics`.
- `src/index.js` only does `import('./bootstrap')` so shared modules initialize before mounting.
- Error boundary + Suspense around each remote: stopping a remote leaves the shell running with a load error.
- npm workspaces handle disk installs; Module Federation `shared` handles what the browser loads. They are independent.
- The JSON API base is built from `window.location.hostname` + `:3003`, but host remote URLs are hard-coded to `localhost`. To use the dashboard from another computer, change the remote URLs to the PC's IP (or use the gateway + tunnel paths `/mf-users/remoteEntry.js`, etc.).

## Consuming these remotes from a Vite host

Webpack remotes are `var` containers, so `@originjs/vite-plugin-federation` does not work. Use `@module-federation/vite` with, per remote: `type: 'var'`, `name: 'users'`, `entry: 'http://localhost:3001/remoteEntry.js'`, `entryGlobalName: 'users'`, `shareScope: 'default'`; share React 18.2.0 / react-router-dom 6.22.3 as singletons; `build.target: 'chrome89'`. The user confirmed this worked on 21 Sep 2026.

## History

- 21 Sep 2026: built host + users + orders + api from the plan. Long explanation sessions on how pieces connect, `filename`/`remoteEntry.js`, exposing many modules (multiple `exposes` keys or a barrel), host-as-remote, and dependency management.
- 21 Sep: LAN sharing failed. The laptop was on a Pixel phone hotspot marked **Public** (Windows Firewall blocks inbound; hotspot isolates clients) and the user has no admin rights, so the firewall rule could not be added. Solution: the `gateway` on 8080 plus a Cloudflare quick tunnel (`npm run tunnel`). For admins, the firewall command is `netsh advfirewall firewall add rule name="MF Dashboard LAN" dir=in action=allow protocol=TCP localport=3000-3004`.
- After 21 Sep (outside the saved chat): Angular 17 `analytics` remote on 3004, orders widgets (`OrderSummaryWidget`, `RecentOrdersTable`).

## Current state

Working POC, nothing pending. Ideas mentioned but not built: Vite-based remotes, mixed-framework remotes beyond Angular, a shared UI library exposed from the host.
