import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface NotFoundPageProps {};

const NotFoundPage: React.FC<NotFoundPageProps> = () => {

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
