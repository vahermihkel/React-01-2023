//import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import HaldaTooteid from './pages/HaldaTooteid';
import MuudaToode from './pages/MuudaToode';
import Poed from './pages/Poed';
import Tooted from './pages/Tooted';
import YksikToode from './pages/YksikToode';

// 2te tüüpi vead:
// 1. compile errors - kompileerimise errorid
// mis juhtuvad kui kood pakitakse kokku ja saadetakse brauserisse
// need vead on cmd-s ja lehel tumehalli tausta peal kirjas

// 2. runtime errors - käimasolemise errorid
// juhtuvad HTML-s või ketrab igavesti
// leht läheb valgeks ja midagi pole näha
// kirjas brauseris parem klõps -> inspect -> console
function App() {
  return (
    <div className="App">
      <Link to="/avaleht">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>
      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>
      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="/halda-tooteid">
        <button className="nupp">Halda tooteid</button>
      </Link>
      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>
      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="halda-tooteid" element={ <HaldaTooteid /> } />
        <Route path="muuda-toode" element={ <MuudaToode /> } />
        <Route path="poed" element={ <Poed /> } />
        <Route path="tooted" element={ <Tooted /> } />
        <Route path="vaata-toodet" element={ <YksikToode /> } />
      </Routes>


    </div>
  );
}

export default App;
