import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MuudaToode() {
  const { jrkNr } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[jrkNr];
  //     "Karu"   =      ["Konn", "Karu", "Mäger"][1]
  const nimiRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    // muutmine
    // ["Konn", "Karu", "Mäger"][0] = "Põder";
    tooted[jrkNr] = nimiRef.current.value;
    localStorage.setItem("tooted", JSON.stringify(tooted));
    navigate("/halda-tooteid")
  }

  return (
    <div>
      <label>Toote nimi</label>
      <input ref={nimiRef} defaultValue={leitudToode} type="text" />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode