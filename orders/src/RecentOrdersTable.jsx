import React, { useEffect, useState } from 'react';
import { resolveApiBase } from './apiBase';

export default function RecentOrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const apiBase = resolveApiBase();
    fetch(`${apiBase}/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data.slice(0, 4)))
      .catch((err) => console.error('RecentOrdersTable error:', err));
  }, []);

  return (
    <div style={{ padding: '16px', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', color: '#1e293b' }}>🛒 Recent Orders</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
        <thead>
          <tr style={{ background: '#f8fafc', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>
            <th style={{ padding: '8px' }}>Order ID</th>
            <th style={{ padding: '8px' }}>Product</th>
            <th style={{ padding: '8px' }}>Amount</th>
            <th style={{ padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '8px' }}>#{o.id}</td>
              <td style={{ padding: '8px' }}>{o.product}</td>
              <td style={{ padding: '8px', fontWeight: '600' }}>${o.amount}</td>
              <td style={{ padding: '8px' }}>
                <span style={{
                  padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '600',
                  background: o.status === 'paid' ? '#dcfce7' : o.status === 'pending' ? '#fef9c3' : '#fee2e2',
                  color: o.status === 'paid' ? '#166534' : o.status === 'pending' ? '#854d0e' : '#991b1b'
                }}>
                  {o.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
