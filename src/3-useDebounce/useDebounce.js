import { useEffect } from "react";
import useTimeout from "../2-useTimeout/useTimeout";

export default function useDebounce(callback, delay, dependencies) {
  // run only after certain delay. ie search field query to API
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
