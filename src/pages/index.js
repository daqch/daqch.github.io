import React, { useEffect } from "react";
import ghub from "../assets/GitHub-Mark-120px-plus.png";
import box from "../assets/5box.jpg";
import wmp from "../assets/wmp.jpg";
import tw from "../assets/Twitter_Logo_Blue.svg";
import portfolio from "../assets/portfolio.jpg";
import resume from "../assets/public-resume.pdf";
import vancouver from "../assets/vancouver3.jpg";
import { Helmet } from "react-helmet";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import message from "../assets/Envelope_alt_font_awesome.svg.png";
import user from "../assets/1200px-User_font_awesome.svg.png";
import hammer from "../assets/1200px-Hammer_-_Noun_project_1306.svg.png";

export default function Home() {
  useEffect(() => {
    sal({
      threshold: 0.1,
    });
  }, []);

  return (
    <div className="wrapper">
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-175527990-2"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-175527990-2');`}
        </script>

        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>

      <div
        className="section home"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.6)
          ),url(${vancouver})`,
        }}
      >
        <div
          data-sal="slide-up"
          data-sal-duration="600"
          data-sal-delay="200"
          data-sal-easing="ease-out-back"
          className="card"
          className="navbar"
        >
          <div className="links-wrapper">
            <a href="https://github.com/daqch">
              <img src={ghub} alt="github-icon" className="link" />
            </a>
            <a href="https://twitter.com/diego_aquino0">
              <img src={tw} alt="tw-icon" className="link" />
            </a>
          </div>

          <div
            data-sal="slide-up"
            data-sal-duration="600"
            data-sal-delay="200"
            data-sal-easing="ease-out-back"
            className="card"
            className="routing"
          >
            <a href="/blog">BLOG</a>
            <a href={resume}>RESUME</a>
          </div>
        </div>
        <div className="content">
          <div className="greeting">
            <h1
              data-sal="slide-up"
              data-sal-duration="1200"
              data-sal-delay="100"
              data-sal-easing="ease-out-back"
            >
              <span className="connected"></span>
              <span>Diego</span> Aquino
            </h1>
            <p
              data-sal="slide-up"
              data-sal-duration="1200"
              data-sal-delay="100"
              data-sal-easing="ease-out-back"
            >
              Web Enthusiast | CS student at UVic
              <span className="blink">_</span>
            </p>
            <div
              data-sal="flip-right"
              data-sal-duration="1200"
              data-sal-delay="100"
              data-sal-easing="ease-out-back"
              className="sections"
            >
              <a href="#projects">
                <img src={hammer} className="icon"></img>Projects
              </a>
              <a href="#about">
                <img src={user} className="icon"></img>About
              </a>
              <a href="#contact">
                <img src={message} className="icon"></img>Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section projects" id="projects">
        <h1
          data-sal="slide-right"
          style={{ padding: "1em", alignSelf: "flex-start" }}
        >
          Projects:
        </h1>
        <div
          data-sal="slide-up"
          data-sal-duration="1200"
          data-sal-delay="100"
          data-sal-easing="ease-out-back"
          className="card"
        >
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

        <div
          data-sal="slide-up"
          data-sal-duration="1200"
          data-sal-delay="200"
          data-sal-easing="ease-out-back"
          className="card"
        >
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
        <div
          data-sal="slide-up"
          data-sal-duration="1200"
          data-sal-delay="300"
          data-sal-easing="ease-out-back"
          className="card"
        >
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
      <div
        data-sal="fade"
        data-sal-duration="1200"
        data-sal-delay="100"
        data-sal-easing="ease-out-back"
        id="about"
        className="section about"
      >
        <h1>Hello world!</h1>
        <p>I'm an in-training web developer based in Victoria, BC, Canada.</p>
        <p>
          I discovered React in 2018 and since then I have been learning Front
          and Back-End development.
        </p>
        <p>I'm always willing to work with new technologies.</p>
        <p>
          Recently, I started working with GraphQL and I am currently
          transfering my projects and creating new ones with ApolloGraphQL.
        </p>
      </div>
      <div id="contact" className="section contact">
        <h2>
          Please, feel free to contact me to talk about Web Development,
          Programming or anything really!
        </h2>
        <form
          action="https://getform.io/f/3d1c0d74-8305-4d9e-9c3e-842b7fc12d4f"
          method="POST"
        >
          <input type="text" name="name" placeholder="Name"></input>
          <input type="email" name="email" placeholder="E-mail"></input>
          <textarea
            style={{ height: "200px" }}
            className="message"
            placeholder="Message"
            type="text"
            name="message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
