import React, { FC } from "react"
import styled from "styled-components"


const Container = styled.footer`
  background-color: blue;
`

export interface FooterProps {
  
}

export const Footer: FC<FooterProps> = ({
  
}) => {
  return (
    <Container>footer</Container>
  )
}

export default Footer
