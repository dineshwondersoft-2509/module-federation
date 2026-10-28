import React, { useEffect, useState } from 'react';
import { resolveApiBase } from './apiBase';

export default function UserActivityLog() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const apiBase = resolveApiBase();
    fetch(`${apiBase}/users`)
      .then((res) => res.json())
      .then((data) => {
        const logs = data.map((u, i) => ({
          id: u.id,
          user: u.name,
          action: i % 2 === 0 ? 'Logged in' : 'Updated profile',
          time: `${(i + 1) * 12} mins ago`,
        }));
        setActivities(logs.slice(0, 4));
      })
      .catch((err) => console.error('UserActivityLog error:', err));
  }, []);

  return (
    <div style={{ padding: '16px', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', color: '#1e293b' }}>⚡ Recent User Activities</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {activities.map((act) => (
          <div key={act.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', paddingBottom: '6px', borderBottom: '1px solid #f1f5f9' }}>
            <span><strong>{act.user}</strong> {act.action}</span>
            <span style={{ color: '#94a3b8', fontSize: '12px' }}>{act.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
