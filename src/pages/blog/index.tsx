import { graphql } from 'gatsby';
import { Blog } from './blog.component';

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