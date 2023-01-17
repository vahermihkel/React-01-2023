import { useParams } from "react-router-dom"

function YksikToode() {
  const { index } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[index];
  // "Ford"    =   ["BMW", "Audi", "Ford", "Opel"][2];

  return (
    <div>
      {leitudToode === undefined && <div>Toodet ei leitud</div>}
      {leitudToode !== undefined && <div>{leitudToode}</div>}
    </div>
  )
}

export default YksikToode