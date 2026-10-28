import React, { useEffect, useRef } from 'react';

export default function AngularWidgetWrapper({ widgetName }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let unmountFn = null;

    const loadWidget = async () => {
      try {
        let m;
        if (widgetName === 'RevenueChart') {
          m = await import('analytics/AnalyticsRevenueChart');
        } else if (widgetName === 'UserMetrics') {
          m = await import('analytics/AnalyticsUserMetrics');
        } else if (widgetName === 'RealtimeWidget') {
          m = await import('analytics/AnalyticsRealtimeWidget');
        }

        const mountFn = m?.mountRevenueChart || m?.mountUserMetrics || m?.mountRealtimeWidget || m?.default || m;
        if (containerRef.current && typeof mountFn === 'function') {
          const instance = mountFn(containerRef.current);
          unmountFn = instance?.destroy || instance?.unmount;
        }
      } catch (err) {
        console.error(`Error loading Angular widget ${widgetName}:`, err);
      }
    };

    loadWidget();

    return () => {
      if (typeof unmountFn === 'function') {
        try { unmountFn(); } catch (e) {}
      }
    };
  }, [widgetName]);

  return <div ref={containerRef} style={{ width: '100%' }} />;
}
