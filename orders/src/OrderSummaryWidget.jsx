import React, { useEffect, useState } from 'react';
import { resolveApiBase } from './apiBase';

export default function OrderSummaryWidget() {
  const [metrics, setMetrics] = useState({ revenue: 0, total: 0, pending: 0 });

  useEffect(() => {
    const apiBase = resolveApiBase();
    fetch(`${apiBase}/orders`)
      .then((res) => res.json())
      .then((data) => {
        const revenue = data.filter((o) => o.status === 'paid').reduce((sum, o) => sum + o.amount, 0);
        const pending = data.filter((o) => o.status === 'pending').length;
        setMetrics({ revenue, total: data.length, pending });
      })
      .catch((err) => console.error('OrderSummaryWidget error:', err));
  }, []);

  return (
    <div style={{ padding: '16px', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#1e293b' }}>📦 Orders Summary (Orders Remote)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ padding: '10px', background: '#ecfdf5', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#047857' }}>Total Revenue</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#065f46' }}>${metrics.revenue}</div>
        </div>
        <div style={{ padding: '10px', background: '#fef3c7', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#b45309' }}>Total Orders</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#92400e' }}>{metrics.total}</div>
        </div>
        <div style={{ padding: '10px', background: '#fff7ed', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#c2410c' }}>Pending Orders</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#9a3412' }}>{metrics.pending}</div>
        </div>
      </div>
    </div>
  );
}
