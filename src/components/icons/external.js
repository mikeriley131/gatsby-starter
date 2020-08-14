import React from 'react'
import PropTypes from 'prop-types'

export const IconExternal = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 9.89 10.28"
  >
    <title>external link</title>
    <polygon points="6 0 6 1 8.36 1 3.37 5.92 4.07 6.63 8.89 1.89 8.89 9.28 1 9.28 1 1 4.25 1 4.25 0 0 0 0 10.28 9.89 10.28 9.89 0 6 0" />
  </svg>
)

IconExternal.propTypes = {
  className: PropTypes.string,
}

IconExternal.defaultProps = {
  className: '',
}
