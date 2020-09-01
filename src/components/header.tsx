import React from 'react';
import { Link} from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import { useLocation } from '@reach/router';

interface HeaderProps {
  pageTitle?: String;
};

const rootPath = `/`;

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  const { pathname } = useLocation();
  const additionalStyles = pathname === rootPath ? ({
    ...scale(1.5),
    marginBottom: rhythm(1.5),
  }) : ({
    fontFamily: `Montserrat, sans-serif`,
  });

  return (
    <header>
      <h1
        style={{
          marginTop: 0,
          ...additionalStyles,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {pageTitle}
        </Link>
      </h1>
    </header> 
  )
};

export default Header;
