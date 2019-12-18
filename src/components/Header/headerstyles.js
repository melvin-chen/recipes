import styled from "styled-components"
import { Link, Button } from "../Base/basecomponents"
import { BBh4 } from "../Base/fonts"
import { richBlack } from "../Base/colors"

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  font-family: "Noto Sans", sans-serif;
  padding-top: 15px;
  align-items: center;

  height: auto;
  background-color: white;
  z-index: 10000;
  position: fixed;
  width: 100%;
  top:0;
`

export const LogoWrapper = styled.div`
  padding-left: 50px;
`

export const HamburgerMenuContainer = styled.div`
  display: none;

  @media (max-width: 975px) {
    display: flex;
  }
  
`


export const HeaderLinkGroup = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  justify-content: space-between;
  margin-right: 50px;

  @media (max-width: 975px) {
    display: none
  }

  @media (max-width: 1200px) {
    width: 700px;
  }

`

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${richBlack};
  border-bottom: 4px solid rgba(56, 206, 194, 0);
  margin: 0 7px 0 7px;
  padding-bottom: 15px;

  
  
  :hover {
    border-bottom: 4px solid rgba(56, 206, 194, 1);
  }

`

export const BtnHeaderLink = styled(Link)`
  text-decoration: none;
  padding-bottom: 15px;

`

export const HeaderLogo = styled.img`
  width: 170px;
  padding-bottom: 15px;
  
  @media (max-width: 975px) {
    padding-bottom: 0;
  }
`
export const HeaderPage = styled(BBh4)`
  font-size: 1em; 
`

export const HeaderButton = styled(Button)`
  text-transform: uppercase;
  font-size: .83em; 
  
`
export const HeaderContainer = styled.div`

`
