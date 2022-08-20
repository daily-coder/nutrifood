export default function throttle(fn, delay = 1000) {
  let callSetTimeOut = true;
  let prevArgs;
  return (...args) => {
    prevArgs = args;
    if (!callSetTimeOut) return;
    callSetTimeOut = false;
    setTimeout(() => {
      fn(...prevArgs);
      callSetTimeOut = true;
    }, delay);
  };
}
