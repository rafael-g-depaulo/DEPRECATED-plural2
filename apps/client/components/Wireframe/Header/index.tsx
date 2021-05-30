import React from 'react'

import styled from 'styled-components'
import Navbar from './Navbar'

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  background-color: pink;
`

export const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  )
}

export default Header
