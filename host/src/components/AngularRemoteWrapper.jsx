import React, { useEffect, useRef } from 'react';

export default function AngularRemoteWrapper({ moduleName = './AnalyticsApp' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let unmountFn = null;

    import('analytics/AnalyticsApp')
      .then((m) => {
        // Handle moduleName if dynamic or default
        const mountFn = m.mount || m.default || m;
        if (containerRef.current && typeof mountFn === 'function') {
          const instance = mountFn(containerRef.current);
          unmountFn = instance?.destroy || instance?.unmount;
        }
      })
      .catch((err) => {
        console.error('Failed to load Angular remote:', err);
      });

    return () => {
      if (typeof unmountFn === 'function') {
        try { unmountFn(); } catch (e) {}
      }
    };
  }, [moduleName]);

  return <div ref={containerRef} style={{ width: '100%' }} />;
}
