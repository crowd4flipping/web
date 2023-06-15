export function unhandledType(value: never): value is never {
  return value;
}

export function getReadableDate(date: Date) {
  const now = new Date();
  const msDay = 1000 * 60 * 60 * 24;
  const daysTime = now.getTime() - date.getTime();
  const days = Math.ceil(daysTime / msDay);

  if (days === 0) return "Hoy";
  if (days === 1) return "Hace 1 día";
  if (days < 30) return `Hace ${days} días`;

  const months = Math.ceil(days / 30);
  if (months <= 1) return "Hace 1 mes";
  if (months <= 12) return `Hace ${months} meses`;

  const years = days / 365;
  if (years <= 1) return "Hace 1 año";

  const toYears = now.getFullYear() - date.getFullYear();
  if(toYears === 1) return "Hace 1 año";
  return `Hace ${toYears} años`;
}

 