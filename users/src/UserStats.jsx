import React, { useEffect, useState } from 'react';
import { resolveApiBase } from './apiBase';

export default function UserStats() {
  const [stats, setStats] = useState({ total: 0, active: 0, admins: 0 });

  useEffect(() => {
    const apiBase = resolveApiBase();
    fetch(`${apiBase}/users`)
      .then((res) => res.json())
      .then((data) => {
        const active = data.filter((u) => u.status === 'active').length;
        const admins = data.filter((u) => u.role === 'Admin').length;
        setStats({ total: data.length, active, admins });
      })
      .catch((err) => console.error('UserStats fetch error:', err));
  }, []);

  return (
    <div className="card" style={{ padding: '16px', background: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#1e293b' }}>👤 User Analytics Widget (Users Remote)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#64748b' }}>Total Users</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a' }}>{stats.total}</div>
        </div>
        <div style={{ padding: '10px', background: '#f0fdf4', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#166534' }}>Active Users</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#15803d' }}>{stats.active}</div>
        </div>
        <div style={{ padding: '10px', background: '#eff6ff', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#1e40af' }}>Admins</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1d4ed8' }}>{stats.admins}</div>
        </div>
      </div>
    </div>
  );
}
