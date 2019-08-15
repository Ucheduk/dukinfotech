import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About - Uche Nwakwuo {Duk_Stack}" />
    <section className="container home-section">
      <div className="img-wrapper">
          <div className="duk-image"></div>
        </div>
        <div className="home-section__content">
          <h1 className="title">About Me</h1>
          <span className="text-content">I am a Full Stack Developer and UI/UX Designer from Nigeria.<br/><br/> 
            I am a JavaScript preacher and a lover of responsive websites.<br/><br/>
            My current toolset includes: <br/>
            <ul>
              <li>UI/UX - Figma, AdobeXD, Illustrator and Photoshop.</li>
              <li>HTML, CSS, SASS and Bootstrap</li>
              <li>JavaScript - React, Vue, Angular, TypeScript and Nodejs.</li>
              <li>Python - Django and Flask.</li>
              <li>PHP - Laravel and Wordpress.</li>
              <li>Docker and all the other various frameworks, libraries and technologies.</li>
            </ul>
            <br/>
            If your initial thought is that I can’t be the best in everything, 
            it's okay. Send the design job to someone else, and I will take care of 
            all the code development, or whatever other role you see me best in.
            <br/><br/>
            In cases when you already have an existing team, but you would still 
            use some help, <a href="contact.html">contact me</a> as well. I’ll fit in very quickly, I promise.
          </span>
        </div>
    </section>

  <div className="bg-circle-1"></div>
  <div className="bg-circle-2"></div>
  <div className="bg-circle-3"></div>
  
  </Layout>
)

export default About
