import React from "react"
import { Helmet } from "react-helmet"

export default function Blog() {
  return (
    <div className="section">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>
      <a href="/">
        <div>Back</div>
      </a>
      <h1>Blog.</h1>
      <div className="blog-list">
        <div className="card blog-entry">
          <a href="/blog/creating-a-playback-control-for-html5-video">
            <h3 className="blog-link">
              Creating a playback control for html5 video
            </h3>
          </a>
        </div>
      </div>
    </div>
  )
}
