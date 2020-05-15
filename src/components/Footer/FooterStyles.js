import styled from "styled-components"
import { PaddedComponentWrapper, Link, OutsideLink } from "../Base/basecomponents"

export const FooterContainer = styled.footer`
    background-color: black;

`

export const FooterContentContainer = styled(PaddedComponentWrapper)`
    padding: 75px 150px 75px 150px;
    display:flex;
    justify-content: space-between;
    width: inherit;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
    }

`

export const FooterCompanyInfoContainer = styled.div`
    display: block;

    @media (max-width: 768px) {
        margin-bottom: 25px;
    }
`

export const FooterLogo = styled.img`
    height: 50px;
    width: 250px;

`

export const FooterCopyright = styled.p`
    color: white;
    margin: 20px 0 20px 0;
`

export const FooterSocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px 0 35px 0;
    width: 200px;
`

export const SocialLogo = styled.img`
    width: 25px;
    height: 25px;
`

export const ScoutTag = styled.p`
    color: white;
    margin: 35px 0 0 0;
`


export const FooterNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const FooterListContainer = styled.div`
    margin: 0 25px 0 25px;
`

export const ListTitle = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    color: white;
`

export const FooterList = styled.ul`
    list-style-type:none;
    padding: 0;
`

export const FooterItem = styled.li`
`

export const FooterLink = styled(Link)`
    text-decoration: none;
`

export const ScoutLink = styled(OutsideLink)`
    text-decoration: none;
`

export const Item = styled.p`
    color: white;
`

