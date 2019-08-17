import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby";
import './portfolio.css'

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
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Portfolio - Uche Nwakwuo {Duk_Stack}" />
      <section className="container portfolio-section">
        <div className="portfolio-section__content">
          <h1 className="title">Portfolio</h1>
          <span className="text-content">
            From Web Components and UI/UX animations to 
            React.JS, Redux, Vue.JS, and Node.JS. Check out 
            my latest web software development portfolio projects.
          </span>
          <div className="portfolio-content">
            {
              data.allMarkdownRemark.edges.map((edge: any): any => {
                const {title, tags, image} = edge.node.frontmatter;
                const tagList = tags.split(', ');
                const imageSrc = require(`../assets/img/${image}`);
                return (
                  <a href="single-portfolio.html">
                    <div className="portfolio-content__boxes">
                      <div className="black-overlay"></div>
                      <div className="portfolio-content__header">{title}</div>
                      <img src={imageSrc} alt="" />
                      {tagList.map((tag: any): any => {
                        return (
                          <div className="portfolio-content__tags">{tag}</div>
                        )
                      })}
                      <div className="portfolio-content__tags">More...</div>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>
      
      </section>
      <footer className="container main-footer">
            <div className="copyright">
              <p>&copy; 2019 Duk Stack. Made with 💜 for Gatsby</p>
            </div>

            <div className="social social-footer">
              <i className="zmdi zmdi-linkedin"></i>
              <i className="zmdi zmdi-twitter"></i>
              <i className="zmdi zmdi-instagram"></i>
              <i className="zmdi zmdi-facebook"></i>
              <i className="zmdi zmdi-github"></i>
              <i className="zmdi zmdi-behance"></i>
              <i className="zmdi zmdi-dribbble"></i>
            </div>
      </footer>

    <div className="bg-circle-1"></div>
    <div className="bg-circle-2"></div>
    <div className="bg-circle-3"></div>
    
    </Layout>
  )
}

export default Portfolio
