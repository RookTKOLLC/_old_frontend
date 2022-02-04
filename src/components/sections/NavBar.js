import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

const NavBarContainer = styled.div`
    background-color: #252423;
    position: sticky;
    width:100%;
    box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
    color: #ffffff;
    top: 0px;
    z-index:100;
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
          window.addEventListener("scroll", onScroll);

          return () => window.removeEventListener('scroll', onScroll)
      }, []);


    return(
        <NavBarContainer>
            <ul css={css`
            list-style-type: none; 
            padding: 0px; 
            margin: 0; 
            display: flex;
            justify-content: center;
            `}>
                {navItems.map(value => <li css={css`padding: 0px 1rem`}>
                    <Link to={'/' + value.toLowerCase()}
                    css={css`
                        text-decoration: none;
                        color: #ffffff;
                        font-family: "Playfair Display";
                    `}> {value} </Link> 
                </li>)}
            </ul>
            <div css={css`
                width: ${scrollTop}%;
                background-color: #ffa039;
                height: 4px;
            `}/>
        </NavBarContainer>
    )
}