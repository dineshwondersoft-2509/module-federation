import React, { useEffect, useState } from 'react';
import { resolveApiBase } from './apiBase';

export default function UserProfileCard({ userId = 1 }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const apiBase = resolveApiBase();
    fetch(`${apiBase}/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error('UserProfileCard error:', err));
  }, [userId]);

  if (!user) return <div style={{ padding: '12px' }}>Loading Profile...</div>;

  return (
    <div style={{ padding: '16px', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>
        {user.name.charAt(0)}
      </div>
      <div>
        <h4 style={{ margin: 0, fontSize: '15px', color: '#0f172a' }}>{user.name}</h4>
        <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#64748b' }}>{user.email}</p>
        <span style={{ display: 'inline-block', marginTop: '6px', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '600', background: user.role === 'Admin' ? '#fef3c7' : '#e0f2fe', color: user.role === 'Admin' ? '#92400e' : '#0369a1' }}>
          {user.role} • {user.status}
        </span>
      </div>
    </div>
  );
}
