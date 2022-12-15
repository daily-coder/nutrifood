function throttle(func, delay) {
  let scheduled;
  let lastRan;
  return function (...args) {
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
