import { Link } from "react-router-dom";

function Tooted() {
  // 1. ja 2. samm korraga
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  // siin üleval võiks olla const ja võimalikult vähe ridu ülevalt alla

  // function lisaOstukorvi() {}
  const lisaOstukorvi = (klikitudToode) => {
    let ostukorvLS = localStorage.getItem("ostukorv");
    ostukorvLS = JSON.parse(ostukorvLS) || [];
    ostukorvLS.push(klikitudToode);
    ostukorvLS = JSON.stringify(ostukorvLS);
    localStorage.setItem("ostukorv", ostukorvLS);
  }

  return (
    <div>
      {tooted.map((element, index) => 
        <div key={element}>
          <Link to={"/vaata-toodet/" + index}>
            {element} 
          </Link>
          <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button> 
        </div>)}
    </div>
  )
}

export default Tooted