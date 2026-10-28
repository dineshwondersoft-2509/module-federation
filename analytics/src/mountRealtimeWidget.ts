import 'zone.js';
import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-analytics-realtime-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 16px; background: #0f172a; color: #ffffff; border-radius: 12px; font-family: sans-serif;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <h4 style="margin: 0; font-size: 14px; color: #38bdf8;">🟢 Live Realtime Traffic (Angular)</h4>
        <span style="font-size: 10px; background: #0284c7; padding: 2px 6px; border-radius: 4px;">ACTIVE</span>
      </div>
      <div style="font-size: 24px; font-weight: bold;">{{ activeRequests }} req/s</div>
      <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">System Health: {{ health }}% • Uptime 99.9%</div>
    </div>
  `,
})
export class AnalyticsRealtimeWidgetComponent implements OnInit, OnDestroy {
  activeRequests = 42;
  health = 99;
  timer: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.timer = setInterval(() => {
      this.activeRequests = Math.floor(Math.random() * 30) + 30;
      this.health = Math.floor(Math.random() * 2) + 98;
      this.cdr.detectChanges();
    }, 2000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}

export function mountRealtimeWidget(container: HTMLElement) {
  container.innerHTML = '<app-analytics-realtime-widget></app-analytics-realtime-widget>';
  let appRef: any = null;
  bootstrapApplication(AnalyticsRealtimeWidgetComponent)
    .then((ref) => {
      appRef = ref;
    })
    .catch((err) => console.error('Bootstrap error:', err));

  return {
    destroy: () => {
      if (appRef && typeof appRef.destroy === 'function') {
        try { appRef.destroy(); } catch (e) {}
      }
      container.innerHTML = '';
    },
  };
}

export default mountRealtimeWidget;
