//import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';

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
        <button className="nupp">Tere</button>
      </Link>
      <Link to="/lisa-toode">
        <button className="nupp">Lisa</button>
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
      </Routes>


    </div>
  );
}

export default App;
