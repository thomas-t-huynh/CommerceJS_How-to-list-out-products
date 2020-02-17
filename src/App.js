import React, { useEffect, useState } from "react";

import ItemCard from "./components/itemCard";

import styled from "styled-components";
import Commerce from "@chec/commerce.js";

const commerce = new Commerce(
  "pk_test_177871afd62cc5ce3369942a81cee69bd7bcd3814c1a5"
);

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
`;

// commerce.products.list().then(res => console.log(res));

export default function App() {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    commerce.products.list().then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Container>
      {products.map(product => (
        <ItemCard key={product.id} {...product} />
      ))}
    </Container>
  );
}
