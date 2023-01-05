import { useState } from "react";

function Avaleht() {
  const [kogus, muudaKogus] = useState(0); // numbrid - nendega saan teha arvutusi / suurem / väiksem
  const [sonum, muudaSonum] = useState(""); // sõnad - suurteks/väikesteks/mis on esimene
  const [laigitud, muudaLaigitud] = useState(false) // kahendväärtus -   kindlasti vaid true VÕI false

  function nulli() {
    muudaKogus(0);
    muudaSonum("Kogus nullitud");
  }

  function vahenda() {
    muudaKogus(kogus - 100);
    muudaSonum("Kogus vähendatud");
  }

  function suurenda() {
    muudaKogus(kogus + 100);
    muudaSonum("Kogus suurendatud");
  }

  return (
    <div>
      {/* <img onClick={() => muudaLaigitud(!laigitud)} src={laigitud === true ? "/laigitud.svg" : "/mittelaigitud.svg"} alt="" /> */}
     
      { laigitud === true && <img onClick={() => muudaLaigitud(false)} src="/laigitud.svg" alt="" />}
      { laigitud === false && <img onClick={() => muudaLaigitud(true)} src="/mittelaigitud.svg" alt="" />}
      <br />
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda laigitut</button>
      <br />
      {kogus > 0 && <button onClick={nulli}>Nulli</button>}
      <div>{sonum}</div>
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <div>{kogus}</div>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht