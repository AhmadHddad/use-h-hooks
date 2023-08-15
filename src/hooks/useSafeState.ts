import { useCallback, useState } from "react";

export default function useSafeState<T>(val: T): () => T {
  const [state, set] = useState(val);

  const setState = useCallback((v) => {
    let value = v;

    if (v == null || typeof v == "undefined") {
      return;
    }

    set(v);
  }, []);

  return [state, setState];
}
