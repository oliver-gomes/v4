/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Link } from 'gatsby'
import Header from "./header"
import "./layout.css"

const Layout = ({ children, color }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <section style={color ? { backgroundColor: 'red', height: '100%', color: 'white' } : null}>
        <Header siteTitle={data.site.siteMetadata.title} newStyle={color ? true : false} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer style={{ marginTop: 80 }}>
            © {new Date().getFullYear()} Designed & Coded by <Link to="/" style={color ? { color: 'white' } : null}>Oliver Gomes</Link>  <br></br>Built with
             <span></span> <a href="https://www.gatsbyjs.org" style={color ? { color: 'white' } : null}>Gatsby</a>
          </footer>
        </div>
      </section>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
