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
import { HiChevronRight } from '@react-icons/all-files/hi/HiChevronRight'
import { HiChevronLeft } from '@react-icons/all-files/hi/HiChevronLeft'

const Content = styled.main`
min-height: calc(100vh - 150px);
`
const shortcodes = {}

const TableOfContentsWrapper = styled.ul`
  position: fixed;
  left: calc(50% + 400px);
  top: 15rem;
  max-height: 70vh;
  width: 20rem;
  display: flex;
  padding-left:40px;
`
const TableOfContents = styled.div`
  overflow: hidden;
  //overflow-y: scroll;
  h2{
    padding-bottom: 2px;
  }
  &:hover{
    h2 {
      padding-bottom: 0px;
      border-bottom: 2px dashed #ffa039;
    }
  }
`


const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  return (
    // <Layout location={location} title={siteTitle}>
    //   <Seo
    //     title={post.frontmatter.title}
    //     description={post.frontmatter.description || post.excerpt}
    //   />
    <>

      <MDXProvider components={shortcodes}>
        <Content>
          <Container>
            <FullBleed css={css`
                  position:relative;
                  height: 40rem;
                  text-align: center;
                  background-origin: padding-box;
                  background-color: white;
                  background: var(--bg-fullbleed-linear-gradient), url(${post.frontmatter.headingImage.publicURL});
                  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
                  background-position: center;
                  background-size: cover;
                  background-repeat: no-repeat;
                  font-weight: 900;
                  text-shadow: var(--text-shadow);
                  margin-bottom: -15rem;
          `}>
              <section css={css`
              padding:1rem 0rem 0rem;
            `}>
                <Link to={post.fields.slug}
                  css={css` 
                //padding: 0rem 1rem;
                  color: var(--text); 
                  text-decoration: none;
                  position: relative;
                  overflow: hidden;
                  transition: background 175ms ease-in-out;
                  h1{
                    font-size: 3rem;
                    -webkit-box-decoration-break: clone;
                    box-decoration-break: clone;
                  }
                  &:hover{
                      color:var(--text); 
                      background: #ffa039;
                      p{
                          span{
                              background: #ffa039;
                          }
                      }
                  }
                  span{
                    -webkit-box-decoration-break: clone;
                    box-decoration-break: clone;
                    padding: 0.2rem 1rem;
                  }
              `}
                >
                  <h1
                    css={css`
                  display:inline;   
                  text-shadow: var(--text-shadow);
                  padding: 0px 1rem 0px 1rem;
              `}>{post.frontmatter.title}</h1><br /> <br />
                  <span>Last Edit: {post.frontmatter.date}</span> <br />
                  <span>  Author: {post.frontmatter.author}</span> <br />
                  <span> Editor: {post.frontmatter.editor}</span>


                </Link>


              </section>



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
            <article css={css`
            z-index:1;
            color:var(--text); 
          `}>
              <MDXRenderer >{post.body}</MDXRenderer>
            </article>

            <nav css={css`
            z-index:1;
          `}>
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
                    <Link to={previous.fields.slug} rel="prev" css={css`
                      text-decoration: none;
                      color: var(--text); 
                      transform: translateX(-24px);
                      &:after{
                          content: "";
                          width: 0;
                          display: block;
                          position: relative;
                          bottom: 6px;
                          height: 4px;
                          left: -0.3rem;
                          opacity: 1;
                          background-color: #ffa039;
                          transition: all .3s ease-in-out;

                      }
                  &:hover::after{
                    left:0;
                      width: calc(100% - 24px);
                  }

                `}>
                      <span css={css`
                      transform:translateY(10%);
                      display: inline-block;
                      transition: transform .3s ease-in-out;
                    `}>
                        <HiChevronLeft />
                        <HiChevronLeft css={css`
                      transform: translateX(-12px);
                    `} />
                        <HiChevronLeft css={css`
                      transform: translateX(-24px);
                    `} />
                      </span>
                      <span css={css`
                            transform: translateX(-24px);
                            display: inline-block;
                            font-family: 'Montserrat';
                      `}>
                        {previous.frontmatter.title.split(' ').slice(0, 5).join(' ') + ' . . .'}

                      </span>
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    //TODO FIX ANIMATION
                    <Link to={next.fields.slug} rel="next"
                      css={css`
                        text-decoration: none;
                        color: var(--text); 
                        font-family: 'Montserrat';
                        font-weight: lighter;
                        &:after{
                            content: "";
                            width: 0;
                            display: block;
                            position: relative;
                            bottom: 6px;
                            height: 4px;
                            left: 100%;
                            opacity: 1;
                            background-color: #ffa039;
                            transition: all .3s ease-in-out;
                        }
                        &:hover::after{
                            width:calc(100% - 24px);
                            left:0;
                        }

  `}>
                      {next.frontmatter.title.split(' ').slice(0, 5).join(' ') + ' . . .'}
                      <span css={css`
                      transform:translateY(10%);
                      display: inline-block;
                      transition: transform .3s ease-in-out;
                    `}>
                        <HiChevronRight />
                        <HiChevronRight css={css`
                      transform: translateX(-12px);
                    `} />
                        <HiChevronRight css={css`
                      transform: translateX(-24px);
                    `} />
                      </span>
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </Container>
        </Content>
      </MDXProvider>

      {typeof post.tableOfContents.items === 'undefined' ? null : (
        <TableOfContentsWrapper>
          <TableOfContents>
            <h2 css={css`
              color: var(--text); 
            `}>Table of contents</h2>
            {post.tableOfContents.items.map((v, i) => (
              //TODO: Check for nested headers (which are arrays of objects)
              <li key={v.url}
                css={css`
            display:flex;
          `}
              >
                <a href={v.url} key={v.url}
                  css={css`
              text-decoration: none;
              color: var(--text); 
              margin:0rem 0.8rem;
              font-weight:lighter;
              &:after{
                  content: "";
                  width: 0;
                  display: block;
                  position: relative;
                  bottom: 6px;
                  height: 4px;
                  left: -0.3rem;
                  opacity: 1;
                  background-color: #ffa039;
                  transition: all .3s ease-in-out;
              }
              &:hover::after{
                  width:100%;
                  left: 0;
              }

                          `}
                >
                  <span css={css`
                          font-weight: bold;
            `}>{i + 1}.</span> {v.title}
                </a>
              </li>
            ))}
          </TableOfContents>
        </TableOfContentsWrapper>
      )}

    </>


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
      tableOfContents
      fields {
        slug
      }
      wordCount {
        paragraphs
        sentences
        words
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
