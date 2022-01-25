import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback); //useRef like useState but doesn't rerender
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]); //everytime callback changes we're updating to stay the same

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]); //everytime we call our delay we reset timeout. we save value so we can clear it

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
