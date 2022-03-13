import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from '../sections/Header/Header'
import Footer from '../sections/Footer'
import styled from '@emotion/styled'
import { Container } from './Container'
import NavBar from '../sections/NavBar/NavBar'
import SocialMediaNav from '../sections/SocialMediaNav/SocialMediaNav'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css, keyframes } from "@emotion/react"
import { FullBleed } from '../sections/FullBleed'

const Content = styled.main`
min-height: calc(100vh - 150px);
`
const shortcodes = {}

// // export const query = graphql`
// //   query {
// //     allMdx(sort: {fields: frontmatter___date, order: DESC}) {
// //       nodes {
// //         frontmatter {
// //           date(formatString: "MMMM D, YYYY")
// //           title
// //         }
// //         id
// //         body
// //       }
// //     }
// //   }
// // `
// export default function Post({ children }) {

//   return (
//     <MDXProvider components={shortcodes}>
//       <Content>
//         <Container>
//           <p>POST</p>
//           {children}
//         </Container>
//       </Content>
//     </MDXProvider>
//   )
// }


const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  console.log('data.mdx', data.mdx)
  return (
    // <Layout location={location} title={siteTitle}>
    //   <Seo
    //     title={post.frontmatter.title}
    //     description={post.frontmatter.description || post.excerpt}
    //   />

      <MDXProvider components={shortcodes}>
        <Content>
          <Container>
          <FullBleed css={css`
            text-align: center;
            background-origin: padding-box;
                  background-color: white;
                  background: linear-gradient(0deg, rgba(0,0,0, 0.7) 45%,  rgba(0,0,0, 0) 100%), url(${post.frontmatter.headingImage.publicURL});
                  -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
                  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
                  background-position: center;
                  background-size: cover;
                  background-repeat: no-repeat;
          `}>
            <h1>{post.frontmatter.title}</h1>
              <span>Last Edit: {post.frontmatter.date}</span> <br />
              <span>  Author: {post.frontmatter.author}</span> <br />
              <span> Editor: {post.frontmatter.editor}</span>

            
          </FullBleed>
            {/* <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header> */}
            <MDXRenderer>{post.body}</MDXRenderer>
            <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
          </Container>
        </Content>
      </MDXProvider>



  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        editor
        headingImage {
          publicURL
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
