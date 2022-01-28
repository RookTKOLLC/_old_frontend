import * as React from 'react'
import Layout from '../components/layouts/mainLayout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Container } from '../components/sections/Container'

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt(pruneLength: 150)
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        slug
      }
    }
  }
`
const LatestPosts = styled.div`
    display: grid;
    grid-template-columns: 1fr min(80ch, calc(100% - 64px)) 1fr;
    grid-column-gap: 32px;
    & > *{
        grid-column: 2;
    }
`;


const Index = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
        <Container>
        <ul>
        {       
            data.allMdx.nodes.map((node) => (
            <article key={node.id}>
                <h2><Link to={"/" + node.slug}>{node.frontmatter.title}</Link></h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>Stuff</p>
                <p>{node.excerpt}</p>
                {/* <MDXRenderer>
   
                    {node.exc}
                </MDXRenderer> */}
            </article>
            ))
        }
      </ul>
        </Container>
    </Layout>
  )
}
export default Index