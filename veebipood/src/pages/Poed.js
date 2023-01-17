import { useRef, useState } from "react";
import poedFailist from "../poedFailist.json";

function Poed() {

// array --- väärtuste kogumik    
  // const [kogus, muudaKogus] = useState(0)
  // const [kogus, muudaKogus] = useState([20,12,44,54,213])

// pean panema array'sse kui tahan sorteerida, filtreerida
// kui nad tulevad andmebaasist ehk klient tahab ise hallata
  const [poed, muudaPoed] = useState(poedFailist);
  const poodRef = useRef();

  const tagasiOriginaali = () => {
    muudaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    // poed.sort();
    poed.sort((a, b) => a.localeCompare(b, "et"));
    // poed.sort((a, b) =>  (a > b) ? 1 : -1);  // .sort() -- default sorting, mis teebki A-Z
    muudaPoed(poed.slice());
  }

  const sorteeriZA = () => {
    // poed.sort().reverse();
    poed.sort((a, b) => b.localeCompare(a, "et"));  // .sort() -- default sorting, mis teebki A-Z
    // poed.sort((a, b) =>  (a < b) ? 1 : -1);
    muudaPoed(poed.slice());
  }

  const sorteeriTahtKasv = () => {
    poed.sort((a, b) => a.length - b.length);
    muudaPoed(poed.slice());
  }

  const sorteeriTahtKah = () => {
    poed.sort((a, b) => b.length - a.length);
    // poed.sort((a, b) => -1 * (a.length - b.length));
    muudaPoed(poed.slice());
  }

  const sorteeriTeiseTaheJargi = () => {
    poed.sort((a, b) => a.charAt(1).localeCompare(b.charAt(1), "et"));
    muudaPoed(poed.slice());
  }

  const filtreeriELoppevad = () => {
    const tulem = poed.filter(e => e.endsWith("e"));
    muudaPoed(tulem);
  }

  const filtreeri9Tahega = () => {
    const tulem = poed.filter(e => e.length === 9);
    muudaPoed(tulem);
  }

  const filtreeriKellelIs = () => {
    const tulem = poed.filter(e => e.includes("is"));
    muudaPoed(tulem);
  }

  const filtreeriKellel3sTahtI = () => {
    const tulem = poed.filter(e => e.charAt(2) === "i");
    muudaPoed(tulem);
  }

  const filtreeriKellelTahtiRohkemKui8 = () => {
    const tulem = poed.filter(e => e.length > 8);
    muudaPoed(tulem);
  }

  const muudaK6ikSuureks = () => {
    const tulem = poed.map(e => e.toUpperCase());
    muudaPoed(tulem);
  }

  const muudaK6ikV2ikseks = () => {
    const tulem = poed.map(e => e.toLowerCase());
    muudaPoed(tulem);
  }

  const muudaK6igileT2htedeArvuNumberL6ppu = () => {
    const tulem = poed.map(e => e + e.length);
    muudaPoed(tulem);
  }

  const muudaK6igileKriipsudEtte = () => {
    const tulem = poed.map(e => "--" + e); // "Vesse" =>  "--Vesse"  =>  "----Vesse" 
    muudaPoed(tulem);
  }

  const muudaK6igileIAsemelO = () => {
    const tulem = poed.map(e => e.replaceAll("i","o"));
    muudaPoed(tulem);
  }

  const kustuta = (i) => {
    poed.splice(i,1); // (mitmendat ma kustutan ,KOMA mitu tk kustutan)
    muudaPoed(poed.slice()); // koopia tegemine
  }

  const lisa = () => {
    poed.push(poodRef.current.value);
    muudaPoed(poed.slice());
  }

  return (
    <div>
      <div>
        <button onClick={tagasiOriginaali}>Tagasi originaali</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahtKasv}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahtKah}>Sorteeri tähtede arv kahanevalt</button>
        <button onClick={sorteeriTeiseTaheJargi}>Sorteeri teise tähe järgi</button>
        <button onClick={filtreeriELoppevad}>Jäta alles tähega "e" lõppevad</button>
        <button onClick={filtreeri9Tahega}>Jäta alles 9 tähelised</button>
        <button onClick={filtreeriKellelIs}>Jäta alles kellel 'is' keskuse nimes</button>
        <button onClick={filtreeriKellel3sTahtI}>Jäta alles kellel kolmas täht 'i'</button>
        <button onClick={filtreeriKellelTahtiRohkemKui8}>Jäta alles kellel tähti rohkem kui 8</button>
        <button onClick={muudaK6ikSuureks}>Muuda kõikidel suurteks tähtedeks</button>
        <button onClick={muudaK6ikV2ikseks}>Muuda kõikidel väikesteks tähtedeks</button>
        <button onClick={muudaK6igileT2htedeArvuNumberL6ppu}>Muuda kõikidele number lõppu</button>
        <button onClick={muudaK6igileKriipsudEtte}>Muuda kõikidele kriipsud ette</button>
        <button onClick={muudaK6igileIAsemelO}>Muuda kõikidel I asemel O</button>
      </div>

      <label>Uue poe nimi</label>
      <input ref={poodRef} type="text" />
      <button onClick={lisa}>Lisa uus pood</button>

      {poed.map((element,index) => 
        <div key={index}>{element}. Lahtiolekuaeg:  <button onClick={() => kustuta(index)}>x</button> </div>
        )}
      <div>-----------------------------</div>
      <div>Ülemiste. Lahtiolekuaeg: </div>
      <div>Viimsi. Lahtiolekuaeg: </div>
      <div>Rocca al Mare. Lahtiolekuaeg: </div>
      <div>Magistral. Lahtiolekuaeg: </div>
      <div>Vesse. Lahtiolekuaeg: </div>
      <div>Kristiine. Lahtiolekuaeg: </div>
      <div>Järveotsa. Lahtiolekuaeg: </div>
      <div>----------</div>
      {["Saab", "Ford", "Opel", "Audi"].map((auto,j2rjekorraNumber) => <button key={j2rjekorraNumber}>{j2rjekorraNumber}. {auto}</button> )}
    </div>
  )
}

export default Poed