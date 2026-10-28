import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import RemoteWrapper from './components/RemoteWrapper';
import AngularRemoteWrapper from './components/AngularRemoteWrapper';
import Dashboard from './pages/Dashboard';

const UsersApp = React.lazy(() => import('users/UsersApp'));
const OrdersApp = React.lazy(() => import('orders/OrdersApp'));

export default function App() {
  return (
    <BrowserRouter>
      <div className="shell">
        <aside className="sidebar">
          <div className="brand">
            <span>MF Dashboard</span>
            <small>Module Federation</small>
          </div>
          <nav>
            <NavLink to="/" end>
              Dashboard
            </NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/analytics">Analytics (Angular)</NavLink>
          </nav>
          <p className="sidebar-note">
            Host :3000
            <br />
            Users :3001
            <br />
            Orders :3002
            <br />
            API :3003
            <br />
            Analytics :3004 (Angular)
          </p>
        </aside>
        <div className="main">
          <header className="topbar">
            <span>Local JSON API at localhost:3003</span>
          </header>
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/users/*"
                element={
                  <RemoteWrapper name="Users">
                    <UsersApp />
                  </RemoteWrapper>
                }
              />
              <Route
                path="/orders/*"
                element={
                  <RemoteWrapper name="Orders">
                    <OrdersApp />
                  </RemoteWrapper>
                }
              />
              <Route
                path="/analytics/*"
                element={
                  <RemoteWrapper name="Analytics (Angular)">
                    <AngularRemoteWrapper />
                  </RemoteWrapper>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

