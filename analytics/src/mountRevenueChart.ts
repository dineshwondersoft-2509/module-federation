import 'zone.js';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { resolveApiBase } from './app/apiBase';

@Component({
  selector: 'app-analytics-revenue-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 16px; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; font-family: sans-serif;">
      <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #1e293b;">📊 Revenue by Category (Angular Remote)</h3>
      <div *ngIf="loading" style="color: #64748b; font-size: 13px;">Loading Revenue Chart...</div>
      <div *ngIf="!loading" style="display: flex; flex-direction: column; gap: 8px;">
        <div *ngFor="let item of categories" style="display: flex; flex-direction: column; gap: 4px;">
          <div style="display: flex; justify-content: space-between; font-size: 13px;">
            <span>{{ item.name }}</span>
            <strong>\${{ item.revenue }} ({{ item.percent }}%)</strong>
          </div>
          <div style="width: 100%; height: 8px; background: #f1f5f9; border-radius: 4px; overflow: hidden;">
            <div [style.width.%]="item.percent" style="height: 100%; background: #3b82f6; border-radius: 4px;"></div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AnalyticsRevenueChartComponent implements OnInit {
  categories: { name: string; revenue: number; percent: number }[] = [];
  loading = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const apiBase = resolveApiBase();
    fetch(`${apiBase}/orders`)
      .then((res) => res.json())
      .then((orders: any[]) => {
        const map: { [k: string]: number } = {};
        orders.forEach((o) => {
          map[o.product] = (map[o.product] || 0) + o.amount;
        });
        const total = Object.values(map).reduce((a, b) => a + b, 0) || 1;
        this.categories = Object.keys(map).map((name) => ({
          name,
          revenue: map[name],
          percent: Math.round((map[name] / total) * 100),
        }));
        this.loading = false;
        this.cdr.detectChanges();
      })
      .catch((err) => console.error('RevenueChart error:', err));
  }
}

export function mountRevenueChart(container: HTMLElement) {
  container.innerHTML = '<app-analytics-revenue-chart></app-analytics-revenue-chart>';
  let appRef: any = null;
  bootstrapApplication(AnalyticsRevenueChartComponent)
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

export default mountRevenueChart;
