import React, { Fragment } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data);
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.title}</title>
      </Helmet>
      <div className="blog-post container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <i>{frontmatter.date}</i>
          <hr></hr>
          <div
            className="blog-post content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Fragment>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
