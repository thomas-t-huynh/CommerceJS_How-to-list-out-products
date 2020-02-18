import React, { useEffect, useState } from "react";

import ItemCard from "./components/itemCard";

import styled from "styled-components";
import Commerce from "@chec/commerce.js";

// Create new Commerce object passing in the api key as an arguement.
const commerce = new Commerce("Your API key here");

/* Styled component. Play around with the styles to understand it better and
and change it to your own liking.*/
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
`;

export default function App() {
  // state is used to store the product's list so we can render it
  const [products, setProducts] = useState([]);

  /* useEffect will fetch the data after initial render, sets the state with the
  fetched data, and then rerenders with the state*/
  useEffect(() => {
    commerce.products.list().then(res => {
      setProducts(res.data);
    });
  }, []);

  /* We use the Container styled component seen above. We map out the state into
  each of its own ItemCard component and pass down item details with props.*/
  return (
    <Container>
      {products.map(product => (
        <ItemCard key={product.id} {...product} />
      ))}
    </Container>
  );
}
