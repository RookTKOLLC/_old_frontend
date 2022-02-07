import * as React from 'react'
import Layout from '../components/layouts/MainLayout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Container } from '../components/layouts/Container'
import { css, keyframes } from "@emotion/react"

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt(pruneLength: 150)
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          type
        }
        id
        body
        slug
      }
    }
  }
`
const borderAnimation = keyframes`
  to {
    background-position: 50% 0%, 50% 100%, 0% 0%, 100% 100%;
  }
`
const RecentPosts = styled.article`
  margin-bottom: 3em;
  padding: 0.2em 2em;
  width: 100%;
  background: linear-gradient(90deg, #ffa039 60%, transparent 50%), 
              linear-gradient(90deg, #ffa039 60%, transparent 50%), 
              linear-gradient(0deg, #ffa039 60%, transparent 50%), 
              linear-gradient(0deg, #ffa039 60%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 6px 3px, 6px 3px, 3px 6px, 3px 6px;
  background-position: 5% 0%, 98% 100%, 0% 100%, 100% 0px;
  border-radius: 2px;
  transition: all 300ms ease-in-out; 

  &:hover{
    animation: ${borderAnimation} 16s linear infinite alternate ;
    transform: scale(1.02);
  	-webkit-box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
	   -moz-box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
     box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`


const Index = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
        <Container>
          {/* Todo: add hero??
           Todo: add other info? */}
  <ul css={css`
    margin: 0px;
    padding: 0px;
    padding-right:3rem;
    &:first-of-type {
      margin-top: 3em;
    }
  `}>
  {       
      data.allMdx.nodes.map((node) => (
      <RecentPosts 
        key={node.id}>
          <section css={css`
            //background: linear-gradient(hsla(0,0%,94.9%,.05),hsla(0,0%,94.9%,.15) 25%,green),rgba(0,0,0,.4);//todo: add blur or remove div
          `}> 
            <h2 css={css`
              position: relative;
              top: -4rem;
              text-align: center;
              background-color: #252423;
              float: right;
              text-shadow: 1px 1px 2px rgba(170, 170, 170, 0.623);
              padding: 0rem 0.5rem;
              border: 3px solid #ffa039;
            `}><Link 
            css={css`
            color: #FFF;
            font-family: 'Montserrat';
            text-decoration: none;
            &:hover{
              color: #FFF;
              box-shadow: none;
            }
            `}
            to={"/" + node.slug}>{node.frontmatter.title.split(' ').slice(0,5).join(' ') + (node.frontmatter.title.split(' ').length > 5 ? '...' : '') }</Link></h2>
            <h3 css={css`
              margin-bottom: 0rem;
            `}>{node.frontmatter.type}</h3>
            <p css={css`
              color: #999999;
              margin: 0rem;
              position: relative;
              top: -1rem;
              font-size: 0.8rem;
            `}> Posted: {node.frontmatter.date}
            </p>
            <p>{node.excerpt}</p>
            {/* <MDXRenderer>

                {node.exc}
          </MDXRenderer> */}
          </section>
      </RecentPosts>
      ))
  }
</ul>
        </Container>
    </Layout>
  )
}
export default Index