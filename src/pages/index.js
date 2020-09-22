import React from "react"
import ghub from "../assets/GitHub-Mark-120px-plus.png"
import flag from "../assets/flag-canada_1f1e8-1f1e6.png"
import box from "../assets/5box.jpg"
import wmp from "../assets/wmp.jpg"
import tw from "../assets/Twitter_Logo_Blue.svg"
import portfolio from "../assets/portfolio.jpg"
import resume from "../assets/public-resume.pdf"

export default function Home() {
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="links-wrapper">
          <a href="https://github.com/daqch">
            <img src={ghub} alt="github-icon" className="link" />
          </a>
          <a href="https://twitter.com/diego_aquino0">
            <img src={tw} alt="tw-icon" className="link" />
          </a>
        </div>
        <div className="routing">
          <a href="/blog">BLOG</a>
          <a href={resume}>RESUME</a>
        </div>
      </div>
      <div className="section home">
        <h1>
          Hi! I'm <span className="connected"></span>Diego.
        </h1>
        <div className="greeting">
          <p>
            I'm a <span style={{ color: "#61dafb" }}>React</span> and
            <span style={{ color: "orange" }}> &lt;WebDev/&gt; </span>{" "}
            enthusiast!
          </p>
          <p>
            I'm currently studiyng Computer Science at the University of
            Victoria <img src={flag} alt="ca" className="icon" /> .
          </p>
          <p>Feel free to contact me anytime!</p>
          <p>You can also check my projects:</p>
        </div>

        <div className="navigation">
          <div className="arrow">
            <a href="#projects">&#x2193;</a>
          </div>
        </div>
      </div>
      <div className="section projects" id="projects">
        <div className="card">
          <div className="img-wrap">
            {" "}
            <img src={wmp} alt="wmp preview"></img>
          </div>
          <div className="content-wrap">
            <h1 className="title">
              <a href="https://github.com/daqch/weeklymplus">WEEKLYMPLUS</a>
            </h1>
            <p>Full-Stack application with user authentication</p>
            <div className="tags">
              <div className="tag">Express</div>
              <div className="tag">PostgreSQL</div>
              <div className="tag">AWS EC2</div>
              <div className="tag">React</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="img-wrap">
            <img src={box} alt="5box preview"></img>
          </div>
          <div className="content-wrap">
            {" "}
            <h1 className="title">
              <a href="https://github.com/daqch/5box">5-BOX</a>
            </h1>
            <p>Mini-Puzzle game</p>
            <div className="tags">
              <div className="tag">Typescript</div>
              <div className="tag">React</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img-wrap">
            <img src={portfolio} alt="portfolio preview"></img>
          </div>
          <div className="content-wrap">
            {" "}
            <h1 className="title">
              <a href="https://github.com/daqch/diegoaquino.me">
                {" "}
                DIEGOAQUINO.ME
              </a>
            </h1>
            <p>Personal website and portfolio</p>
            <div className="tags">
              <div className="tag">Gatsby</div>
              <div className="tag">CSS3</div>
              <div className="tag">AWS Amplify</div>
            </div>
          </div>
        </div>
      </div>
      <footer> Diego Aquino Chavez 2020</footer>
    </div>
  )
}
