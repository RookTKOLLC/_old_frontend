import React, {useRef, useEffect, useState, createRef} from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from '../sections/Header/Header'
import Footer from '../sections/Footer'
import styled from '@emotion/styled'
import NavBar from '../sections/NavBar/NavBar'
import SocialMediaNav from '../sections/SocialMediaNav/SocialMediaNav'

const Content = styled.main`
min-height: calc(100vh - 150px);
`
const MainLayout = ({ pageTitle, children }) => {
  const [headerVisibility, setHeaderVisibility] = useState(true)
  const [initLoad, setInitLoad] = useState(true)
  console.log('headerVisibility', headerVisibility)
  const myRef = createRef();

  useEffect(() => {
    //console.log('myRef', myRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log('headerVisibility', headerVisibility);
      console.log('entry.isIntersecting', entry.isIntersecting);
      if(entry.isIntersecting != headerVisibility && initLoad == true){
        setHeaderVisibility(entry.isIntersecting);
        setInitLoad(false)
      }
    })
    observer.observe(myRef.current)
    console.log("MainLayout in observer")
  }, [])
  
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    console.log('h', headerVisibility);
  return (
    <>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header ref={myRef}/>
      <NavBar />
      <SocialMediaNav tween={headerVisibility}/>
      <Content>
        {children}
      </Content>
      <Footer />
    </>

  )
}
export default MainLayout