import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AnalyticsComponent } from './app/analytics.component';

export function mount(container: HTMLElement) {
  container.innerHTML = '<app-analytics-root></app-analytics-root>';

  let appRef: any = null;
  bootstrapApplication(AnalyticsComponent)
    .then((ref) => {
      appRef = ref;
    })
    .catch((err) => console.error('Error bootstrapping Angular analytics app:', err));

  return {
    destroy: () => {
      if (appRef && typeof appRef.destroy === 'function') {
        try {
          appRef.destroy();
        } catch (e) {
          console.warn('Error destroying Angular application:', e);
        }
      }
    },
  };
}

export default mount;
