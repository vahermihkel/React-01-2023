import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MuudaToode() {
  const { jrkNr } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[jrkNr];
  //     "Karu"   =      ["Konn", "Karu", "Mäger"][1]
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    // muutmine
    // ["Konn", "Karu", "Mäger"][0] = "Põder";
    tooted[jrkNr] = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "pilt": piltRef.current.value, 
      "aktiivne": aktiivneRef.current.checked
    };
    localStorage.setItem("tooted", JSON.stringify(tooted));
    navigate("/halda-tooteid")
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitudToode.nimi} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} defaultValue={leitudToode.hind} type="number" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} defaultValue={leitudToode.pilt} type="text" /> <br />
      <label>Toote aktiivne</label> <br />
      <input ref={aktiivneRef} defaultChecked={leitudToode.aktiivne} type="checkbox" /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode