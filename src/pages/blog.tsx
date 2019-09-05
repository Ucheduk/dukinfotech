import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby";
import './blog.css'
const imageSrc = require('../assets/img/dukstack.png')

import Layout from "../components/layout";
import SEO from "../components/seo";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              tags
              image
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Portfolio - Uche Nwakwuo {Duk_Stack}" />
      <section className="container blog-section">
        <h1 className="title">Blog</h1>
          <div className="blog-section__content">
            <img className="blog-section__image" src={imageSrc} alt="" />
            <div className="blog-section__text-content">
              <h3 className="blog-subtitle"><a href=""><span className="cat-box">W</span> - WORDPRESS</a></h3>
              <h2 className="blog-title"><a href="">Load Google Fonts 5x Faster in WordPress</a></h2>
              <h5 className="blog-meta">by<span className="author"> Uche Nwakwuo</span> - March 10, 2019</h5>
              <span className="text-content">
                You may have noticed that after adding Google Fonts, your site 
                load time increases by around 500ms. If…
              </span>
            </div>
          </div>

          <div className="blog-section__content">
              <img className="blog-section__image" src={imageSrc} alt="" />
              <div className="blog-section__text-content">
                <h3 className="blog-subtitle"><a href=""><span className="cat-box">W</span> - WORDPRESS</a></h3>
                <h2 className="blog-title"><a href="">Load Google Fonts 5x Faster in WordPress</a></h2>
                <h5 className="blog-meta">by<span className="author"> Uche Nwakwuo</span> - March 10, 2019</h5>
                <span className="text-content">
                  You may have noticed that after adding Google Fonts, your site 
                  load time increases by around 500ms. If…
                </span>
              </div>
            </div>
      </section>

    <div className="bg-circle-1"></div>
    <div className="bg-circle-2"></div>
    <div className="bg-circle-3"></div>
    
    </Layout>
  )
}

export default Portfolio
