import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography";

type PostsProps = {
  postsPerPage?: number;
};

export const Posts: React.FC<PostsProps> = ({ postsPerPage }) => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt,
              timeToRead,
              fields {
                slug,
              	readingTime {
          				text
                },
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `
  );

  return edges.map(({ node }) => (
    <article key={node.fields.slug}>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link
            style={{ boxShadow: `none` }}
            to={`/blog${node.fields.slug}`}
          >
            {node.frontmatter.title}
          </Link>
        </h3>
        <small>{node.frontmatter.date} - {node.fields.readingTime.text}</small>
      </header>
      <section>
        {node.frontmatter.description || node.excerpt}
      </section>
    </article>
  ))
};
