import React, { Component } from "react"
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

interface MyProps {
    data: {[key: string]: any}
}

interface MyState {}

class PageTemplate extends Component<MyProps, MyState> {

    render() {
      const currentPage = this.props.data.wordpressPage

      console.log(currentPage);
  
      return (
            <Layout>
            <SEO title="Portfolio - Uche Nwakwuo {Duk_Stack}" />
            <section className="container portfolio-section">
                
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}} />
                <div dangerouslySetInnerHTML={{__html: currentPage.content}} />
           
            </section>

            <div className="bg-circle-1"></div>
            <div className="bg-circle-2"></div>
            <div className="bg-circle-3"></div>
            
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
