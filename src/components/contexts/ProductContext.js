import React from "react";
import { useEffect, useState } from "react";

const ContextProduct = React.createContext();

function ProductContext({ children }) {
  const apiProduct = `https://fakestoreapi.com/products/`;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const data = await fetch(apiProduct);
        const response = await data.json();
        setProducts(response);
      };
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <ContextProduct.Provider value={{ products, setProducts }}>
      {children}
    </ContextProduct.Provider>
  );
}

export default ProductContext;
