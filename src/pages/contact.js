import React from "react"

export default function Contact() {
  return (
    <div>
      <a href="/">Back</a>
      <h1>Contact.</h1>
      <form className="contact-form">
        <input type="text" placeholder="from"></input>
        <input
          type="text"
          style={{ width: "200px", height: "200px" }}
          placeholder="Your message..."
        ></input>
        <button>Send</button>
      </form>
    </div>
  )
}
