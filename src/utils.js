export function throttle(func, delay) {
  let last = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return func(...args);
  };
}
