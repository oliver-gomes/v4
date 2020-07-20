import { Link } from "gatsby"
import PropTypes from "prop-types"

import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const ListLink = props => (
  <li style={{ display: `inline-block` }}>
    <Link to={props.to} style={props.pageYT ? styles.forYT : styles.aLink}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle, newStyle }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <Link to="/" style={{ background: "none" }}>
        <img src={logo} width="100" alt="" />
      </Link>

      <ul style={{ listStyle: `none`, float: `right`, marginLeft: "auto" }}>
        <ListLink
          pageYT={newStyle}
          to="/"
          style={newStyle ? styles.forYT : styles.aLink}
        >
          {" "}
          Home
        </ListLink>
        <Link
          cover
          to="/projects/"
          bg="#2EEC96"
          style={newStyle ? styles.forYT : styles.aLink}
        >
          Projects
        </Link>
        <Link
          cover
          to="/design/"
          bg="#2EEC96"
          style={newStyle ? styles.forYT : styles.aLink}
        >
          UI/UX
        </Link>
        <Link
          paintDrip
          to="/youtube"
          color="red"
          style={newStyle ? styles.forYT : styles.aLink}
        >
          Youtube
        </Link>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const styles = {
  aLink: {
    color: "#333333",
    backgroundImage: "none",
    textDecoration: "none",
    marginLeft: `2.5rem`,
  },
  forYT: {
    color: "white",
    backgroundImage: "none",
    textDecoration: "none",
    marginLeft: `2.5rem`,
  },
}
