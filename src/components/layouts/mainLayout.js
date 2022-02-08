import React, {useRef, useEffect, useState, createRef, useMemo, useCallback} from 'react'
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
  console.log('new load')
  //const [initLoad, setInitLoad] = useState(true)
  console.log('headerVisibility1', headerVisibility)
  const myRef = createRef();
  console.log('myRef.current', myRef)
  const memoMyRefCurrent = () => myRef.current;
  const memoizedCurrent = useCallback(() => memoMyRefCurrent(), [])

  /** 
   * Uses intersection observer to observe changes to the 
   * visibility of the header and if there is then applies 
   * them to internal state.
   */
  useEffect(() => {
    //console.log('myRef', myRef.current);
    console.log("------------------MainLayout useEffect------------------------------------------")
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log('headerVisibility2', headerVisibility);
      console.log('entry.isIntersecting', entry.isIntersecting);
      if(entry.isIntersecting != headerVisibility ){
        setHeaderVisibility(entry.isIntersecting);
        //setInitLoad(false)
      }
    })
    observer.observe(myRef.current)
    console.log("MainLayout in observer")
  }, [])
  
  /** 
   * Uses matchMedia to use CSS media queries params
   * to get a retrieve a boolean value based on if its
   * in mobile or pc width size
   */
  const mql = window.matchMedia('(max-width: 600px)')
  let mobileView = mql.matches;
  
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