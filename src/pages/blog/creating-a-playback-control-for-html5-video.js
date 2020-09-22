import React from "react"
import { Helmet } from "react-helmet"

export default function BlogEntry() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Entry</title>
      </Helmet>
      <a href="/blog">
        <div>Back</div>
      </a>
      <h1>Coming soon...</h1>
    </div>
  )
}
