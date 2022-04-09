import React from 'react'
import PropTypes from 'prop-types'

import { IconExternal } from '../icons/external'

export const Button = ({
  ctaText,
  ctaUrl,
  isReversed,
  isSolid,
  hasIcon,
  onClick,
}) => {
  if (onClick) {
    return (
      <button
        className={`button ${isReversed && 'button--reversed'} ${isSolid &&
          'button--solid'}`}
        type="button"
        aria-label="show more stores"
        onClick={onClick}
      >
        <span>{ctaText}</span>
      </button>
    )
  }

  return (
    <a
      className={`button ${isReversed && 'button--reversed'} ${isSolid &&
        'button--solid'}`}
      href={ctaUrl}
    >
      <span>{ctaText}</span>{' '}
      {hasIcon && <IconExternal className="button__icon" />}
    </a>
  )
}

Button.propTypes = {
  ctaText: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string,
  hasIcon: PropTypes.bool,
  isReversed: PropTypes.bool,
  isSolid: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  ctaUrl: '',
  hasIcon: false,
  isReversed: false,
  isSolid: false,
  onClick: null,
}
