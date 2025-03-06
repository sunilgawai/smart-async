export interface CancellationToken {
  cancelled: boolean;
  onCancelled: Promise<void>;
  cancel: () => void;
}

export function createCancellationToken(): CancellationToken {
  let cancelFn: () => void;
  const onCancelled = new Promise<void>((resolve) => {
    cancelFn = () => {
      token.cancelled = true;
      resolve();
    };
  });
  const token: CancellationToken = {
    cancelled: false,
    onCancelled,
    cancel: cancelFn!,
  };
  return token;
}
