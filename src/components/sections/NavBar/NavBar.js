import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import Logo from '../../../media/images/RookTKO.png'
import { StaticImage } from "gatsby-plugin-image"

const NavBarContainer = styled.section`
    background-color: #171717;
    // position: sticky;
    position: relative;
    width:100%;
   // box-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    //box-shadow: 
    color: #ffffff;
    top: 0px;
    z-index:1000;
    @media (max-width: 784px) {
        display:none;
    };
    clip-path: polygon(0% 0%, 55% 0%, 45% 100% , 0% 100%);
    //z-index:100;

`
const NavWrapper = styled.section`
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
    position: sticky;
    top: 0px;
    z-index:1000;
`
const NavBarLinks = styled.ul`
    list-style-type: none; 
    padding: 0.4rem; 
    margin: 0; 
    display: flex;
    justify-content: space-evenly;
    width: 50%;
`

export default function NavBar() {

    const navItems = ['Games', 'DevBlog', 'Swag'] //this needs to be fixed for mobile //

    return (
        <NavWrapper >
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
                            font-family: 'Montserrat';
                        `}> {value} </Link>
                        </li>)}
                </NavBarLinks>
            </NavBarContainer>
        </NavWrapper>
    )
}