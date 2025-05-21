import { useState } from "react";

export default function Count() {
  console.log("test");
  let [count, setCount] = useState(0);

  function incCount() {
    // count += 1;
    setCount( count + 1);
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count} </h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
