import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Posts } from './posts/posts.component';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    } 
  }
}

export const Blog: React.FC<PageProps<DataProps>> = ({ data, path, location }) => (
  <Layout title={data.site.siteMetadata.title} location={location}>
    <SEO title="Blog" />
    <Posts />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);
