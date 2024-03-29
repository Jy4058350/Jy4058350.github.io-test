function lerp(a, b, n) {
  let current = (1 - n) * a + n * b;
  if (Math.abs(b - current) < 0.001) current = b;
  return current;
}

function percentage(progress, total) {
  return Math.round((progress / total) * 100);
}

export { lerp, percentage };
