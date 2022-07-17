import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/pullingteethlogo.svg';

const Header = () => (
  <header className="header" role="banner">
    <div className="container">
      <Link to="/">
        <img
          src={logo}
          alt="Pulling Teeth logo"
          loading="lazy"
          width="1200"
          height="368"
          decoding="async"
        />
      </Link>
    </div>
  </header>
);

export default Header;
