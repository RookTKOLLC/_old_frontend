import React, {useEffect, useState, useLayoutEffect, useRef} from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

const HeaderContainer = styled.div`
    background-color: #171717 !important;
        box-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    width:100%;
    color: #ffffff;
    position:sticky;
    z-index:999;
`

const CompanyName = styled.h1`
    color: #ffffff;
    margin:0px;
    font-size: 1.90rem;
    text-shadow: 1px 1px 2px rgba(170, 170, 170, 0.623);
    display: flex;
    justify-content: center;
    &:before,
    &:after {
        display: inline-block;
        opacity: 0;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
        -moz-transition: -moz-transform 0.3s, opacity 0.2s;
        transition: transform 0.3s, opacity 0.2s;
    }
    &:before{
        margin-right: 5px;
        content: '[ ♜ ]';
        -webkit-transform: translateX(20px);
        -moz-transform: translateX(20px);
        transform: translateX(20px);
    }
    &:after{
        margin-left: 5px;
        content: '[ ♜ ]';
        -webkit-transform: translateX(-20px);
        -moz-transform: translateX(-20px);
        transform: translateX(-20px);
    }
    &:hover::before,
    &:hover::after,
    &:focus::before,
    &:focus::after, {
        opacity: 1;
        -webkit-transform: translateX(0px);
        -moz-transform: translateX(0px);
        transform: translateX(0px);
        z-index:0;
        }
        &:hover{
        color: #ffa039;
    }
    font-family: 'Montserrat';
`


const Header = React.forwardRef((props, ref) => {


    /** 
   * Uses matchMedia to use CSS media queries params
   * to get a retrieve a boolean value based on if its
   * in mobile or pc width size
   */
    //  const mql = window.matchMedia('(max-width: 600px)')
    //  let mobileMatch = mql.matches;


//    const resizeObserver = new ResizeObserver(entries => {
//     for(const entry of entries) {
//         if(entry.contentBoxSize)
//             console.log("element re-sized")
//     }
// })
    // useEffect(() => {
    //     console.log('this is :', document.querySelector('body'))
    // }, [])
    // //resizeObserver.observe(document.getElementById('hm'))
    // console.log('heade ref', ref)
        return (
            <HeaderContainer ref={ref}>
                <Link to="/" css={css`
                    text-decoration: none;
                    color: white;
                `}>
                    <CompanyName>RookTKO</CompanyName>
                </Link>
            </HeaderContainer>
        );
});

export default Header;