// eslint-disable-next-line @typescript-eslint/no-explicit-any
function throttle<T extends (...args: any[]) => any>(func: T, delay: number) {
  let scheduled: ReturnType<typeof setTimeout>;
  let lastRan: number;
  return function (...args: Parameters<T>) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(scheduled);
      scheduled = setTimeout(function () {
        if (Date.now() - lastRan >= delay) {
          func(...args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}

export default throttle;
