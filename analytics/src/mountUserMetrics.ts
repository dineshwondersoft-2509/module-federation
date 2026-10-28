import 'zone.js';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { resolveApiBase } from './app/apiBase';

@Component({
  selector: 'app-analytics-user-metrics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 16px; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; font-family: sans-serif;">
      <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #1e293b;">👥 User Role Metrics (Angular Remote)</h3>
      <div *ngIf="loading" style="color: #64748b; font-size: 13px;">Loading User Metrics...</div>
      <div *ngIf="!loading" style="display: flex; flex-direction: column; gap: 8px;">
        <div *ngFor="let role of roles" style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: #f8fafc; border-radius: 6px; font-size: 13px;">
          <span><strong>{{ role.name }}</strong></span>
          <span style="background: #e2e8f0; padding: 2px 8px; border-radius: 10px; font-weight: 600;">{{ role.count }} users</span>
        </div>
      </div>
    </div>
  `,
})
export class AnalyticsUserMetricsComponent implements OnInit {
  roles: { name: string; count: number }[] = [];
  loading = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const apiBase = resolveApiBase();
    fetch(`${apiBase}/users`)
      .then((res) => res.json())
      .then((users: any[]) => {
        const map: { [k: string]: number } = {};
        users.forEach((u) => {
          map[u.role] = (map[u.role] || 0) + 1;
        });
        this.roles = Object.keys(map).map((name) => ({ name, count: name ? map[name] : 0 }));
        this.loading = false;
        this.cdr.detectChanges();
      })
      .catch((err) => console.error('UserMetrics error:', err));
  }
}

export function mountUserMetrics(container: HTMLElement) {
  container.innerHTML = '<app-analytics-user-metrics></app-analytics-user-metrics>';
  let appRef: any = null;
  bootstrapApplication(AnalyticsUserMetricsComponent)
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

export default mountUserMetrics;
