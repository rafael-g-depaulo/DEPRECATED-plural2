import React, { FC } from "react"
import styled from "styled-components"

// import Image from "../../Image"
import Image from "next/image"
import LogoPng from "../../../public/NavLogo.svg"

const NavbarContainer = styled.nav`
  background: #554F4F;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0 2em;
`

const NavbarList = styled.ul`
  list-style: none;
  
  display: flex;

  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  
  /* Nav items */
  > li {
    margin: 0.4em 0.2em;
    
    > a {
      background-color: rgb(255, 143, 143);
      &:hover {
        cursor: pointer;
      }
    }
  }
`

const Logo = styled(Image)`
  object-fit: contain;
  margin: 0.4em 0;
`

const NavItem: FC = ({ children }) => {
  return (
    <li><a>{ children }</a></li>
  )
}

export const Navbar: FC = ({}) => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavItem>Home</NavItem>
        <NavItem>Programação</NavItem>
        <NavItem>Fotos</NavItem>
        <NavItem>Lives</NavItem>
        <NavItem>Ficha Técnica</NavItem>
        <NavItem>Redes</NavItem>
      </NavbarList>
      <Image src="/NavLogo.svg" layout="responsive" width={123} height={41} alt="logo Plural" />
      {/* <svg src="" /> */}
    </NavbarContainer>
  )
}

export default Navbar
