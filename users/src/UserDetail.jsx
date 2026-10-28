import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOrdersByUser, getUser } from './api';

function formatMoney(amount) {
  return `$${Number(amount).toFixed(2)}`;
}

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([getUser(id), getOrdersByUser(id)])
      .then(([nextUser, nextOrders]) => {
        setUser(nextUser);
        setOrders(nextOrders);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="muted">Loading user…</p>;
  }

  if (error || !user) {
    return (
      <p className="error-text">
        Could not load this user. {error || 'Not found.'}
      </p>
    );
  }

  return (
    <div>
      <p>
        <Link to=".." className="back-link">
          ← All users
        </Link>
      </p>
      <div className="detail-card">
        <h2>{user.name}</h2>
        <dl className="detail-grid">
          <div>
            <dt>Email</dt>
            <dd>{user.email}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{user.role}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <span className={`badge badge-${user.status}`}>{user.status}</span>
            </dd>
          </div>
          <div>
            <dt>City</dt>
            <dd>{user.city}</dd>
          </div>
          <div>
            <dt>Joined</dt>
            <dd>{user.joined}</dd>
          </div>
        </dl>
      </div>
      <h3 className="section-title">Orders for this user</h3>
      {orders.length === 0 ? (
        <p className="muted">No orders.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
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
                  <td>{order.product}</td>
                  <td>{formatMoney(order.amount)}</td>
                  <td>
                    <span className={`badge badge-${order.status}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
