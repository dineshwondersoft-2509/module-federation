import { resolveApiBase } from './apiBase';

export const API_BASE = resolveApiBase();

async function getJson(path) {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) {
    throw new Error(`API ${path} failed (${response.status})`);
  }
  return response.json();
}

export function getUsers() {
  return getJson('/users');
}

export function getUser(id) {
  return getJson(`/users/${id}`);
}

export function getOrdersByUser(userId) {
  return getJson(`/orders?userId=${userId}`);
}
