import { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

function UpdateEffectComponent() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);
  //only run when dependancy changes and not first render

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

export default UpdateEffectComponent;
