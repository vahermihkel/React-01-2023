// ffc - Simple React Snippets
// rfce - ES7 Snippets

import { useRef, useState } from "react";

// 1. andmebaas (omaette liidestus)
// 2. brauserisse salvestamine (lokaalmällu)
// 3. faili salvestamine - logid  7 päeva

function Seaded() {
  // HTML uuendus käib läbi useState või URL muutuse
                          // kui võtit ei ole olemas, on väärtuse taga "null"
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "ee");

  // const muudaKeelEE = () => {
  //   uuendaKeel("ee");
  //   localStorage.setItem("keel","ee"); // salvestus ehk saatmine brauseri lokaalmällu
  // }

  // const muudaKeelEN = () => {
  //   uuendaKeel("en");
  //   localStorage.setItem("keel","en");
  // }

  // const muudaKeelRU = () => {
  //   uuendaKeel("ru");
  //   localStorage.setItem("keel","ru");
  // }

  const muudaKeel = (uusKeel) => {
    uuendaKeel(uusKeel);
    localStorage.setItem("keel",uusKeel)
  }

  

  const emailLuger = useRef();

  const telefonLuger = useRef();

  const salvestaEmail = () => {
    localStorage.setItem("email", emailLuger.current.value);
  }

  const salvestaTelefon = () => {
    localStorage.setItem("telefon", telefonLuger.current.value);
  }

  return (
    <div>
      <label>Email</label>
      <input ref={emailLuger} defaultValue={localStorage.getItem("email")} type="text" />
      <button onClick={salvestaEmail}>Sisesta</button>
      <br />
      <label>Telefoninumber</label>
      <input ref={telefonLuger} defaultValue={localStorage.getItem("telefon")} type="text" />
      <button onClick={salvestaTelefon}>Sisesta</button>
      <br />
      <button onClick={() => muudaKeel("ee")}>Eesti</button>
      <button onClick={() => muudaKeel("en")}>English</button>
      <button onClick={() => muudaKeel("ru")}>Pycckuj</button>
      {keel === "ee" && <div>Leht on eesti keeles</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "ru" && <div>leht_on_eesti_keeles RU</div>}
    </div>
  )
}
// onClick={muuda}    onClick={() => muuda("te")}   


// ee / est    otsida projektist kas on juba mingeid keeleasju tehtud ja jätkata sama teed
// valida, aga siis kasutada kõikide keelte jaoks sama lühendit ee  +  ru   + en     est + eng + rus

export default Seaded