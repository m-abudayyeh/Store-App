import { useEffect, useState } from "react";
import axios from "axios";

// import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/products")
      .then(response => setProducts(response.data))
  }, []);

  return (
    <>
      <h1>Store Product</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="100" />
            <p>price : ${product.price}</p>
          </li>
        ))}
      </ul> 
    </>
  )
}

export default App
