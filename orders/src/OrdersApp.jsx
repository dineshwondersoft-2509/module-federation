import { useEffect, useMemo, useState } from 'react';
import { getOrders, getUsers } from './api';
import './styles.css';

function formatMoney(amount) {
  return `$${Number(amount).toFixed(2)}`;
}

export default function OrdersApp() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getOrders(), getUsers()])
      .then(([nextOrders, nextUsers]) => {
        setOrders(nextOrders);
        setUsers(nextUsers);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const userNames = useMemo(() => {
    return Object.fromEntries(users.map((user) => [user.id, user.name]));
  }, [users]);

  const stats = useMemo(() => {
    const byStatus = { paid: 0, pending: 0, refunded: 0 };
    let revenue = 0;
    orders.forEach((order) => {
      byStatus[order.status] = (byStatus[order.status] || 0) + 1;
      if (order.status === 'paid') {
        revenue += Number(order.amount);
      }
    });
    const maxStatus = Math.max(...Object.values(byStatus), 1);
    return { byStatus, revenue, maxStatus, total: orders.length };
  }, [orders]);

  if (loading) {
    return (
      <div className="mfe-page">
        <p className="muted">Loading orders…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mfe-page">
        <p className="error-text">
          Could not load orders. Is json-server running on port 3003? {error}
        </p>
      </div>
    );
  }

  return (
    <div className="mfe-page">
      <div className="mfe-heading">
        <h1>Orders</h1>
        <p>Loaded from the Orders remote. Totals use paid orders only.</p>
      </div>
      <div className="stat-grid">
        <article className="stat-card">
          <span>Total orders</span>
          <strong>{stats.total}</strong>
        </article>
        <article className="stat-card">
          <span>Paid revenue</span>
          <strong>{formatMoney(stats.revenue)}</strong>
        </article>
        <article className="stat-card stat-wide">
          <span>Status breakdown</span>
          <ul className="bar-list">
            {Object.entries(stats.byStatus).map(([status, count]) => (
              <li key={status}>
                <div className="bar-label">
                  <span className={`badge badge-${status}`}>{status}</span>
                  <span>{count}</span>
                </div>
                <div className="bar-track">
                  <div
                    className={`bar-fill bar-${status}`}
                    style={{ width: `${(count / stats.maxStatus) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{userNames[order.userId] || `User ${order.userId}`}</td>
                <td>{order.product}</td>
                <td>{formatMoney(order.amount)}</td>
                <td>
                  <span className={`badge badge-${order.status}`}>{order.status}</span>
                </td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
