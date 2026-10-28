import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

export default function RemoteWrapper({ name, children }) {
  return (
    <ErrorBoundary name={name}>
      <Suspense fallback={<p className="muted">{name} is loading…</p>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}
