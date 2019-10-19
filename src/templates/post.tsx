import React, { Component } from "react"
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import './post.css';

const imageSrc = require('../assets/img/placeholder.png')

interface MyProps {
    data: {[key: string]: any}
}

interface MyState {}

class PostTemplate extends Component<MyProps, MyState> {

    render() {
      const currentPost = this.props.data.wordpressPost

      const resolutions = currentPost.featured_media.localFile.childImageSharp.resolutions

      console.log(currentPost);
  
      return (
            <Layout>
            <SEO title="Portfolio - Uche Nwakwuo {Duk_Stack}" />

            <section className="container single-post-section">
              <div className="single-post-section__content">
                <h1 className="title">{currentPost.title}</h1>
                <span className="tags-date">
                  <h3 className="blog-subtitle">{currentPost.date} | <i className="zmdi zmdi-label tag-label"></i> #WORDPRESS</h3>
                </span>
            
                <div className="single-post-content__boxes">
                  {resolutions? 
                    <img src={resolutions.src} alt="" />
                    :
                    <img src={imageSrc} alt="" />
                  }
                  
                </div>

                <span className="text-content" dangerouslySetInnerHTML={{__html: currentPost.content}} />

                
              </div>
            </section>

            <div className="bg-circle-1"></div>
            <div className="bg-circle-2"></div>
            <div className="bg-circle-3"></div>
            
            </Layout>
        )
    }
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      excerpt
      content
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        localFile {
          childImageSharp {
            resolutions(width:700, height:400) {
              src
              width
              height
            }
          }
        }
      }
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
