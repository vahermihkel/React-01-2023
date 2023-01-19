import { useState } from "react"
import { Link } from "react-router-dom"

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) || [])

  const tyhjenda = () => {
    uuendaOstukorv([]);
    //localStorage.setItem("ostukorv", JSON.stringify("[]")); seda ei saa
    localStorage.setItem("ostukorv", JSON.stringify([]));
    //localStorage.setItem("ostukorv", "[]");
  }

  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode);
    uuendaOstukorv(ostukorv.slice());
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    // localStorage.setItem("ostukorv", "ostukorv"); seda ei saa
  }

  const kustuta = (jrkNr) => {
    ostukorv.splice(jrkNr,1);
    uuendaOstukorv(ostukorv.slice());
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }

  const arvutaKogusumma = () => {
    let kogusumma = 0;
    // liidan kogusummale läbi tsükli kõik toodete hinnad
    ostukorv.forEach(e => kogusumma = kogusumma + e.hind);
    return kogusumma.toFixed(2);
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length === 1 && <div>Ostukorvis on 1 ese</div>}
      {ostukorv.length >= 2 && <div>Ostukorvis on {ostukorv.length} eset</div>}
      {ostukorv.map((element, index) => 
      	<div key={index}>
          <img src={element.pilt} alt="" />
          <div>{element.pilt}</div>
          <div>{element.nimi}</div>
          <div>{element.hind}</div>
          <button onClick={() => lisa(element)}>+</button>
          <button onClick={() => kustuta(index)}>x</button>
        </div> )}
      {ostukorv.length === 0 && <Link to="/tooted">
        Ostukorv on tühi, mine lisa tooteid!
      </Link>}

      {ostukorv.length > 0 && <div>Ostukorvi kogusumma: {arvutaKogusumma()} €</div>}
    </div>
  )
}

export default Ostukorv