const path = require('path');
const slash = require(`slash`);
const createPaginatedPages = require('gatsby-paginate');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const portfolioTemplate = path.resolve('./src/templates/portfolio.tsx');
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: portfolioTemplate,
      path: `/portfolio/${edge.node.fields.slug}/`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
            title
            slug
            excerpt
            author {
              name
            }
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
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.tsx`)

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  createPaginatedPages({
    edges: allWordpressPost.edges,
    createPage: createPage,
    pageTemplate: 'src/templates/blog.tsx',
    pageLength: 2,
    pathPrefix: 'blog'
  })

  const postTemplate = path.resolve(`./src/templates/post.tsx`);

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}
