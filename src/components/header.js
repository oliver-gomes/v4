import { Link } from "gatsby"
import PropTypes from "prop-types"

import React from "react"
import styled from 'styled-components';
import logo from '../images/logo.png'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginLeft: `2.5rem` }}>
    <Link to={props.to} style={styles.aLink}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle, }) => (
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
        alignItems: `center`
      }}
    >
      <Link to="/" style={{ background: 'none' }}><img src={logo} width="100" alt="" /></Link>
      <ul style={{ listStyle: `none`, float: `right`, marginLeft: 'auto' }}>
        <ListLink to="/" > Home</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/design/">UI/UX</ListLink>
        <ListLink to="/youtube/">Youtube</ListLink>
      </ul>
    </div>
  </header >
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
  }
}