/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/Footer/Footer"

import Header from "../components/Header/header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    (!data ? 
      <p>Loading</p> :
      <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer
        />
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>)
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

