import React, {useRef, useEffect, useState, createRef, useMemo} from 'react'
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
  console.log('headerVisibility1', headerVisibility)
  const myRef = createRef();
  console.log('myRef.current', myRef)
  const memoMyRefCurrent = () => myRef.current;
  const memoizedCurrent = useMemo(() => memoMyRefCurrent(), [])
  useEffect(() => {
    //console.log('myRef', myRef.current);
    console.log("------------------MainLayout useEffect------------------------------------------")
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log('headerVisibility2', headerVisibility);
      console.log('entry.isIntersecting', entry.isIntersecting);
      if(entry.isIntersecting != headerVisibility && initLoad == true){
        setHeaderVisibility(entry.isIntersecting);
        setInitLoad(false)
      }
    })
    observer.observe(myRef.current)
    console.log("MainLayout in observer")
  }, [])
  

  //const memoHeaderVisbility = useMemo(() => returnHeaderVisibility(), [headerVisibility]);
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