import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram'
import { FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare'
import { ImSteam } from '@react-icons/all-files/im/ImSteam'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { SiTiktok } from '@react-icons/all-files/si/SiTiktok'
import { FaItchIo } from '@react-icons/all-files/fa/FaItchIo'
import { GrLinkedin } from '@react-icons/all-files/gr/GrLinkedin'
import { IconContext } from "react-icons";

function SocialMediaNav({tween}) {
    const [isScroling, setIsScrolling] = useState(0);
    const [toggleNavDisplay, setToggleNavDisplay] = useState(false)
    const [distanceFromTop, setDistanceFromTop] = useState(0)
    console.log('re-render')
    //console.log('tween in social', tween)
    //console.log('toggleNavDisplay', toggleNavDisplay)
    useEffect(() => {
        //console.log("toggletween")
        if(!tween && !toggleNavDisplay){
            console.log('this hsould only happen once!!!')
            setToggleNavDisplay(!tween);
        }
        //console.log('toggleNavDisplay2', toggleNavDisplay)
    }, [tween])


    const navItems = ['Propoganda','Projects', 'Goodies', 'About'  ] //this needs to be fixed for mobile //
        
    const onScroll = () => {
        const docEl = document.documentElement;
        const windowScrollHeight = docEl.scrollTop;
        const currentWindowHeight = docEl.scrollHeight - docEl.clientHeight;
        const scroll = (windowScrollHeight / currentWindowHeight) * 100;
        setIsScrolling(scroll)
        console.log('isscrolling on scoai' , isScroling)
      };

      useEffect(() => {
          //console.log("navBar")
          window.addEventListener("scroll", onScroll);
          return () => window.removeEventListener('scroll', onScroll)
      }, []);

      useEffect(() => {
        let root = document.documentElement;
        document.addEventListener("scroll", evt => {
            setDistanceFromTop(root.scrollTop);
            //root.style.setProperty("--scrollTop", root.scrollTop);
        });
      }, [])
    //console.log('toggleNavDisplay3', toggleNavDisplay)
    const SocialWrapper = styled.section`
      position: fixed;
      top: 0rem;
      width: 100%;
      z-index: 100;
    `

    const SocialMediaIcons = styled.section`
        background-color: rgba(255, 160, 57, 0.5);
        padding-top: 0.4rem;
        width: 100%;
        ul{
            margin-top: 0;
            margin-left: 50%;
            display: flex;
            justify-content: space-evenly;
        }
        ol{
            margin:0;
            padding: 0px 0.2rem;
        }
        ol a {
            color: white;
            text-decoration: none;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        ol:last-child {
            padding-right: 0.4rem;
        }

        //position ${props => props.tween ? 'fixed' : 'sticky'};
        //top: ${props => props.scrolling && props.tween  ? '0rem' : ' 3.8rem'};
        position: relative;
        @supports (top: max(1em, 1px)){
            top: max(calc(0rem), calc(3.72rem - max(${distanceFromTop} * 1px, 0rem) )); //- max(${distanceFromTop} * 1px, 0rem)
        }



        //3.72rem; 
        //relative and 3.8 on not scroll
        //sticky with 0rem works on scroll
        //z-index: 100;
        //top: 4rem
        //background-color: ${props =>
             props.tween ? 'hotpink' : 'turquoise'};
        //animation: ${props =>
            props.tween ? '': css`${bounce} 1s cubic-bezier(.8,.04,.83,.67) 1 forwards;`};
        @media (max-width: 766px) {
            display:none;
        };
        //background: rgba(255, 255, 255, 0.2);
        //border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        //border: 1px solid rgba(255, 255, 255, 0.3);
    `
    const bounce = keyframes`
        from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
        }
    
        40%, 43% {
        transform: translate3d(0, 0, 0);
        }
    
        70% {
        transform: translate3d(0, 0, 0);
        }
    
        90% {
        transform: translate3d(0,0,0);
        }
    `
    const moveDown = keyframes`
        100%{
            top: 0.1rem;
        }
    `
    // const tweenNav = props => props.toggleNavDisplay ?
    // css`
    //     animation: ${bounce} 1s ease infinite;
    // `
    // : ''
    console.log('tween on scoai' , tween)
    return (
        <SocialWrapper css={css`
            z-index 10000;
        `}>
        
        <SocialMediaIcons 
            tween = {toggleNavDisplay} 
            scrolling = {isScroling}
        >
            <ul css={css`
                    font-size: 1.4rem;
                `}>
                <ol><a href=""><FaFacebookSquare /></a></ol>
                <ol><a href=""><FaTwitter /></a></ol>
                <ol><a href=""><FiInstagram/> </a></ol>
                <ol><a href=""><SiTiktok/> </a></ol>
                <ol><a href=""><ImSteam /></a></ol>
                <ol><a href=""><FaItchIo /></a></ol>
                <ol><a href=""><GrLinkedin /></a></ol>
            </ul>
        </SocialMediaIcons>
        </SocialWrapper>
    )
}

export default React.memo(SocialMediaNav)