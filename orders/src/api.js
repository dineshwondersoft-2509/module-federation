import { resolveApiBase } from './apiBase';

export const API_BASE = resolveApiBase();

export async function getOrders() {
  const response = await fetch(`${API_BASE}/orders`);
  if (!response.ok) {
    throw new Error(`API /orders failed (${response.status})`);
  }
  return response.json();
}

export async function getUsers() {
  const response = await fetch(`${API_BASE}/users`);
  if (!response.ok) {
    throw new Error(`API /users failed (${response.status})`);
  }
  return response.json();
}
