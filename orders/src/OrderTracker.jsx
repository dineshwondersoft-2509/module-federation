import React from 'react';

export default function OrderTracker({ orderId = 101 }) {
  const steps = [
    { label: 'Order Placed', done: true, time: '10:00 AM' },
    { label: 'Payment Verified', done: true, time: '10:02 AM' },
    { label: 'Processing', done: true, time: '10:15 AM' },
    { label: 'Out for Delivery', done: false, time: 'Pending' },
  ];

  return (
    <div style={{ padding: '16px', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
      <h4 style={{ margin: '0 0 12px 0', fontSize: '15px', color: '#1e293b' }}>🚚 Live Order Tracker (#{orderId})</h4>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{ textAlign: 'center', flex: 1, position: 'relative' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%', margin: '0 auto 6px auto',
              background: step.done ? '#10b981' : '#e2e8f0', color: step.done ? '#fff' : '#64748b',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px'
            }}>
              {step.done ? '✓' : idx + 1}
            </div>
            <div style={{ fontSize: '12px', fontWeight: step.done ? '600' : 'normal', color: step.done ? '#0f172a' : '#94a3b8' }}>{step.label}</div>
            <div style={{ fontSize: '10px', color: '#94a3b8' }}>{step.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
