import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import styled from '@emotion/styled'

const Content = styled.main`
min-height: calc(100vh - 150px);
`
const mainLayout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  return (
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header/>
      <Content>
        {children}
      </Content>
      <Footer />
    </div>

  )
}
export default mainLayout