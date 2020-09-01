import React from 'react';
import { Link, PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button/button.component';

const Index: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO
        title='About project'
        keywords={[`javascript`, `react`, `gatsby`, `netlify cms`]}
      />
      <h1>
        Hey people{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
    </Layout>
  )
}

export default Index;
