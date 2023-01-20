import productsFromFile from "../data/products.json";

function HomePage() {

  const addToCart = () => {
    // KODUS
  }

  return (
    <div>
      {productsFromFile.map(element => 
        <div key={element.id}>
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <div>{element.date}</div>
          <button>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default HomePage