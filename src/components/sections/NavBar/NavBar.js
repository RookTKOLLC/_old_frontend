import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

const NavBarContainer = styled.section`
    background-color: #252423;
    position: sticky;
    width:100%;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    box-shadow: 
    color: #ffffff;
    top: 0px;
    z-index:100;
    @media (max-width: 620px) {
        display:none;
    }
`

const NavBarLinks = styled.ul`
    list-style-type: none; 
    padding: 0.4rem; 
    margin: 0; 
    display: flex;
    justify-content: center;
`


export default function NavBar(){

    const [scrollTop, setScrollTop] = useState(0);
    const navItems = ['Propoganda','Projects', 'Goodies', 'About'  ] //this needs to be fixed for mobile //
        
    const onScroll = () => {
        const docEl = document.documentElement;
        const windowScrollHeight = docEl.scrollTop;
        const currentWindowHeight = docEl.scrollHeight - docEl.clientHeight;
        const scrolled = (windowScrollHeight / currentWindowHeight) * 100;
        setScrollTop(scrolled)
      };

      useEffect(() => {
          //console.log("navBar")
          window.addEventListener("scroll", onScroll);

          return () => window.removeEventListener('scroll', onScroll)
      }, []);


      const scrollState = props => props.isScrolling ? 
        css`
            width: ${props.isScrolling}%
        `:
        css`
            width: 0%
      `
      const ProgressBar = styled.section`
        ${scrollState}
        background-color: #ffa039;
        height: 4px;
      `
    return(
        <NavBarContainer>
            <NavBarLinks>
                {navItems.map((value, idx) => 
                    <li 
                        key={idx} 
                        css={css`padding: 0px 1rem`}
                    >
                        <Link to={'/' + `${value.toLowerCase()}`}
                        css={css`
                            text-decoration: none;
                            color: #ffffff;
                            font-family: "Playfair Display";
                        `}> {value} </Link> 
                    </li>)}
            </NavBarLinks>
            <ProgressBar isScrolling={scrollTop}/>
        </NavBarContainer>
    )
}