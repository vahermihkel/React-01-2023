import { useRef, useState } from "react";
import poedFailist2 from "../poedFailist2.json";

function Poed2() {

// array --- väärtuste kogumik    
  // const [kogus, muudaKogus] = useState(0)
  // const [kogus, muudaKogus] = useState([20,12,44,54,213])

// pean panema array'sse kui tahan sorteerida, filtreerida
// kui nad tulevad andmebaasist ehk klient tahab ise hallata
  const [poed, muudaPoed] = useState(poedFailist2);
  const poodRef = useRef();
  const telRef = useRef();
  const aegRef = useRef();

  const tagasiOriginaali = () => {
    muudaPoed(poedFailist2);
  }

  const sorteeriAZ = () => {
    // poed.sort();
    poed.sort((a, b) => a.nimi.localeCompare(b.nimi, "et"));
    // poed.sort((a, b) =>  (a > b) ? 1 : -1);  // .sort() -- default sorting, mis teebki A-Z
    muudaPoed(poed.slice());
  }

  const sorteeriZA = () => {
    // poed.sort().reverse();
    poed.sort((a, b) => b.nimi.localeCompare(a.nimi, "et"));  // .sort() -- default sorting, mis teebki A-Z
    // poed.sort((a, b) =>  (a < b) ? 1 : -1);
    muudaPoed(poed.slice());
  }

  const sorteeriTahtKasv = () => {
    poed.sort((a, b) => a.nimi.length - b.nimi.length);
    muudaPoed(poed.slice());
  }

  const sorteeriTahtKah = () => {
    poed.sort((a, b) => b.nimi.length - a.nimi.length);
    // poed.sort((a, b) => -1 * (a.length - b.length));
    muudaPoed(poed.slice());
  }

  const sorteeriTeiseTaheJargi = () => {
    poed.sort((a, b) => a.nimi.charAt(1).localeCompare(b.nimi.charAt(1), "et"));
    muudaPoed(poed.slice());
  }

  const filtreeriELoppevad = () => {
    const tulem = poed.filter(e => e.nimi.endsWith("e"));
    muudaPoed(tulem);
  }

  const filtreeri9Tahega = () => {
    const tulem = poed.filter(e => e.nimi.length === 9);
    muudaPoed(tulem);
  }

  const filtreeriKellelIs = () => {
    const tulem = poed.filter(e => e.nimi.includes("is"));
    muudaPoed(tulem);
  }

  const filtreeriKellel3sTahtI = () => {
    const tulem = poed.filter(e => e.nimi.charAt(2) === "i");
    muudaPoed(tulem);
  }

  const filtreeriKellelTahtiRohkemKui8 = () => {
    const tulem = poed.filter(e => e.nimi.length > 8);
    muudaPoed(tulem);
  }

  // sort: kas tuleb miinus või pluss ja ma panen ta ENDA järjekorda
  // filter: kas tuleb true või false ja jätan ta ENDA alles
  // map: muutis igaühte sellega mis on noole järel

  const muudaK6ikSuureks = () => {
        // e {"nimi": "s", tel: "1"} =>  "S"  {"nimi": "S", tel: "1"}
    const tulem = poed.map(e => {return{"nimi":e.nimi.toUpperCase(), "tel": e.tel}});
    muudaPoed(tulem);
  }

  const muudaK6ikV2ikseks = () => {
    const tulem = poed.map(e => {return{"nimi": e.nimi.toLowerCase(), "tel": e.tel}});
    muudaPoed(tulem);
  }

  const muudaK6igileT2htedeArvuNumberL6ppu = () => {
    const tulem = poed.map(e => {return{"nimi": e.nimi + e.nimi.length, "tel": e.tel}});
    muudaPoed(tulem);
  }

  const muudaK6igileKriipsudEtte = () => {
    const tulem = poed.map(e => {return{"nimi": "--" + e.nimi, "tel": e.tel}} ); // "Vesse" =>  "--Vesse"  =>  "----Vesse" 
    muudaPoed(tulem);
  }

  const muudaK6igileIAsemelO = () => {
    const tulem = poed.map(e => {return{"nimi": e.nimi.replaceAll("i","o"), "tel": e.tel}} );
    muudaPoed(tulem);
  }

  const kustuta = (i) => {
    poed.splice(i,1); // (mitmendat ma kustutan ,KOMA mitu tk kustutan)
    muudaPoed(poed.slice()); // koopia tegemine
  }

  const lisa = () => {
    poed.push({
      "nimi":poodRef.current.value,
      "tel": telRef.current.value,
      "aeg": aegRef.current.value
    });
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

      <label>Uue poe nimi</label> <br />
      <input ref={poodRef} type="text" /> <br />
      <label>Uue poe telefon</label> <br />
      <input ref={telRef} type="text" /> <br />
      <label>Uue poe lahtiolekuaeg</label> <br />
      <input ref={aegRef} type="text" /> <br />
      <button onClick={lisa}>Lisa uus pood</button>

      {poed.map((element,index) => 
        <div key={index}>
          {element.nimi} ({element.tel}). Lahtiolekuaeg: {element.aeg} 
          <button onClick={() => kustuta(index)}>x</button> 
        </div>
        )}
    </div>
  )
}

export default Poed2