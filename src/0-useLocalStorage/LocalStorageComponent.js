import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

export default function LocalStorageComponent() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
