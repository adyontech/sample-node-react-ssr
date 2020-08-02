export const debounce = (callback, delay) => {
  var debounceTimer;

  return (...arg) => {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => callback.call(context, ...arg), delay);
  };
};
