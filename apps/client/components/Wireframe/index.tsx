import React, { FC } from "react"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  

  background-color: rgb(255, 143, 143);
`

const Content = styled.main`
  flex-grow: 1;
`

export interface WireframeProps {
  
}

export const Wireframe: FC<WireframeProps> = ({
  children,
}) => {
  return (
    <Container>
      <Header />
      <Content>
        { children }
      </Content>
      <Footer />
    </Container>
  )
}

export default Wireframe
