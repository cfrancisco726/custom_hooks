import { useEffect, useRef } from "react";

function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies); //first render it doesn't run, after runs like useEffect
}

export default useUpdateEffect;
