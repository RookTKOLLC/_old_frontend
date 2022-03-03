import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import { ImSteam } from '@react-icons/all-files/im/ImSteam'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { SiTiktok } from '@react-icons/all-files/si/SiTiktok'
import { FaItchIo } from '@react-icons/all-files/fa/FaItchIo'
import { GrLinkedin } from '@react-icons/all-files/gr/GrLinkedin'
import { IconContext } from "react-icons";

function SocialMediaNav({ tween }) {
    const [isScroling, setIsScrolling] = useState(0);
    const [toggleNavDisplay, setToggleNavDisplay] = useState(false)
    const [distanceFromTop, setDistanceFromTop] = useState(0)


    useEffect(() => {

        if (tween && !toggleNavDisplay) {
            setToggleNavDisplay(true);
        }
        console.log('this is toggleNavDisplay', toggleNavDisplay)
        console.log('this is tween', tween)
    }, [tween])
    
    {/* TODO: On initial load bounce down socialmedianav and fix css for it */}

    const onScroll = () => {
        const docEl = document.documentElement;
        const windowScrollHeight = docEl.scrollTop;
        const currentWindowHeight = docEl.scrollHeight - docEl.clientHeight;
        const scroll = (windowScrollHeight / currentWindowHeight) * 100;
        setIsScrolling(scroll)
        console.log('isscrolling on scoai', isScroling)
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    useEffect(() => {
        let root = document.documentElement;
        document.addEventListener("scroll", evt => {
            setDistanceFromTop(root.scrollTop);
        });
    }, [])

    const bounce = keyframes`
    from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
      }
      0%{
        transform: translate3d(0,-4rem,0);
      }
      40%, 43% {
        transform: translate3d(0, -30px, 0);
      }
    
      70% {
        transform: translate3d(0, -15px, 0);
      }
    
      90% {
        transform: translate3d(0,-4px,0);
      }
    `
    const moveDown = keyframes`
        100%{
            top: 0.1rem;
        }
    `

    const SocialWrapper = styled.section`
      position: fixed;
      @supports (top: max(1em, 1px)){
        top: max(calc(0rem), calc(3.8rem - max(${distanceFromTop} * 1px, 0rem) )); //- max(${distanceFromTop} * 1px, 0rem)
    }
      width: 100%;
      z-index: 100; //todo change to 100
    `

    const SocialMediaIcons = styled.section`
        background-color: rgba(244, 130, 37, 0.7);
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
            padding: 0px 1rem;
        }
        ol a {
            color: white;
            text-decoration: none;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        ol:last-child {
            padding-right: 0.4rem;
        }
        animation: ${props =>
            props.tween ? css`${bounce} 1s cubic-bezier(.8,.04,.83,.67) 1 forwards;` : ''};
        @media (max-width: 784px) {
            display:none;
        };
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);

    `

    const pulsate = keyframes`
    0% {
        transform: scale(1);
        filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0.2));
    }

    50% {
        transform: rotate(10deg) scale(1.2);
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));
    }

    90%{
        transform: scale(0.85);
    }
    100% {
        transform: scale(1);
        //filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0.2));
        filter: drop-shadow(1px 1px 0 rgba(234,191,255,0.5)) drop-shadow(-1px -1px 0 rgba(234,191,255,0.5)) drop-shadow(1px -1px 0 rgba(234,191,255,0.5)) drop-shadow(-1px 1px 0 rgba(234,191,255,0.5));
    }
    `
    const SocialLinks = styled.ol`
        &:hover{
            cursor:pointer;
            animation: ${pulsate} 800ms ease-in-out 1;
            animation-fill-mode: forwards;
        }
        padding-left: 3rem;
    `

    // const tweenNav = props => props.toggleNavDisplay ?
    // css`
    //     animation: ${bounce} 1s ease infinite;
    // `
    // : ''
    return (
        <SocialWrapper
            tween={toggleNavDisplay}
        >

            <SocialMediaIcons
                tween={tween}
                toggle = {toggleNavDisplay}
                scrolling={isScroling}
            >
                <ul css={css`
                    font-size: 1.4rem;
                    padding-right: 1rem;
                `}>
                    <SocialLinks><a href="https://example.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a></SocialLinks>
                    <SocialLinks><a href=""><FaTwitter /></a></SocialLinks>
                    <SocialLinks><a href=""><FiInstagram /> </a></SocialLinks>
                    <SocialLinks><a href=""><SiTiktok /> </a></SocialLinks>
                    <SocialLinks><a href=""><ImSteam /></a></SocialLinks>
                    <SocialLinks><a href=""><FaItchIo /></a></SocialLinks>
                    <SocialLinks><a href=""><GrLinkedin /></a></SocialLinks>
                </ul>
            </SocialMediaIcons>
        </SocialWrapper>
    )
}

export default React.memo(SocialMediaNav)