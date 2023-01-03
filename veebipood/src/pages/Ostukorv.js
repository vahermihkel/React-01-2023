
// ffc
// rfce

import { Link } from "react-router-dom"

// Line 14:8:  'Link' is not defined ---> ta ei saa aru, mis asi on Link

function Ostukorv() {
  return (
    <div>
      <div>Ostukorv</div>
      <button>Lisa ostukorvi</button>
      <Link to="/">
        Ostukorv on tühi, mine lisa tooteid!
      </Link>
    </div>
  )
}

export default Ostukorv