import React from "react"

export default function Blog() {
  return (
    <div className="section">
      <a href="/">
        <div>Back</div>
      </a>
      <h1>Blog.</h1>
      <div className="blog-list">
        <div className="blog-entry">
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
