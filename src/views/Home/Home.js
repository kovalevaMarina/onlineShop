import React, { useContext } from "react";
import ProductContext from "../../components/contexts/ProductContext";

import Hero from "../../components/Hero/Hero";
import Catalog from "../../components/Catalog/Catalog";

function Home() {
  const products = useContext(ProductContext);
  console.log(products);
  return (
    <>
      <Hero />
      <Catalog />
    </>
  );
}

export default Home;
