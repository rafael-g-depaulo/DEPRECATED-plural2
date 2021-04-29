import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { sum } from "utils/test"

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  const a = 67
  const b = 2

  const [animals, setAnimals] = useState([])

  useEffect(() => {
    fetch('/strapi/animals')
      .then(a => a.json())
      .then(a => {
        console.log("result?", a)
        setAnimals(a)
        // console.log("result?", a)
        // console.log("result?", a)
        // console.log("result?", a)
      })
  }, [])
  return (
    <StyledPage>
      <p>{a} + {b} is {sum(a, b)}</p>
      <ul>
        {animals.map((animal, i) => (
          <li key={animal.id}>title: {animal.title}</li>
        ))}
      </ul>
    </StyledPage>
  );
}

export default Index;
