import { useState } from "react";
import productsFromFile from "../../data/products.json";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = (i) => {
    products.splice(i,1); // mitmendat, mitu tk
    setProducts(products.slice());
  }

  return (
    <div>
      {products.map((element, index) => 
        <div key={element.id}>
          {/* ID - Math.randomi abil 8 kohaline nr, unikaalsuse tunnus (URLi) */}
          <div>{element.id}</div>
          {/* Name - Ebay lehelt 3 esimest sõna */}
          <div>{element.name}</div>
          {/* Price - $10 to $15 parempoolne, ostukorvis kogusumma */}
          <div>{element.price}</div>
          {/* Image - näitame pilti */}
          <div>{element.image}</div>
          {/* See mis otsingusse panime, Kategooriate abil teeme filtreerimist */}
          <div>{element.category}</div>
          {/* Näitame vaid SingleProduct */}
          <div>{element.description}</div>
          {/* Avalehel ei näita mitteaktiivseid tooteid */}
          <div>{element.active}</div>
          {/* Lisamise kuupäeva järgi sorteerimine */}
          <div>{element.date}</div>
          <button onClick={() => deleteProduct(index)}>x</button>
          <button>Muuda</button>
        </div>)}
    </div>
  )
}

export default MaintainProducts