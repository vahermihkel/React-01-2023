import { useRef, useState } from "react"

// tumesinine - JS function, const: liigitused, HTML: liigitus (tag)
// keskmine sinine - JS muutuja, HTMLs muutuja (peavad olema loodud function sõna all)
// helesinine - JS: muutuja küljes mingi omadus, HTML: tagi küljes omadused
// kollane - funktsioon (mis käivitub lõpmatuseni)
// oranž - sõna (string)
// lilla - import, if, export, return: muuda tähistused

// = - annab väärtust
// () - tähistavad funktsiooni ja vajadusel võib funktsiooni sulgude sees mingeid väärtusi saata
// {} - JavaScript ja selle koodiblokid
// [] - useState muutuja ja funktsioon
// ; - semikoolon on rea lõpetamise tähis, aga see on vabatahtlik (kui ei pane, errorit ei tule)
// === - vasak pool ja parem on identsed, täiesti võrdsed
// > - suurem (väiksem on <)
// && - kui vasak pool on tõde, siis võta kasutusele parem pool
// () => {}   funktsiooni tähis    onClick={()=>{}}   const uue_funkts_nimi = () => {}
// ?  :  - ternary operator: kui küsimärgi ees on kirjas tõde, siis võta küsimärgi järgne, 
//                kui tõde pole, siis võta kooloni järgne kasutusele
// !   - keerab väärtuse tagurpidi    !==    !false 
// || - räägime hiljem

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  // function lisa() {} // täpselt sama mis all

  // const kontrolli = () => {
  //   if (inputiLuger.current.value.replaceAll(" ", "").length !== inputiLuger.current.value.length) {
  //     muudaSonum("Sul on tühik nimes!")
  //   }
  // }

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      muudaSonum("Ei saa tühja nimega toodet lisada!");
    } else {
      muudaSonum("Toode lisatud: " + inputiLuger.current.value);
      let tootedLS = localStorage.getItem("tooted");
      tootedLS = JSON.parse(tootedLS) || [];
      const uusToode = {
        "nimi": inputiLuger.current.value,
        "hind": Number(hindRef.current.value),
        "pilt": piltRef.current.value,
        "aktiivne": aktiivneRef.current.checked
      }
      tootedLS.push(uusToode);
      tootedLS = JSON.stringify(tootedLS);
      localStorage.setItem("tooted", tootedLS);

      // const tootedLS2 = JSON.parse(localStorage.getItem("tooted")) || [];
      // tootedLS2.push(inputiLuger.current.value);
      // localStorage.setItem("tooted", JSON.stringify(tootedLS2));

      // 1. võtame localStorage-st vanad tooted   "["Coca-cola", "Fanta", "Sprite"]"
      // 2. võtame jutumärgid väärtuselt ära   ["Coca-cola", "Fanta", "Sprite"]
      // 3. lisame ühe juurde    .push(inputiLuger.current.value);   Vichy
      // 4. paneme jutumärgid väärtusele tagasi   ["Coca-cola", "Fanta", "Sprite", "Vichy"]
      // 5. paneme localStorage-sse uuenenud väärtused   "["Coca-cola", "Fanta", "Sprite", "Vichy"]"

      // 1. localStorage.getItem("VÕTI");
      // 2. JSON.parse();
      // 3. [].push(UUS_VÄÄRTUS_MIS_JUURDE);
      // 4. JSON.stringify();
      // 5. localStorage.setItem("VÕTI", "[sada,asdas,d,sada,sd,asd]");
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <label>Uue toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Uue toote aktiivsus</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode