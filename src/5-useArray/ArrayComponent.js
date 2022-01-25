import { useArray } from "./useArray";

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);
  return (
    <div>
      <div>{array.join(",")}</div>
      <button onClick={() => push(7)}>add 7</button>
      <button onClick={() => update(1, 9)}>Change Second element to 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter((n) => n < 3)}>
        Keep numbers less than 4
      </button>
      <button onClick={() => filter((n) => n < 3)}>
        keep numbers less than 4
      </button>
      <button onCLick={() => set([1, 2])}>Set to 1, 2</button>
      <button onCLick={clear}>clear</button>
    </div>
  );
}
