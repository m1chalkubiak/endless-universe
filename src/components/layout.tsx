import React from 'react';

import { Link, PageRendererProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import Button from './button/button.component';
import Header from './header';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { rhythm } from '../utils/typography';

const shortcodes = { Link, Button };

interface LayoutProps {
  pageContext?: {
    frontmatter: {
      title: string;
    }
  },
};

const Layout: React.FC<LayoutProps> = ({ children, pageContext }) => {
  const { title } = useSiteMetadata();
  const pageTitle = title || pageContext?.frontmatter?.title;

  return (
    <article
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header pageTitle={pageTitle} />
      <main>
        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </article>
  )
};

export default Layout;
