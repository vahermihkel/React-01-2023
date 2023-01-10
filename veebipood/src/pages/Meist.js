import { useState } from "react";

function Meist() {
  const [n2itaEmaili, uuendaN2itaEmaili] = useState(false);
  const [telefon, uuendaTelefon] = useState(localStorage.getItem("telefon") || "");

  // "" / 0 / false --- tühjad algväärtused
  // null --- tühjus   kus ta teab mis liiki tegelikult seal tühjuse asemel olema peab   localString "" / null
  // undefined --- tühjus    ei tea mis liiki tegelikult sealt tuleb

  return (
    <div>
      <div>Meie email: 
          {n2itaEmaili === false && <button onClick={() => uuendaN2itaEmaili(true)}>Näita emaili</button> }
          {n2itaEmaili === true && localStorage.getItem("email")}
      </div>
      <div>Meie telefon: {telefon}
          {telefon.startsWith("+372") === false && telefon !== "" && <button onClick={() => uuendaTelefon("+372" + telefon)}>Lisa suunakood</button>}
      </div>
    </div>
  )
}

export default Meist