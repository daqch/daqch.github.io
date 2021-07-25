import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import PostLink from "../components/post-link";
import "../styles/blog.css";

export default function Blog({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <div className="blog container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>
      <a href="/">
        <div>Back</div>
      </a>
      <h1>The Blog</h1>
      <div className="blog-list">
        {edges.map((edge) => (
          <PostLink key={edge.node.id} post={edge.node}></PostLink>
        ))}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
