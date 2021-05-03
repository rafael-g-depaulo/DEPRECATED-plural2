import React from 'react'
import styled from 'styled-components'

import { sum } from "../utils/test"
import { useAllAnimals } from "@plural2/connect-backoffice"

const StyledPage = styled.div`
  .page {
  }
`

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  const a = 67
  const b = 2

  const { data } = useAllAnimals()
  return (
    <StyledPage>
      <p>{a} + {b} is {sum(a, b)}</p>
      <p>running in {process.env.NODE_ENV !== "production" ? "development" : "production"} environment</p>
      <ul>
        {data && data.map(animal => (
          <li key={animal.id}> title: {animal.name} goodboy: {`${animal.goodBoy}`}</li>
        ))}
      </ul>
    </StyledPage>
  )
}

export default Index
