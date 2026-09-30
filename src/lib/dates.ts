// Duration helpers for periods written like "Aug 2021 – Jul 2023" or "Apr 2025 – Present".

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

type YM = { y: number; m: number };

function parse(part: string, now: Date): YM {
  const p = part.trim();
  if (/present/i.test(p)) return { y: now.getFullYear(), m: now.getMonth() };
  const [mon, year] = p.split(/\s+/);
  return { y: Number(year), m: MONTHS.indexOf(mon) };
}

/** Inclusive month count of a period. */
export function monthsIn(period: string, now = new Date()): number {
  const [from, to] = period.split(/\s*[–-]\s*/);
  const a = parse(from, now);
  const b = parse(to, now);
  return (b.y - a.y) * 12 + (b.m - a.m) + 1;
}

export function formatMonths(total: number): string {
  const y = Math.floor(total / 12);
  const m = total % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`);
  if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`);
  return parts.join(' ') || '1 mo';
}
