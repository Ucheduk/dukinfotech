import React from 'react'
import Link from 'gatsby-link'

import Layout from "../components/layout";
import SEO from "../components/seo";
import './blog.css';
const imageSrc = require('../assets/img/placeholder.png')

const NavLink = (props) => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  console.log(pageContext)

  return (
    <Layout>
      <SEO title="Blog - Uche Nwakwuo {Duk_Stack}" />
      <section className="container blog-section">
      <h1 className="title">Blog</h1>

      {group.map(({ node }) => (
        <div className="blog-section__content" key={node.id}>
          {node.featured_media? 
            <div className="blog-section__image">
              <Link to={`blog/${node.slug}`}><img src={node.featured_media.localFile.childImageSharp.resolutions.src} alt=""/></Link>
            </div> 
            : 
              <Link to={`blog/${node.slug}`}><img src={imageSrc} alt=""/></Link>
          }
          <div className="blog-section__text-content">
            <h3 className="blog-subtitle"><i className="zmdi zmdi-label tag-label"></i> - #WORDPRESS</h3>
            <h2 className="blog-title"><Link to={`blog/${node.slug}`} dangerouslySetInnerHTML={{__html: node.title}} /></h2>
            <h5 className="blog-meta">by<span className="author"> {node.author.name}</span> - {node.date}</h5>
            <span className="text-content" dangerouslySetInnerHTML={{__html: node.excerpt}} />
          </div>
        </div>
      ))}
      <div className="pagination">
        {index != 1 ?
          <div className="previousLink">
            <i className="zmdi zmdi-arrow-left pagination-left"></i>
            <NavLink test={first} url={`/blog/${previousUrl}`} text="Go to Previous Page" />
          </div>
        :
          null
        }
        {pageCount > 1 ? <p>Page {index} of {pageCount}</p> : null}
        {index != pageCount ?
          <div className="nextLink">
            <NavLink test={last} url={`/blog/${nextUrl}`} text="Go to Next Page" />
            <i className="zmdi zmdi-arrow-right pagination-right"></i>
          </div>
        :
          null
        }
      </div>
      

    </section>

    <div className="bg-circle-1"></div>
    <div className="bg-circle-2"></div>
    <div className="bg-circle-3"></div>

    </Layout>
  )
}
export default IndexPage