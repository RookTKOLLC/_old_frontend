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


const Content = styled.main`
min-height: calc(100vh - 150px);
`
const MainLayout = ({ children }) => {
  const [headerVisibility, setHeaderVisibility] = useState(true)
  const myRef = createRef();

  /** 
   * Uses matchMedia to use CSS media queries params
   * to get a retrieve a boolean value based on if its
   * in mobile or pc width size
   */
   const mql = window.matchMedia('(max-width: 600px)')
   let mobileView = mql.matches;

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
    if(!mobileView){
      observer.observe(myRef.current)
    }
  }, [])
  
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
        background-image: linear-gradient(0deg, rgba(255,255,255,1) 10%,  rgba(255,255,255,0) 100%), url(${BackgroundImage});
        background-position: -10% -15%;
        background-repeat: repeat;
        background-size: auto;
        //background-color: green;
        background-attachment: fixed;
    `}>
      {/* <title></title> */}
      <Header ref={myRef}/>
      <NavBar />
      <SocialMediaNav tween={headerVisibility}/>
      {/* <HamburgerMenu /> */}
      <Content>
        {children}
      </Content>
      <Footer />
    </section>

  )
}
export default MainLayout