import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container home-section">

    <div className="img-wrapper">
      <div className="duk-image"></div>
    </div>
    <div className="home-section__content">
      <h3 className="subtitle">Hello</h3>
      <h1 className="title">I'm Uche Nwakwuo</h1>
      <span className="code-name">{`{duk_stack}`}</span>
      <span className="text-content">A Full Stack Developer and UI/UX Designer.<br/>
      Chief Executive Officer at Cre8tive Tech
      </span>
      <Link to="contact" className="btn">Hire Me</Link>
    </div>
  
  </section>

  <div className="bg-circle-1"></div>
  <div className="bg-circle-2"></div>
  <div className="bg-circle-3"></div>
  </Layout>
)

export default IndexPage
