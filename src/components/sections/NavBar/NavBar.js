/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from "@emotion/react"
import { Link } from 'gatsby'
import Logo from '../../../media/images/RookTKO.png'
import { StaticImage } from "gatsby-plugin-image"

const NavBarContainer = styled.section`
    background-color: #171717;
    // position: sticky;
    position: relative;
    //width:100%;
   // box-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    //box-shadow: 
    color: #ffffff;
    top: 0px;
    z-index:1000;
    @media (max-width: 784px) {
        display:none;
    };
    clip-path: polygon(0% 0%, 95% 0%, 85% 100% , 0% 100%);
    //z-index:100;

`
const NavWrapper = styled.section`
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
    position: sticky;
    top: 0px;
    z-index:1000;
    width: 52%;
    //padding-left:1rem;
`
const NavBarLinks = styled.ul`
    list-style-type: none; 
    padding: 0.4rem 0rem; 
    margin: 0px; 
    display: flex;
    justify-content: space-evenly;
    //width: 50%;
`


export default function NavBar() {

    const navItems = ['Games', 'DevBlog', 'Swag'] //this needs to be fixed for mobile //

    return (
        <NavWrapper >
            <NavBarContainer>
                <NavBarLinks>
                    {/* <span       sx={{
        // this uses the value from `theme.space[4]`
        padding: 4,
        // these use values from `theme.colors`
        color: "background",
        backgroundColor: "primary",
      }}>
                        sassas
                    </span> */}
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
                                        &:after{
                                            content: "";
                                            width: 0;
                                            display: block;
                                            position: relative;
                                            bottom: 6px;
                                            height: 4px;
                                            left: -0.3rem;
                                            opacity: 1;
                                            background-color: #ffa039;
                                            transition: all .3s ease-in-out;
                                        }
                                    &:hover::after{
                                        left:0;
                                        width:100%;
                                    }

                        `}> {value} </Link>
                        </li>)}
                </NavBarLinks>
            </NavBarContainer>
        </NavWrapper>
    )
}