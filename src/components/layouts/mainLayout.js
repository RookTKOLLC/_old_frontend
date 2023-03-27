import React, {useRef, useEffect, useState, createRef, useMemo, useCallback} from 'react'
// import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from '../sections/Header/Header'
import Footer from '../sections/Footer'
import styled from '@emotion/styled'
import NavBar from '../sections/NavBar/NavBar'
import SocialMediaNav from '../sections/SocialMediaNav/SocialMediaNav'
import { css } from '@emotion/react'
import { HamburgerMenu } from '../sections/HamburgerMenu/HamburgerMenu'
import BackgroundImage from '../../media/images/polygon-scatter-haikei.svg'
import ProgressBar from '../sections/ProgressBar/ProgressBar'
import ThemeToggle from '../sections/themeToggle'
import { Spiral as Hamburger } from 'hamburger-react'

const Content = styled.main`
  min-height: calc(100vh - 150px);
`
const MainLayout = ({ children }) => {
  const [headerVisibility, setHeaderVisibility] = useState(true)
  const [mobileView, setMobileView] = useState(false);
  const myRef = createRef();





  /** 
   * Uses matchMedia to use CSS media queries params
   * to get a retrieve a boolean value based on if its
   * in mobile or pc width size
   */
   const mql = window.matchMedia('(max-width: 784px)')
   let mobileMatch = mql.matches;

  /** 
   * Uses intersection observer to observe changes to the 
   * visibility of the header and if there is then applies 
   * them to internal state.
   */
  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if(entry.isIntersecting != headerVisibility ){
        setHeaderVisibility(entry.isIntersecting);
      }
    })
    if(!mobileMatch){
      observer.observe(myRef.current)
    }
  }, [])
  
  useEffect(() => {
    if(window.innerWidth<= 800){
     setMobileView(true)
    }
 }, [window.innerWidth])


  const observer = useRef(null);
  useEffect(() => {
      observer.current = new ResizeObserver((entries, idx) => {
        if(entries[0].borderBoxSize[0].inlineSize <= 784){
          setMobileView(true)
        }else{
          setMobileView(false)
        }
      });
  
      const body = document.getElementsByTagName("BODY")[0];
      observer.current.observe(body);
  
      return () => observer.current.unobserve(body);
    });
//   const data = useStaticQuery(graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `);
// //{data.site.siteMetadata.title}
  return (
    <section css={css`
        background-color: var(--bg);
        background-image: var(--bg-linear-gradient), url(${BackgroundImage});
        background-position: -10% -15%;
        background-repeat: repeat;
        background-size: auto;
        background-attachment: fixed;
    `}>
      {!mobileView ? 
      <> 
        <Header ref={myRef}/>
        <NavBar />
        <SocialMediaNav />
        <ProgressBar />
      </>
      : <HamburgerMenu /> }
      <Content>
        {children}
      </Content>
      <Footer />
    </section>

  )
}
export default MainLayout