import { useState } from "react";

function Avaleht() {
  const [kogus, muudaKogus] = useState();

  return (
    <div>
      <button onClick={() => muudaKogus(100)}>-</button>
      <div>{kogus}</div>
      <button onClick={() => muudaKogus(200)}>+</button>
    </div>
  )
}

export default Avaleht