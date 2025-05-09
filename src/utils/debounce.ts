export const debounce = <Args extends unknown[], Result>(
  func: (...args: Args) => Result,
  wait: number,
) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return (...args: Args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
