import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Posts } from '../components/posts';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    } 
  }
}

const Blog: React.FC<PageProps<DataProps>> = ({ data, path, location }) => (
  <Layout title={data.site.siteMetadata.title} location={location}>
    <SEO title="Blog" />
    <Posts />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
