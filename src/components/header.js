import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

export const Header = ({ siteTitle }) => (
  <header className='header' role='banner'>
    <div className='container'>
      <Link to='/'>
        <h1>{siteTitle}</h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}
