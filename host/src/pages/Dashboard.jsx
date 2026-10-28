import React, { Suspense } from 'react';
import AngularWidgetWrapper from '../components/AngularWidgetWrapper';

const UserStats = React.lazy(() => import('users/UserStats'));
const UserProfileCard = React.lazy(() => import('users/UserProfileCard'));
const UserActivityLog = React.lazy(() => import('users/UserActivityLog'));

const OrderSummaryWidget = React.lazy(() => import('orders/OrderSummaryWidget'));
const RecentOrdersTable = React.lazy(() => import('orders/RecentOrdersTable'));
const OrderTracker = React.lazy(() => import('orders/OrderTracker'));

export default function Dashboard() {
  return (
    <div className="mfe-page host-home" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="mfe-heading">
        <h1>Unified Multi-Framework Dashboard</h1>
        <p>
          Host App (:3000) orchestrating remote components from <strong>Users (React :3001)</strong>, <strong>Orders (React :3002)</strong>, and <strong>Analytics (Angular 17 :3004)</strong>.
        </p>
      </div>

      {/* Row 1: KPI Widgets from 3 Remotes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        <Suspense fallback={<div style={{ padding: '16px', background: '#fff', borderRadius: '12px' }}>Loading User Stats...</div>}>
          <UserStats />
        </Suspense>

        <Suspense fallback={<div style={{ padding: '16px', background: '#fff', borderRadius: '12px' }}>Loading Order Summary...</div>}>
          <OrderSummaryWidget />
        </Suspense>

        <AngularWidgetWrapper widgetName="RealtimeWidget" />
      </div>

      {/* Row 2: Detail Widgets from Users & Orders */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        <Suspense fallback={<div>Loading User Profile...</div>}>
          <UserProfileCard userId={1} />
        </Suspense>

        <Suspense fallback={<div>Loading User Activity...</div>}>
          <UserActivityLog />
        </Suspense>

        <Suspense fallback={<div>Loading Order Tracker...</div>}>
          <OrderTracker orderId={101} />
        </Suspense>
      </div>

      {/* Row 3: Complex Remote Widgets & Angular Micro-Frontends */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '16px' }}>
        <Suspense fallback={<div>Loading Recent Orders...</div>}>
          <RecentOrdersTable />
        </Suspense>

        <AngularWidgetWrapper widgetName="RevenueChart" />

        <AngularWidgetWrapper widgetName="UserMetrics" />
      </div>
    </div>
  );
}
