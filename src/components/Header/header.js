import PropTypes from "prop-types"
import React from "react"
import {
  HeaderContainer
} from "./headerstyles"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    {/* <HeaderWrapper>
      <Link to="/" style={{lineHeight: 0}}>
        <LogoWrapper>
          <HeaderLogo src={logo} />
        </LogoWrapper>
      </Link>
      <HeaderLinkGroup>
        <HeaderLink to="/experience/" activeStyle={{borderBottom: "4px solid rgba(56, 206, 194, 1)"}}><HeaderPage>The Experience</HeaderPage></HeaderLink>
        <HeaderLink to="/corporate/" activeStyle={{borderBottom: "4px solid rgba(56, 206, 194, 1)"}}><HeaderPage>Corporate</HeaderPage></HeaderLink>
        <HeaderLink to="/private/" activeStyle={{borderBottom: "4px solid rgba(56, 206, 194, 1)"}}><HeaderPage>Private Groups</HeaderPage></HeaderLink>
        <HeaderLink to="/story/" activeStyle={{borderBottom: "4px solid rgba(56, 206, 194, 1)"}}><HeaderPage>Our Story</HeaderPage></HeaderLink>
        <BtnHeaderLink to="/form/"><HeaderButton>Request a Quote</HeaderButton></BtnHeaderLink>
      </HeaderLinkGroup>
    </HeaderWrapper> */}
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `TestTitle`,
}

export default Header
