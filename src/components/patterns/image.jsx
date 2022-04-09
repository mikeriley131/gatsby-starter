import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({ srcSmall, srcMed, srcLarge, alt, lazyLoad }) => (
  <picture>
    <source srcSet={srcLarge} media="(min-width: 1200px)" />
    <source srcSet={srcMed} media="(min-width: 720px)" />
    <img src={srcSmall} alt={alt} loading={`${lazyLoad ? 'lazy' : 'eager'}`} />
  </picture>
);

Image.propTypes = {
  srcSmall: PropTypes.string.isRequired,
  srcMed: PropTypes.string,
  srcLarge: PropTypes.string,
  alt: PropTypes.string.isRequired,
  lazyLoad: PropTypes.bool,
};

Image.defaultProps = {
  lazyLoad: false,
  srcMed: '',
  srcLarge: '',
};
