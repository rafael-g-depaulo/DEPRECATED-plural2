import React from 'react';
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
  return (
    <StyledPage>
      <p>{a} + {b} is {sum(a, b)}</p>
    </StyledPage>
  );
}

export default Index;
