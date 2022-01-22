import useToggle from "./useToggle";

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);
  console.log(value);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make false</button>
    </div>
  );
}
