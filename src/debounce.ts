export function debounce<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timeout: NodeJS.Timeout | null = null;
  let pendingPromise: Promise<ReturnType<T>> | null = null;
  let resolveList: Array<(value: ReturnType<T>) => void> = [];
  let lastArgs: Parameters<T>;

  return (...args: Parameters<T>) => {
    lastArgs = args;
    if (!pendingPromise) {
      pendingPromise = new Promise<ReturnType<T>>((resolve) => {
        resolveList.push(resolve);
      });
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(async () => {
      const result = await fn(...lastArgs);
      resolveList.forEach((resolve) => resolve(result));
      // Reset for next call
      pendingPromise = null;
      resolveList = [];
      timeout = null;
    }, delay);
    return pendingPromise;
  };
}
