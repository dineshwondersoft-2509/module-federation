import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resolveApiBase } from './apiBase';

interface Order {
  id: number;
  userId: number;
  product: string;
  amount: number;
  status: 'paid' | 'pending' | 'refunded';
  date: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joined: string;
  city: string;
}

@Component({
  selector: 'app-analytics-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="analytics-card">
      <div class="header-row">
        <div class="title-group">
          <h2>
            <span>Executive Analytics & Intelligence</span>
          </h2>
          <p>Real-time metrics rendered by Angular MFE (Acts as Remote & Host)</p>
        </div>
        <span class="badge-angular">Angular 17 (Remote & Host :3004)</span>
      </div>

      <div *ngIf="loading" class="loading-spinner">
        <span>Loading live analytics data...</span>
      </div>

      <div *ngIf="!loading">
        <!-- KPI Cards -->
        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-label">Total Revenue</div>
            <div class="kpi-value">\${{ totalRevenue }}</div>
            <div class="kpi-sub">Across {{ orders.length }} total orders</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Active Users</div>
            <div class="kpi-value">{{ activeUserCount }} / {{ users.length }}</div>
            <div class="kpi-sub">{{ activeUserPercentage }}% active user rate</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Successful Payments</div>
            <div class="kpi-value">{{ paidOrderCount }}</div>
            <div class="kpi-sub">{{ paidOrderPercentage }}% fulfillment rate</div>
          </div>
        </div>

        <!-- Embedded React Remotes Section (Analytics acting as Host) -->
        <div class="chart-box" style="margin-top: 1rem; margin-bottom: 1.5rem; background: #faf5ff; border: 1px solid #e9d5ff;">
          <h3 style="color: #6b21a8; margin: 0 0 1rem 0;">🔮 React Micro-Frontend Remotes Consumed Inside Angular Host</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
            <div #userStatsContainer></div>
            <div #orderSummaryContainer></div>
          </div>
        </div>

        <!-- Charts Section -->
        <div class="charts-row">
          <!-- Product Revenue Breakdown -->
          <div class="chart-box">
            <h3>Revenue by Product Category</h3>
            <div class="bar-group">
              <div *ngFor="let p of productBreakdown; let i = index" class="bar-item">
                <div class="bar-info">
                  <span>{{ p.name }}</span>
                  <span>\${{ p.revenue }} ({{ p.percentage }}%)</span>
                </div>
                <div class="bar-track">
                  <div
                    class="bar-fill"
                    [class.bar-fill-red]="i % 5 === 0"
                    [class.bar-fill-blue]="i % 5 === 1"
                    [class.bar-fill-purple]="i % 5 === 2"
                    [class.bar-fill-emerald]="i % 5 === 3"
                    [class.bar-fill-amber]="i % 5 === 4"
                    [style.width.%]="p.percentage"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- User Roles Breakdown -->
          <div class="chart-box">
            <h3>User Distribution by Role</h3>
            <div class="bar-group">
              <div *ngFor="let r of roleBreakdown" class="bar-item">
                <div class="bar-info">
                  <span>{{ r.role }}</span>
                  <span>{{ r.count }} users ({{ r.percentage }}%)</span>
                </div>
                <div class="bar-track">
                  <div
                    class="bar-fill bar-fill-blue"
                    [style.width.%]="r.percentage"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Filterable Order Analytics Table -->
        <div class="chart-box">
          <div class="header-row" style="margin-bottom: 1rem;">
            <h3 style="margin: 0;">Recent Transactions Stream</h3>
            <div class="filter-pills">
              <button
                class="pill-btn"
                [class.active]="filterStatus === 'all'"
                (click)="setFilter('all')"
              >
                All ({{ orders.length }})
              </button>
              <button
                class="pill-btn"
                [class.active]="filterStatus === 'paid'"
                (click)="setFilter('paid')"
              >
                Paid
              </button>
              <button
                class="pill-btn"
                [class.active]="filterStatus === 'pending'"
                (click)="setFilter('pending')"
              >
                Pending
              </button>
              <button
                class="pill-btn"
                [class.active]="filterStatus === 'refunded'"
                (click)="setFilter('refunded')"
              >
                Refunded
              </button>
            </div>
          </div>

          <table class="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let o of filteredOrders">
                <td>#{{ o.id }}</td>
                <td>{{ getUserName(o.userId) }}</td>
                <td>{{ o.product }}</td>
                <td>{{ o.date }}</td>
                <td>
                  <span
                    class="status-badge"
                    [class.status-paid]="o.status === 'paid'"
                    [class.status-pending]="o.status === 'pending'"
                    [class.status-refunded]="o.status === 'refunded'"
                  >
                    {{ o.status }}
                  </span>
                </td>
                <td><strong>\${{ o.amount }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit, AfterViewInit {
  @ViewChild('userStatsContainer', { static: false }) userStatsContainer!: ElementRef;
  @ViewChild('orderSummaryContainer', { static: false }) orderSummaryContainer!: ElementRef;

  orders: Order[] = [];
  users: User[] = [];
  loading = true;
  filterStatus: 'all' | 'paid' | 'pending' | 'refunded' = 'all';

  totalRevenue = 0;
  avgOrderValue = 0;
  activeUserCount = 0;
  activeUserPercentage = 0;
  paidOrderCount = 0;
  paidOrderPercentage = 0;

  productBreakdown: { name: string; revenue: number; percentage: number }[] = [];
  roleBreakdown: { role: string; count: number; percentage: number }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngAfterViewInit(): void {
    this.loadReactRemotes();
  }

  async loadReactRemotes() {
    try {
      // Dynamically load React remotes when Analytics acts as a Host
      // @ts-ignore
      const [{ default: UserStats }, { default: OrderSummaryWidget }, React, ReactDOM] = await Promise.all([
        // @ts-ignore
        import('users/UserStats'),
        // @ts-ignore
        import('orders/OrderSummaryWidget'),
        import('react'),
        import('react-dom/client')
      ]);

      if (this.userStatsContainer?.nativeElement) {
        const root = ReactDOM.createRoot(this.userStatsContainer.nativeElement);
        root.render(React.createElement(UserStats));
      }

      if (this.orderSummaryContainer?.nativeElement) {
        const root = ReactDOM.createRoot(this.orderSummaryContainer.nativeElement);
        root.render(React.createElement(OrderSummaryWidget));
      }
    } catch (err) {
      console.warn('Analytics Host: Error loading React remotes:', err);
    }
  }

  async fetchData() {
    const apiBase = resolveApiBase();
    try {
      const [ordersRes, usersRes] = await Promise.all([
        fetch(`${apiBase}/orders`),
        fetch(`${apiBase}/users`)
      ]);

      if (ordersRes.ok && usersRes.ok) {
        this.orders = await ordersRes.json();
        this.users = await usersRes.json();
        this.calculateMetrics();
      }
    } catch (err) {
      console.error('Error fetching analytics data:', err);
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  calculateMetrics() {
    const paidOrders = this.orders.filter(o => o.status === 'paid');
    this.totalRevenue = paidOrders.reduce((sum, o) => sum + o.amount, 0);
    this.avgOrderValue = this.orders.length > 0
      ? Math.round(this.orders.reduce((sum, o) => sum + o.amount, 0) / this.orders.length)
      : 0;

    this.activeUserCount = this.users.filter(u => u.status === 'active').length;
    this.activeUserPercentage = this.users.length > 0
      ? Math.round((this.activeUserCount / this.users.length) * 100)
      : 0;

    this.paidOrderCount = paidOrders.length;
    this.paidOrderPercentage = this.orders.length > 0
      ? Math.round((paidOrders.length / this.orders.length) * 100)
      : 0;

    const productMap: { [key: string]: number } = {};
    this.orders.forEach(o => {
      productMap[o.product] = (productMap[o.product] || 0) + o.amount;
    });

    const totalProductRev = Object.values(productMap).reduce((a, b) => a + b, 0) || 1;
    this.productBreakdown = Object.keys(productMap).map(name => ({
      name,
      revenue: productMap[name],
      percentage: Math.round((productMap[name] / totalProductRev) * 100)
    })).sort((a, b) => b.revenue - a.revenue);

    const roleMap: { [key: string]: number } = {};
    this.users.forEach(u => {
      roleMap[u.role] = (roleMap[u.role] || 0) + 1;
    });

    const totalUsers = this.users.length || 1;
    this.roleBreakdown = Object.keys(roleMap).map(role => ({
      role,
      count: roleMap[role],
      percentage: Math.round((roleMap[role] / totalUsers) * 100)
    }));
  }

  get filteredOrders(): Order[] {
    if (this.filterStatus === 'all') return this.orders;
    return this.orders.filter(o => o.status === this.filterStatus);
  }

  setFilter(status: 'all' | 'paid' | 'pending' | 'refunded') {
    this.filterStatus = status;
  }

  getUserName(userId: number): string {
    const user = this.users.find(u => u.id === userId);
    return user ? user.name : `User #${userId}`;
  }
}
