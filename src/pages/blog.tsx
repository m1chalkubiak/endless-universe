import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Posts } from '../components/posts';

const Blog: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Blog" />
    <Posts />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Blog;
