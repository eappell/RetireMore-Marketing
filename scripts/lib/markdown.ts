import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

export function writeReport(path: string, content: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, 'utf8');
}

export function pct(numerator: number, denominator: number, digits = 1): string {
  if (denominator === 0) return '—';
  return `${((numerator / denominator) * 100).toFixed(digits)}%`;
}

export function delta(current: number, previous: number): string {
  if (previous === 0) return current > 0 ? '+∞' : '—';
  const d = ((current - previous) / previous) * 100;
  const sign = d >= 0 ? '+' : '';
  return `${sign}${d.toFixed(1)}%`;
}

export function dollars(cents: number): string {
  return `$${(cents / 100).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}

export function isoDate(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}
