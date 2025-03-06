export async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }
    // Wait for the specified delay before retrying
    await new Promise((res) => setTimeout(res, delay));
    // Double the delay for exponential backoff
    return retry(fn, retries - 1, delay * 2);
  }
}
